import PropTypes from "prop-types"
import ProductsDetails from '../products/ProductsDetail';

export default function OrderDetails({ id, date, status, products, totalPrice }) {
  return (
    <div>
      <h1>Detalhes do pedido</h1>
      <div>
        <div>
          <h2>Pedido { id }</h2>
          <span>{ date.split('T')[0] }</span>
          <span>{ status }</span>
          <button>Preparar pedido</button>
          <button>Saiu para entrega</button>
        </div>
        <div>
          <span>Item</span>
          <span>Descricao</span>
          <span>Quantidade</span>
          <span>Valor Unitario</span>
          <span>Sub-total</span>
        </div>
        <div>
          {products.map((product) => (
            <ProductsDetails
              id={ product.id }
              name={ product.name }
              quantity={ product.quantity }
              value={ product.value }
            />
          ))}
        </div>
        <button>Total: { totalPrice }</button>
      </div>
    </div>
  )
}

OrderDetails.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  products: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }),
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
}
