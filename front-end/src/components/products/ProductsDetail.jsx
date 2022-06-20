import PropTypes from 'prop-types';

export default function ProductsDetails({ id, name, quantity, value }) {
  return (
    <div>
      <span>{ id }</span>
      <span>{ name }</span>
      <span>{ quantity }</span>
      <span>{ value }</span>
      <span>{ value * quantity }</span>
    </div>
  )
}

ProductsDetails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}