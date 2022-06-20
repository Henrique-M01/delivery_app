import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/navbar/Header';
import OrderCard from '../components/order/OrderCard';
import fetchSales from '../api/fetchSales';

function OrdersPage({ user: { role } }) {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  const USER = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchSales(USER.id, USER.token, USER.role)
      .then((res) => {
        setOrders(res);
      });
  }, []);

  return (
    <div>
      <Header />
      {!orders ? <span>Loadind...</span> : orders.map((order) => (
        <div
          key={ order.id }
          onClick={ () => navigate(`/sales/orders/${order.id}`) }
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
});

export default connect(mapStateToProps, null)(OrdersPage);
