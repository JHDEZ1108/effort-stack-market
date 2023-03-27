import React, { useContext } from 'react';
import OrderSummary from '../../components/Checkout/OrderSummary';
import AppContext from '../../context/AppContext';
import MetaData from '../../components/MetaData';

const meta = (
  <MetaData
    title="Checkout"
    description="Confirma tus productos"
    image="https://images.unsplash.com/photo-1540200049848-d9813ea0e120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    url="https://whitelabelsv/Checkout"
  />
);

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
    <>
      {meta}
      <OrderSummary 
        cart={cart} 
        handleRemove={handleRemove} 
        handleQuantityChange={handleQuantityChange}
        handleTotal = {handleTotal}
      />
    </>
  )
}

export default Checkout;