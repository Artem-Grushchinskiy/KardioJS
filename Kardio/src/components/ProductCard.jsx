import PropTypes from "prop-types";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onSelect, openModal }) => {
  return (
    <div className="product-card">
      <img
        src={`${product.image}`}
        alt={product.name}
        className="product-image"
      />
      <div className="product-value-data">
        <span className="product-text">
          <h4>{product.name}</h4>
          <p className="product-price">{product.price}</p>
        </span>
        <button
          className="product-buy"
          onClick={() => {
            onSelect(product);
            openModal(product);
          }}
        >
          Купить
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ProductCard;
