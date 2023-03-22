import React, { useContext } from 'react';
import PaymentInformation from "../../components/Checkout/PaymentInformation";
import AppContext from '../../context/AppContext';



function Payment() {
  /* ---------- AppContext -----------*/
  const { state } = useContext(AppContext);
  const { cart, buyer } = state;
  
  const handleTotal = () => {
    if (cart.length === 0) {
      return 0;
    }
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity);
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  
  return(
    <PaymentInformation cart={cart} handleTotal={handleTotal} buyer={buyer}/>
  );
};

export default Payment;
