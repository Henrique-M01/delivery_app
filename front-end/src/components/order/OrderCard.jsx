import React from 'react';
import './order.css';

function OrderCard() {
  return (
    <div className="order-card flex">
      <div className="order-number flex">Pedido 0001</div>

      <div className="order-status flex">
        <h2>Entregue</h2>
      </div>

      <div className="order-details flex">
        <span className="flex">06/06/2022</span>
        <span className="flex">R$ 35,00</span>
      </div>
    </div>
  );
}

export default OrderCard;
