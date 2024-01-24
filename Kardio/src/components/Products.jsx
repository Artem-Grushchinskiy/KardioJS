import { useMemo } from "react";
import PropTypes from "prop-types";
import { useProductSelection } from "../hooks/useSelection";
import "../styles/Products.css";
import Modal from "./Modal";
import ProductCard from "./ProductCard";
import { productsInStock } from "../helpers/productData";

const Products = ({ city, onSelect }) => {
  const { isModalOpen, selectedProduct, openModal, closeModal } =
    useProductSelection();

  const productsForCity = useMemo(
    () => productsInStock.filter((product) => product.city === city),
    [city]
  );

  const memoizedProductsList = useMemo(() => {
    return productsForCity.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onSelect={onSelect}
        openModal={openModal}
      />
    ));
  }, [onSelect, productsForCity, openModal]);

  return (
    <div className="products-container">
      {city && (
        <>
          <h3 className="products-list-title">Товары в наличии в {city}</h3>
          <div className="memoized-products-list">{memoizedProductsList}</div>
          <Modal
            isOpen={isModalOpen}
            selectedProduct={selectedProduct}
            closeModal={closeModal}
            originProduct={selectedProduct}
          />
        </>
      )}
    </div>
  );
};

Products.propTypes = {
  city: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Products;
