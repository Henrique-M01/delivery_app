import PropTypes from 'prop-types';
import React from 'react';

export default function Product({ id, name, image, price }) {
  return (
    <div className="product">
      <span className="product-price">
        {`R$ ${price
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
      </span>
      <img src={ image } alt={ name } />
      <div className="footer-section">
        <p>{ name }</p>
        <div className="button-section">
          <input type="text" className="card-input" />
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
