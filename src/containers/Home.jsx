import React from 'react';
import Products from '../components/Products/Products';
import initialState from '../assets/initialState';

function Home() {  
  return (      
    <Products products={initialState.products} />
  );
}

export default Home;