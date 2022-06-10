import React from 'react';
import './checkout.css';

function CheckoutForm() {
  return (
    <form className="checkout-form flex">
      <div className="flex checkout-inputs">
        <label htmlFor="sellers-select" className="flex seller">
          P. Vendedora Responsável
          <select
            name=""
            id="sellers-select"
            data-testid="customer_checkout__select-seller"
          >
            <option value="">Vendedor A</option>
            <option value="">Vendedor B</option>
          </select>
        </label>

        <label htmlFor="address-input" className="flex address">
          Endereço
          <input
            type="text"
            id="address-input"
            data-testid="customer_checkout__input-address"
          />
        </label>

        <label htmlFor="number-input" className="flex number">
          Número
          <input
            type="number"
            id="number-input"
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

export default CheckoutForm;
