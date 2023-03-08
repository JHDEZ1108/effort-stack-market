import React from "react";
import initialState from '../../assets/initialState';
import PaymentInformation from "../../components/Checkout/PaymentInformation";

function Payment() {
  return(
    <PaymentInformation products={initialState.products} />
  );
};

export default Payment;
