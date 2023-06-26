/* eslint-disable no-console */
import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import axios from "axios";
import initialState from "../assets/initialState"

const API = 'https://api.whitelabelsv.com/api/products?populate=%2A';

const useInitialState = () => {
  const [state, setState] = useState({
    ...initialState,
    products: [],
    cart: []
  });
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios(API);
        if (Array.isArray(response.data.data)) {
          setState(prevState => ({
            ...prevState,
            products: response.data.data.map(p => ({ ...p, id: nanoid() }))
          }));
        } else {
          console.error('API response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getData();
  }, []);
  
  

  const addToCart = (product, quantity = 1) => {
    const existingItem = state.cart.find(p => p.id === product.id);
    if (existingItem) {
      const updatedCart = state.cart.map(p => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + quantity };
        }
        return p;
      });
      setState({
        ...state,
        cart: updatedCart
      });
    } else {
      setState({
        ...state,
        cart: [
          ...state.cart,
          {
            ...product,
            id: nanoid(),
            quantity
          }
        ]
      });
    }
  }

  const removeFromCart = (product) => {
    const updatedCart = state.cart.filter(p => p.id !== product.id);
    setState({
      ...state,
      cart: updatedCart
    });
  }

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }
  
  const addNewOrder = payload =>{
    setState({
      ...state,
      orders:[...state.orders, payload]
    })
  }
  
  const clearCart = () => {
    setState({
      ...state,
      cart: []
    });
  };

  return { state, addToCart, removeFromCart, addToBuyer, addNewOrder, clearCart }
}

export default useInitialState;