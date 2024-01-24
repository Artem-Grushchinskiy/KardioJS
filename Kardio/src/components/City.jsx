import { useState } from "react";
import { updateCities } from "../helpers/updateCities";
import { productsInStock } from "../helpers/productData";
import PropTypes from "prop-types";
import "../styles/City.css";

const City = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("---");

  const handleCityClick = (city) => {
    setSelectedCity(city);
    onSelect(city);
    setIsOpen(false);
  };

  const updatedCities = updateCities(productsInStock);

  return (
    <div className="city-container">
      <div className="selected-city" onClick={() => setIsOpen(!isOpen)}>
        Выбранный город:{" "}
        <span className="selected-city-value">{selectedCity}</span>
      </div>
      {isOpen && (
        <ul className="city-list">
          {updatedCities.map((city) => (
            <li key={city} onClick={() => handleCityClick(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

City.propTypes = {
  onSelect: PropTypes.func,
};

export default City;
