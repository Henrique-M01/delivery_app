import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/navbar/Header';
import OrderCard from '../components/order/OrderCard';
import fetchSales from '../api/fetchSales';
import { setOrders } from '../redux/actions';

function OrdersPage({ user: { role }, orders: { order }, setOrder }) {
  const USER = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchSales(USER.id, USER.token, USER.role)
      .then((res) => {
        setOrder(res);
      })
      .catch((err) => console.log(err));
  }, [USER.id, USER.role, USER.token, setOrder]);

  return (
    <div>
      <Header />
      {!order ? <span>Loading...</span> : order.map((item) => (
        <OrderCard
          key={ item.id }
          role={ role }
          totalPrice={ item.totalPrice }
          id={ item.id }
          date={ item.saleDate }
          adrees={ item.deliveryAddress }
          adreesNumber={ item.deliveryNumber }
          status={ item.status }
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userInfo,
  orders: state.orders,
});

const mapDispatchToProps = (dispatch) => ({
  setOrder: (orders) => dispatch(setOrders(orders)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
