import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  addCartItem,
  decrementCartItem,
  decrementProductQtt,
  incrementCartItem,
  incrementProductQtt,
  removeCartItem,
} from '../../redux/actions';

function Product({
  id, name, image, price,
  incrementItem, quantity,
  addItem, removeItem, cartItems,
  incrementProduct, decrementItem,
  decrementProduct,
}) {
  const handleIncrementClick = () => {
    if (cartItems.some((el) => el.id === id)) {
      incrementItem(id);
    } else {
      addItem({ id, name, image, price, quantity: 1 });
      incrementProduct(id);
    }
  };

  const handleDecrementClick = () => {
    if (cartItems.some((el) => el.id === id)) {
      if (quantity === 1) {
        decrementProduct(id);
        removeItem(id);
      } else {
        decrementItem(id);
      }
    }
  };

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
          <button
            type="button"
            className="button-left"
            onClick={ handleDecrementClick }
          >
            -
          </button>
          <input type="text" className="card-input" placeholder={ quantity } />
          <button
            type="button"
            className="button-right"
            onClick={ handleIncrementClick }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  incrementItem: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  incrementProduct: PropTypes.func.isRequired,
  decrementItem: PropTypes.func.isRequired,
  decrementProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  incrementItem: (id) => dispatch(incrementCartItem(id)),
  decrementItem: (id) => dispatch(decrementCartItem(id)),
  incrementProduct: (id) => dispatch(incrementProductQtt(id)),
  decrementProduct: (id) => dispatch(decrementProductQtt(id)),
  addItem: (item) => dispatch(addCartItem(item)),
  removeItem: (id) => dispatch(removeCartItem(id)),
});

const mapStateToProps = (state) => ({
  products: state.cart.products,
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
