import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCartProducts } from '../redux/actions';
import fetchProducts from '../api/fetchProducts';
import Header from '../components/navbar/Header';
import Product from '../components/products/Product';
import '../components/products/products.css';

function ProductsPage({ setProducts, reduxProducts }) {
  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products.map((product) => ({
        ...product,
        quantity: 0,
      })));
    }).catch((err) => console.error(err));
  }, [setProducts]);
  return (
    <>
      <Header />
      <section className="products">
        {
          reduxProducts
            .map(({ id, urlImage, name, price, quantity }) => (
              <Product
                key={ id }
                className="product"
                image={ urlImage }
                name={ name }
                price={ price }
                quantity={ quantity }
                id={ id }
              />
            ))
        }
      </section>
    </>
  );
}

ProductsPage.propTypes = {
  setProducts: PropTypes.func.isRequired,
  reduxProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  reduxProducts: state.cart.products,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => dispatch(setCartProducts(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
