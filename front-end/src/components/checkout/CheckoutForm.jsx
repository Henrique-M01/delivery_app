import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createSale } from '../../api/fetchSales';
import fetchSellers from '../../api/fetchSellers';
import './checkout.css';

function CheckoutForm({ cartItems, userId, token }) {
  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    fetchSellers()
      .then((res) => {
        setSellers(res);
        setSellerId(res[0].id);
      })
      .catch((err) => console.error(err));
  }, []);

  const totalPrice = () => cartItems
    .reduce((total, item) => total + item.quantity * Number(item.price), 0);

  function handleChange(flag, value) {
    if (flag === 'seller') setSellerId(value);
    if (flag === 'address') setAddress(value);
    if (flag === 'number') setNumber(value);
  }

  function handleSubmit() {
    const newOrder = {
      userId,
      sellerId,
      totalPrice: totalPrice(),
      deliveryAddress: address,
      deliveryNumber: number,
      saleDate: Date.now(),
      products: cartItems,
    };

    console.log(newOrder, token);
    // createSale(newOrder, token)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
  }

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        handleSubmit();
      } }
      className="checkout-form flex"
    >
      <div className="flex checkout-inputs">
        <label htmlFor="sellers-select" className="flex seller">
          P. Vendedora Responsável
          <select
            id="sellers-select"
            onChange={ (e) => handleChange('seller', e.target.value) }
            data-testid="customer_checkout__select-seller"
          >
            {sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>{seller.name}</option>
            ))}
          </select>
        </label>

        <label htmlFor="address-input" className="flex address">
          Endereço
          <input
            type="text"
            id="address-input"
            value={ address }
            onChange={ (e) => handleChange('address', e.target.value) }
            data-testid="customer_checkout__input-address"
          />
        </label>

        <label htmlFor="number-input" className="flex number">
          Número
          <input
            type="number"
            id="number-input"
            value={ number }
            onChange={ (e) => handleChange('number', e.target.value) }
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
      </div>

      <button
        type="submit"
        data-testid="customer_checkout__button-submit-order"
        className="btn-checkout"
      >
        Finalizar pedido
      </button>
    </form>
  );
}

CheckoutForm.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  userId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  userId: state.userInfo.id,
  token: state.token,
});

export default connect(mapStateToProps, null)(CheckoutForm);
