import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSales } from '../api/fetchSales';
import Header from '../components/navbar/Header';
import OrderCard from '../components/order/OrderCard';
import { setOrders } from '../redux/actions';

function OrdersPage({ user: { role }, orders: { order }, setOrder }) {
  const USER = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchSales(USER.id, USER.token)
      .then((res) => {
        setOrder(res);
      })
      .catch((err) => console.error(err));
  }, [USER.id, USER.token, USER.role , setOrder]);

  return (
    <div>
      <Header />

      {!order
        ? <span>Loading...</span>
        : (
          order.map((item) => (
            <OrderCard
              key={ item.id }
              role={ role }
              totalPrice={ item.totalPrice }
              id={ item.id }
              date={ item.saleDate }
              address={ item.deliveryAddress }
              addressNumber={ item.deliveryNumber }
              status={ item.status }
            />
          )))}
    </div>
  );
}

OrdersPage.propTypes = {
  setOrder: PropTypes.func.isRequired,
  user: PropTypes.shape({
    role: PropTypes.string,
  }).isRequired,
  orders: PropTypes.shape({
    order: PropTypes.shape({
      id: PropTypes.string,
      totalPrice: PropTypes.string,
      saleDate: PropTypes.number,
      status: PropTypes.string,
      deliveryAddress: PropTypes.string,
      deliveryNumber: PropTypes.string,
      map: PropTypes.func,
    }).isRequired,
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
