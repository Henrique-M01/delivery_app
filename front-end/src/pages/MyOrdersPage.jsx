import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/navbar/Header';
import OrderCard from '../components/order/OrderCard';

function MyOrdersPage({ user: { role } }) {
  return (
    <div>
      <Header />

      <OrderCard role={ role } />
    </div>
  );
}

MyOrdersPage.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userInfo,
});

export default connect(mapStateToProps, null)(MyOrdersPage);
