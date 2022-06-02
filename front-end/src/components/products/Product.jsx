import PropTypes from 'prop-types';
import React from 'react';

export default function Product({ name, image, price }) {
  return (
    <div className="product">
      <img src={ image } alt={ name } />
      <h2>{ name }</h2>
      <span>
        { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
      </span>
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
