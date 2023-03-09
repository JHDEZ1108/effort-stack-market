import React, { useContext } from 'react';
import PaymentInformation from "../../components/Checkout/PaymentInformation";
import AppContext from '../../context/AppContext';



function Payment() {
  /* ---------- AppContext -----------*/
  const { state } = useContext(AppContext);
  const { cart } = state;
  
  const handleTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  
  return(
    <PaymentInformation cart={cart} handleTotal={handleTotal} />
  );
};

export default Payment;
