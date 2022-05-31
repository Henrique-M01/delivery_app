import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Main /> } />
      <Route path="/login" element={ <LoginPage /> } />
    </Routes>
  );
}

export default App;
