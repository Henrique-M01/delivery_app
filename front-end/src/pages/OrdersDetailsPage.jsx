import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from '../components/navbar/Header';
import OrderDetails from '../components/orderDetails/OrderDetails';

function OrderDetailsPage({ orders }) {
  const location = useLocation();

  const ID = location.pathname.split('/')[3];
 
  const order = orders.find((order) => order.id === Number(ID));

  return (
    <div>
      <Header />
      <OrderDetails
        id={ order.id }
        date={ order.date }
        status={ order.status }
        products={ order.products }
        totalPrice={ order.totalPrice }
      />
    </div>
    
  )
}

const mapStateToProps = (state) => ({
  orders: state.orders.order,
});

export default connect(mapStateToProps)(OrderDetailsPage);
