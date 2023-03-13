import { useState } from "react";
import { nanoid } from 'nanoid'
import initialState from "../assets/initialState"

const useInitialState = () => {
  const [state, setState] = useState({
    ...initialState,
    products: initialState.products.map(p => ({ ...p, id: nanoid() })),
    cart: []
  })

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

  return { state, addToCart, removeFromCart, addToBuyer }
}

export default useInitialState;