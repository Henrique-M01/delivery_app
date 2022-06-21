import React from 'react';
import PropTypes from 'prop-types';
import ProductsDetails from '../products/ProductsDetail';

export default function OrderDetails({ id, date, status, products, totalPrice }) {
  return (
    <div>
      <h1>Detalhes do pedido</h1>
      <div>
        <div>
          <h2
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            Pedido
            {' '}
            { id }
          </h2>
          <span
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            { date.split('T')[0] }

          </span>
          <span
            data-testid={ `
            seller_order_details__element-order-details-label-delivery-status$` }
          >
            { status }

          </span>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
          >
            Preparar pedido
          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
          >
            Saiu para entrega
          </button>
        </div>
        <div>
          <span>Item</span>
          <span>Descricao</span>
          <span>Quantidade</span>
          <span>Valor Unitario</span>
          <span>Sub-total</span>
        </div>
        <div>
          {products.map((product, index) => (
            <ProductsDetails
              key={ product.id }
              index={ index }
              name={ product.name }
              quantity={ product.quantity }
              value={ product.value }
            />
          ))}
        </div>
        <button
          type="button"
          data-testid="seller_order_details__element-order-total-price"
        >
          Total:
          {' '}
          { totalPrice }
        </button>
      </div>
    </div>
  );
}

OrderDetails.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  products: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    map: PropTypes.func,
  }).isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
