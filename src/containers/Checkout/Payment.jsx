import React, { useContext } from 'react';
import PaymentInformation from "../../components/Checkout/PaymentInformation";
import AppContext from '../../context/AppContext';
import MetaData from '../../components/MetaData';

const meta = (
  <MetaData
    title="Payment"
    description="Confirma tu metodo de pago"
    image="https://images.unsplash.com/photo-1540200049848-d9813ea0e120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    url="https://whitelabelsv/Payment"
  />
);

function Payment() {
  /* ---------- AppContext -----------*/
  const { state } = useContext(AppContext);
  const { cart, buyer } = state;
  
  const handleTotal = () => {
    if (cart.length === 0) {
      return 0;
    }
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.attributes.price * currentValue.quantity);
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  
  return(
    <>
      {meta}
      <PaymentInformation cart={cart} handleTotal={handleTotal} buyer={buyer}/>
    </>
  );
};

export default Payment;
