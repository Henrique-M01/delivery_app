import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomerNavBar() {
  return (
    <nav className="flex nav-bar">
      <div className="flex group-1">
        <Link
          to="/customer/products"
          className="group-1-link"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
        <Link
          to="/customer/products"
          className="group-1-link"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus pedidos
        </Link>
      </div>

      <div className="flex group-2">
        <Link
          to="/customer/products"
          className="user"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Sicrano da Silva
        </Link>
        <Link
          to="/login"
          className="logout"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </Link>
      </div>
    </nav>
  );
}
