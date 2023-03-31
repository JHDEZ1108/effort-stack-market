import React from 'react';
import MetaData from '../components/MetaData';
import Products from '../components/Products/Products';

const meta = (
  <MetaData
    title="Home"
    description="Encuentra todos tus productos favoritos"
    image="https://images.unsplash.com/photo-1540200049848-d9813ea0e120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    url="https://whitelabelsv/"
  />
);

function Home() {  
  
  return (      
    <>
      {meta}
      <Products />
    </>
  );
}

export default Home;