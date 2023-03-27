import React from "react";
import ContactInformation from "../../components/Checkout/ContactInformation";
import MetaData from '../../components/MetaData';

const meta = (
  <MetaData
    title="Contact Information"
    description="Agrega tu información de contacto"
    image="https://images.unsplash.com/photo-1540200049848-d9813ea0e120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    url="https://whitelabelsv/"
  />
);

function Information() {  
  
  return(
    <>
      {meta}
      <ContactInformation />
    </>
  );
};

export default Information;
