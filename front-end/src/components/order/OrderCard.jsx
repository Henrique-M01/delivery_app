import React from 'react';
import PropTypes from 'prop-types';
import './order.css';

function OrderCard({ role }) {
  return (
    <div className="order-card flex">
      <div className="order-number flex">Pedido 0001</div>

      {role === 'seller'
        ? (
          <div className="flex group-2-order">
            <div className="flex group-2-a">
              <div className="order-status flex">
                <h2>Entregue</h2>
              </div>

              <div className="order-details flex">
                <span className="flex">06/06/2022</span>
                <span className="flex">R$ 35,00</span>
              </div>
            </div>

            <div className="flex address">Rua Lorem ipsum dolor, nº 100</div>
          </div>
        ) : (
          <>
            <div className="order-status flex stretch">
              <h2>Entregue</h2>
            </div>

            <div className="order-details flex">
              <span className="flex">06/06/2022</span>
              <span className="flex">R$ 35,00</span>
            </div>
          </>
        )}
    </div>
  );
}

OrderCard.propTypes = {
  role: PropTypes.string.isRequired,
};

export default OrderCard;
