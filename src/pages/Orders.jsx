import React, { useEffect, useState } from 'react'
import { userRequest } from '../axiosService';
import styled from 'styled-components';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NoOrders from '../components/NoOrders';



const OrdersContainer = styled.div`
min-height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: left;
justify-content: center;
flex-direction: column;
`;

const OrderCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CancelButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 4px;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const isCancellable = (createdAt , status) => {
    if(status !== 'success') return false;
  const orderDate = new Date(createdAt);
  const currentDate = new Date();
  const timeDiff = currentDate - orderDate;
  const twoDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000;
  return timeDiff <= twoDaysInMilliseconds;
};

function Orders() {

    const [orders,setOrders] = useState();
    useEffect(() => {
        const fetchOrders = async () => {
          try {
            const res = await userRequest.get("/order");
            setOrders(res.data.order);
          } catch {}
        };
        fetchOrders();
      }, []);

   const handleCancelOrder = (orderId) => {
    const cancelOrder = async () => {
        try {
          const res = await userRequest.get(`/cancel?orderid=${orderId}`);
          if(res.status === 200){
            let newOrders = [...orders];
            newOrders.find((order) => order._id === orderId).status = "Cancelled";
            setOrders(newOrders);
          }
        } catch {}
      };
      cancelOrder();
   }

  return (
    <div>
    <Navbar/>
    <OrdersContainer>
        {
            !orders && <Loader/>
        }
        {orders?.length ===0 && <NoOrders/>}
    {orders?.map((order) => (
      <OrderCard key={order._id}>
        <h3>Order Details</h3>
        <p>Order ID: {order._id}</p>
        <p>Amount: ${order.amount}</p>
        <p>Status: <span style={{ fontWeight:700, color: order.status === 'success' ? 'green' : 'red' }}>{order.status}</span></p>
        <p>Created At: {formatDate(order.createdAt)}</p>
        <ProductList>
          <h4>Products</h4>
          {order.products.map((product) => (
            <ProductItem key={product._id}>
              <span>{product.title}</span>
              <span>Quantity: {product.quantity}</span>
              <span>Price: ${product.price}</span>
            </ProductItem>
          ))}
        </ProductList>
        {isCancellable(order.createdAt, order.status) && <CancelButton onClick={()=> handleCancelOrder(order._id)}>Cancel Order</CancelButton>}
      </OrderCard>
    ))}
  </OrdersContainer>
  <Footer/>
  </div>
  )
}

export default Orders;
