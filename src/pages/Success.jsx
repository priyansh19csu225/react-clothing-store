import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PaymentSuccess from '../components/PaymentSuccess';
import Loader from '../components/Loader';
import { useHistory } from 'react-router-dom';
import { userRequest } from '../axiosService';
import { emptyCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Success = () => {
  const [orderSuccess , setOrderSucess] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
  
      const bookOrder = async () => {
        try {
          const res =  await userRequest.post("/book");
          if(res) {
            setOrderSucess(true);
            dispatch(
              emptyCart()
              );
             
          }
        } catch {
          
          history.push('/orders');
        }
      };
      bookOrder();
    
  }, []);
  return (
    <div>
    <Navbar/>
    {
      !orderSuccess && <Loader/>
    }
    {
      orderSuccess && 
    <PaymentSuccess/>
    }
    <Footer/>
    </div>
  )
}

export default Success