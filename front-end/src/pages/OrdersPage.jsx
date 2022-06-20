import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/navbar/Header';
import OrderCard from '../components/order/OrderCard';
import fetchSales from '../api/fetchSales';
import { setOrders } from '../redux/actions';

function OrdersPage({ user: { role }, orders, setOrder }) {
  const navigate = useNavigate();
  console.log('function', setOrder);
  console.log('array', orders);

  const USER = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    setOrder(['alo', 'galera', 'de', 'peao'])
    // fetchSales(USER.id, USER.token, USER.role)
    //   .then((res) => {
    //     setOrder(res);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      {!orders ? <span>Loading...</span> : orders.map((order) => (
        <div
          key={ order.id }
          onClick={ () => navigate(`/seller/orders/${order.id}`) }
        >
          <OrderCard
            role={ role }
            totalPrice={ order.totalPrice }
            id={ order.id }
            date={ order.saleDate }
            adrees={ order.deliveryAddress }
            adreesNumber={ order.deliveryNumber }
            status={ order.status }
          />
        </div>
      ))}
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
    orders: state.orders,
  });

const mapDispatchToProps = (dispatch) => ({
  setOrder: (orders) => dispatch(setOrders(orders)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
