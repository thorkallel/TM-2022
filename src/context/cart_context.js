import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // add to cart
  const addToCart = (id, amount, name, price) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, name, price } })
  }


  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS })
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
