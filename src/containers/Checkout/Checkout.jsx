/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import initialState from '../../assets/initialState';
import OrderSummary from '../../components/Checkout/OrderSummary';

function Checkout() {
  
  return (
    <OrderSummary products={initialState.products} />
  )
}

export default Checkout;