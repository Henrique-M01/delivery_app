import React from 'react';
import { connect } from 'react-redux';
import '../components/products/products.css';
import Product from '../components/products/Product';
import Header from '../components/navbar/Header';

const productsMock = [
  { image: 'https://www.vagalume.com.br/dynimage/news19824-big.jpg', price: 50, name: 'Eminem' },
  { image: 'https://i.pinimg.com/originals/8c/dc/40/8cdc40c3cfef831ac1e11943bb0950ad.png', price: 0, name: 'MyLittlePoney' },
  { image: 'https://www.vagalume.com.br/dynimage/news19824-big.jpg', price: 50, name: 'Eminem' },
  { image: 'https://i.pinimg.com/originals/8c/dc/40/8cdc40c3cfef831ac1e11943bb0950ad.png', price: 0, name: 'MyLittlePoney' },
];

function ProductsPage() {
  return (
    <>
      <Header />
      <section className="products">
        {productsMock.map(({ image, name, price }) => (
          <Product
            key={ name }
            className="product"
            image={ image }
            name={ name }
            price={ price }
          />
        ))}
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
