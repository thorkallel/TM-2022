import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProductsProvider } from '../context/products_context';
import { CartProvider } from '../context/cart_context';
import App from '../App';

test('<App /> Prueba de integracón', () => {
	const wrapper = render(
		<ProductsProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ProductsProvider>
		);
		wrapper.debug();
});