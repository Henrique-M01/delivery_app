import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
  return (
    <header className="header">
      <nav className="flex nav-bar">
        <div className="flex group-1">
          <Link to="/customer/products">Produtos</Link>
          <Link to="/customer/products">Meus pedidos</Link>
        </div>

        <div className="flex group-2">
          <Link to="/customer/products" className="user">Sicrano da Silva</Link>
          <Link to="/login" className="logout">Sair</Link>
        </div>
      </nav>
    </header>
  );
}
