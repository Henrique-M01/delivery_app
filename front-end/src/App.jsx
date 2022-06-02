import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';
import Register from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Main /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default App;
