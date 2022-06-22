import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSales } from '../api/fetchSales';
import Header from '../components/navbar/Header';
import OrderCard from '../components/order/OrderCard';

function OrdersPage({ user }) {
  const { role } = user;
  const [orders, setOrders] = useState([]);

  const USER = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchSales(USER.id, USER.token)
      .then((res) => {
        setOrders(res);
      })
      .catch((err) => console.error(err));
  }, [USER.id, USER.token]);

  return (
    <div>
      <Header />

      {orders.length === 0
        ? <span>Loading...</span>
        : (
          orders.map((order) => (
            <OrderCard
              key={ order.id }
              role={ role }
              totalPrice={ order.totalPrice }
              id={ order.id }
              date={ order.saleDate }
              address={ order.deliveryAddress }
              addressNumber={ order.deliveryNumber }
              status={ order.status }
            />
          )))}
    </div>
  );
}

OrdersPage.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string.isRequired,
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
