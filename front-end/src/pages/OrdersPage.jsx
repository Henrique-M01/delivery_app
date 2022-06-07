import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/navbar/Header';
import OrderCard from '../components/order/OrderCard';

function OrdersPage({ user: { role } }) {
  return (
    <div>
      <Header />

      <OrderCard role={ role } />
    </div>
  );
}

OrdersPage.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userInfo,
});

export default connect(mapStateToProps, null)(OrdersPage);
