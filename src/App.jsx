import React from 'react';
import Nav from './component/Nav';
import Product from './component/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProduc from './component/CartProduc';
import { CartProvider } from './Context';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/CartProduc' element={<CartProduc />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
