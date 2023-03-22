/* eslint-disable no-console */
import React, { useContext } from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid';
import AppContext from '../../context/AppContext';

function PayPalCheckoutButton ({ cart, handleTotal, buyer }) {
  const navigate = useNavigate();
  const { addNewOrder } = useContext(AppContext);
  const shippingCost = 3;

  const initialOptions = {
    "client-id": process.env.REACT_APP_CLIENT_ID,
    currency: "USD",
    intent: "capture"
  }

  const createOrder = (data, actions) => actions.order.create({
    purchase_units: [
      {
        reference_id: nanoid(),
        amount: {
          value: handleTotal() + shippingCost, // Se suma el costo de envío al total de la compra
          currency_code: "USD",
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: cart.reduce((total, item) => total + item.price * item.quantity, 0)
            },
            shipping: { // Se agrega el costo de envío en el breakdown
              currency_code: "USD",
              value: shippingCost
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
        })),
        payer: {
          name: {
            given_name: buyer.firstName,
            surname: buyer.lastName
          },
          email_address: buyer.email
        },
      }
    ]
  });

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    const newOrder = {
      id: nanoid(),
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
