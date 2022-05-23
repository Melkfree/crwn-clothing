import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import { store } from './store/store';

import './index.scss';
import App from './App';  


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
