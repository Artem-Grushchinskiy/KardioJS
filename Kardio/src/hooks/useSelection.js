import { useState } from "react";

export const useCitySelection = () => {
  const [selectedCity, setSelectedCity] = useState("---");

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return { selectedCity, handleCityChange };
};

export const useDistrictSelection = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("---");

  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
  };

  return { selectedDistrict, handleDistrictClick };
};

export const useProductSelection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return { isModalOpen, selectedProduct, openModal, closeModal };
};
