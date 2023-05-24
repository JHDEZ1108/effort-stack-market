import React, { useContext, useState, useEffect } from 'react';
import PaymentSuccesfull from '../../components/Checkout/PaymentSuccesfull';
import AppContext from '../../context/AppContext';
import MetaData from '../../components/MetaData';

const meta = (
  <MetaData
    title="Success"
    description="Orden confirmada"
    image="https://images.unsplash.com/photo-1540200049848-d9813ea0e120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    url="https://whitelabelsv/Success"
  />
);

function Success() {
  /* ---------- AppContext -----------*/
  const { state } = useContext(AppContext);
  const { cart, orders } = state;
  
  const handleTotal = () => {
    if (cart.length === 0) {
      return 0;
    }
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.attributes.price * currentValue.quantity);
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const buyer = orders && orders[0] && orders[0].buyer && orders[0].buyer[0];

    setFirstName(buyer && buyer.firstName ? buyer.firstName : "Comprador");
    setLastName(buyer && buyer.lastName ? buyer.lastName : "o Compradora");
  }, [orders]);
  
  return(
    <>
      {meta}
      <PaymentSuccesfull cart={cart} handleTotal={handleTotal} firstName={firstName} lastName={lastName}/>
    </>
  );
}

export default Success;