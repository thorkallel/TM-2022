import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import { ProductsProvider } from './context/products_context';
import { CartProvider } from './context/cart_context';

ReactDOM.render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>,
  document.getElementById('root')
);