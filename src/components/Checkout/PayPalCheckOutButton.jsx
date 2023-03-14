import React, { useContext } from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import {  useNavigate } from "react-router-dom";
import AppContext from '../../context/AppContext';

function PayPalCheckoutButton ({ cart, handleTotal }) {
  const navigate = useNavigate();
  const { state, addNewOrder } = useContext(AppContext);
  const { buyer } = state;
  
  const initialOptions = {
    "client-id": process.env.REACT_APP_CLIENT_ID,
    currency: "USD",
    intent: "capture"
  }
  
  const createOrder = (data, actions) => actions.order.create({
    purchase_units: [
      {
        amount: {
          value: handleTotal(),
          currency_code: "USD",
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: cart.reduce((total, item) => total + item.price * item.quantity, 0)
            }
          }
        },
        items: cart.map((item) => ({
          name: item.title,
          quantity: item.quantity,
          unit_amount: {
            value: item.price,
            currency_code: "USD"
          }
        }))
      }
    ]
  });
  
  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    const newOrder = {
      buyer,
      product: cart,
      payment: order
    };
    addNewOrder(newOrder);
    navigate("/checkout/success");

  };
  
  const onError = (err) => {
    console.error("Error en el pago: ", err);
  }
  
  return(
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons 
        style={{ layout: "horizontal", tagline: false }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckoutButton;