import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CustomerNavBar from './CustomerNavBar';
import NavBar from './NavBar';
import './navbar.css';

function Header({ user: { role } }) {
  return (
    <header className="header">
      {
        role === 'customer'
          ? <CustomerNavBar />
          : <NavBar userRole={ role } />
      }
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userInfo,
});

export default connect(mapStateToProps, null)(Header);
