import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/navbar/Header';

function CheckoutPage() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default connect(null, null)(CheckoutPage);
