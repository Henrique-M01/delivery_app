import React from 'react';
import CustomerNavBar from './CustomerNavBar';
import NavBar from './NavBar';
import './navbar.css';

export default function Header() {
  return (
    <header className="header">
      <CustomerNavBar />
      <NavBar userRole="seller" />
      <NavBar userRole="admin" />
    </header>
  );
}
