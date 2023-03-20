import React, { useContext } from 'react';
import PaymentSuccesfull from '../../components/Checkout/PaymentSuccesfull';
import AppContext from '../../context/AppContext';

function Success() {
  /* ---------- AppContext -----------*/
  const { state } = useContext(AppContext);
  const { cart, buyer } = state;
  
  return(
    <PaymentSuccesfull cart={cart} buyer={buyer}/>
  );
}

export default Success;