import { Badge } from "@material-ui/core";
import { History, ListAlt, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 4px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: left;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: red;
  ${mobile({ fontSize: "20px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 4, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.cartQuantity);
  const activeUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch({ type: "SIGNOUT_REQUEST" });
  };
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <Left>
            <Logo>RED</Logo>
            <Logo style={{ color: "black" }}>STORE</Logo>
          </Left>
        </Link>
        <Right>
          {activeUser && (
            <>
              <span>{activeUser.doc.name}</span>
              <MenuItem onClick={handleSignOut}>LOGOUT</MenuItem>
            </>
          )}
          {!activeUser && (
            <Link to="/register" style={{ textDecorationLine: "none" }}>
              <MenuItem>REGISTER</MenuItem>
            </Link>
          )}
          {!activeUser && (
            <Link to="/login" style={{ textDecorationLine: "none" }}>
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          )}
          {activeUser && (
<>
            <Link to="/cart" style={{ textDecorationLine: "none" }}>
            <MenuItem>
              <Badge
                overlap="rectangular"
                badgeContent={quantity}
                color="primary"
                >
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>

<Link to="/orders" style={{ textDecorationLine: "none" }}>
<MenuItem>
  <Badge
    overlap="rectangular"
    
    color="primary"
    >
    <ListAlt />
  </Badge>
</MenuItem>
</Link>
</>
                )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
