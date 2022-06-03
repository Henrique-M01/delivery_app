import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';
<<<<<<< HEAD
import Register from './pages/RegisterPage';
=======
>>>>>>> 7fa2054d093b295c2c59b735678dcd4ea14af200
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Main /> } />
      <Route path="/login" element={ <LoginPage /> } />
<<<<<<< HEAD
      <Route path="/register" element={ <Register /> } />
      <Route path="/produtos" element={ <ProductsPage /> } />
=======
      <Route path="/customer/products" element={ <ProductsPage /> } />
>>>>>>> 7fa2054d093b295c2c59b735678dcd4ea14af200
    </Routes>
  );
}

export default App;
