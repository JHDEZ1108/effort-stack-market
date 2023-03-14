import React, { useContext } from 'react';
import OrderSummary from '../../components/Checkout/OrderSummary';
import AppContext from '../../context/AppContext';


function Checkout() {
  const { state, addToCart, removeFromCart } = useContext(AppContext);
  
  /* ---------- AppContext -----------*/  
  const { cart } = state;

  const handleRemove = product => () => {
    removeFromCart(product);
  };
  
  const handleQuantityChange = (product, quantity) => {
    addToCart(product, quantity - product.quantity);
  }
  
  const handleTotal = () => {
    if (cart.length === 0) {
      return 0;
    }
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity);
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  
  return (
    <OrderSummary 
      cart={cart} 
      handleRemove={handleRemove} 
      handleQuantityChange={handleQuantityChange}
      handleTotal = {handleTotal}
    />
  )
}

export default Checkout;