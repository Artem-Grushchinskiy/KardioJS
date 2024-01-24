import { useState } from "react";
import { updateCities } from "../helpers/updateCities";
import { productsInStock } from "../helpers/productData";
import PropTypes from "prop-types";
import "../styles/Hero.css";

const Hero = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("---");

  const handleCityClick = (city) => {
    setSelectedCity(city);
    onSelect(city);
    setIsOpen(false);
  };

  const updatedCities = updateCities(productsInStock);

  return (
    <div className="hero">
      <h2 className="title">
        <span className="word1">Забери</span>
        <span className="word2">свое</span>
        <span className="word3">настроение!!!</span>
      </h2>
      <div className="hero-buttons">
        <button
          className="button-city heartbeat"
          onClick={() => setIsOpen(!isOpen)}
        >
          выбери свой город:{" "}
          <span className="button-value">{selectedCity}</span>
        </button>
        {isOpen && (
          <ul className="button-city-list">
            {updatedCities.map((city) => (
              <li key={city}>
                <button
                  className="button-city-value bounce-in-fwd"
                  onClick={() => handleCityClick(city)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  {city}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

Hero.propTypes = {
  onSelect: PropTypes.func,
};

export default Hero;
