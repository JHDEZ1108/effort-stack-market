import { useState } from "react";
import { nanoid } from 'nanoid'
import initialState from "../assets/initialState"

const useInitialState = () => {
  const [state, setState] = useState({
    ...initialState,
    products: initialState.products.map(p => ({ ...p, id: nanoid() }))
  })

  const addToCart = (product) => {
    setState({
      ...state,
      cart: state.cart.concat({
        ...product,
        id: nanoid()
      })
    })
  }

  const removeFromCart = (product) => {
    setState({
      ...state,
      cart: state.cart.filter(p => p.id !== product.id)
    })
  }

  return { state, addToCart, removeFromCart }
}

export default useInitialState;

