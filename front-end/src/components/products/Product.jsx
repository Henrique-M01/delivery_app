import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { incrementCartItem } from '../../redux/actions';

function Product({ id, name, image, price, incrementItem, quantity }) {
  return (
    <div className="product" id={ id }>
      <span className="product-price">
        {`R$ ${price
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
      </span>
      <img src={ image } alt={ name } />
      <div className="footer-section">
        <p>{ name }</p>
        <div className="button-section">
          <button type="button" className="button-left">-</button>
          <input type="text" className="card-input" placeholder={ quantity } />
          <button
            type="button"
            className="button-right"
            onClick={ () => {
              console.log(id);
              incrementItem(id);
            } }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  incrementItem: (id) => dispatch(incrementCartItem(id)),
});

const mapStateToProps = (state) => ({
  products: state.cart.products,
});

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  incrementItem: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
