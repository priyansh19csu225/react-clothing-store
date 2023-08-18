import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px" })}

`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}


`;


const PaymentSuccess = () => {
  return (
    <Container>
      <Title>THANK YOU!</Title>
      <Desc>Wohoo!! Your order has been successfully placed and will arrive in 2-3 business days.</Desc>
     
    </Container>
  );
};

export default PaymentSuccess;