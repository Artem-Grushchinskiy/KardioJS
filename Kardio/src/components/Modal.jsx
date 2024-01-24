import PropTypes from "prop-types";
import District from "./District";
import "../styles/Modal.css";

const Modal = ({ isOpen, selectedProduct, closeModal, originProduct }) => {
  const handleClose = () => {
    // Закрываем окно
    closeModal();
  };

  const handleOverlayClick = (e) => {
    // Проверяем, был ли клик по самому оверлею
    if (e.target.classList.contains("modal-overlay")) {
      handleClose();
    }
  };

  return (
    isOpen && (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal">
          <div className="modal-result">
            {selectedProduct && (
              <District districts={selectedProduct.districts} />
            )}
          </div>
          {originProduct && (
            <div>
              <h3>Твой выбор:</h3>
              <p>{`Название: ${originProduct.name}`}</p>
              <p>{`Цена: ${originProduct.price}`}</p>
              {/* Добавьте другие поля товара, которые вам необходимы */}
            </div>
          )}
        </div>
        <button className="modal-close" onClick={handleClose}>
          Закрыть
        </button>
      </div>
    )
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  selectedProduct: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
  originProduct: PropTypes.object,
};

export default Modal;
