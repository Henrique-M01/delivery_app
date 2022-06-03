import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchProducts from '../api/fetchProducts';
import Header from '../components/navbar/Header';
import Product from '../components/products/Product';
import '../components/products/products.css';

// const productsMock = [
//   { image: 'https://www.vagalume.com.br/dynimage/news19824-big.jpg', price: 50, name: 'Eminem' },
//   { image: 'https://i.pinimg.com/originals/8c/dc/40/8cdc40c3cfef831ac1e11943bb0950ad.png', price: 0, name: 'MyLittlePoney' },
//   { image: 'https://www.vagalume.com.br/dynimage/news19824-big.jpg', price: 50, name: 'Eminem' },
//   { image: 'https://i.pinimg.com/originals/8c/dc/40/8cdc40c3cfef831ac1e11943bb0950ad.png', price: 0, name: 'MyLittlePoney' },
// ];

function ProductsPage() {
  const [productsState, setProductsState] = React.useState();

  useEffect(() => {
    fetchProducts().then((products) => {
      setProductsState(products);
    }).catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Header />
      <section className="products">
        {
          productsState && productsState.map(({ id, urlImage, name, price }) => (
            <Product
              key={ id }
              className="product"
              image={ urlImage }
              name={ name }
              price={ price }
              id={ id }
            />
          ))
        }
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
