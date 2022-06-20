import React from 'react';
import { connect } from 'react-redux';
import CheckoutForm from '../components/checkout/CheckoutForm';
import CheckoutDetails from '../components/checkoutDetails';
import Header from '../components/navbar/Header';

function CheckoutPage() {
  return (
    <div>
      <Header />
      <CheckoutDetails />
      <CheckoutForm />
    </div>
  );
}

export default connect(null, null)(CheckoutPage);
