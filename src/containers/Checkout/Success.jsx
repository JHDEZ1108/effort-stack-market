import React, { useContext, useState, useEffect } from 'react';
import PaymentSuccesfull from '../../components/Checkout/PaymentSuccesfull';
import AppContext from '../../context/AppContext';

function Success() {
  /* ---------- AppContext -----------*/
  const { state } = useContext(AppContext);
  const { cart, orders } = state;
  
  const handleTotal = () => {
    if (cart.length === 0) {
      return 0;
    }
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity);
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
    <PaymentSuccesfull cart={cart} handleTotal={handleTotal} firstName={firstName} lastName={lastName}/>
  );
}

export default Success;