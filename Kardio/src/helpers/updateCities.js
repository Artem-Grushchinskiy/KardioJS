export const updateCities = (productsInStock) => {
  const uniqueCities = [
    ...new Set(productsInStock.map((product) => product.city)),
  ];
  return [...uniqueCities];
};
