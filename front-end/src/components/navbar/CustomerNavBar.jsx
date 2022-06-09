import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CustomerNavBar({ userName }) {
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
          to="/customer/orders"
          className="group-1-link"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus pedidos
        </Link>
      </div>

      <div className="flex group-2">
        <h1
          className="user"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userName}
        </h1>
        <Link
          to="/login"
          className="logout"
          onClick={ () => localStorage.removeItem('user') }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </Link>
      </div>
    </nav>
  );
}

CustomerNavBar.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default CustomerNavBar;
