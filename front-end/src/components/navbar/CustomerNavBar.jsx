import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomerNavBar() {
  return (
    <nav className="flex nav-bar">
      <div className="flex group-1">
        <Link to="/customer/products" className="group-1-link">
          Produtos
        </Link>
        <Link to="/customer/products" className="group-1-link">
          Meus pedidos
        </Link>
      </div>

      <div className="flex group-2">
        <Link to="/customer/products" className="user">Sicrano da Silva</Link>
        <Link to="/login" className="logout">Sair</Link>
      </div>
    </nav>
  );
}
