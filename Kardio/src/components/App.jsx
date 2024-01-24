import Products from "./Products";
import Hero from "./Hero";
import NavBar from "./NavBar";
import "../App.css";
import { useCitySelection } from "../hooks/useSelection";

const App = () => {
  const { selectedCity, handleCityChange } = useCitySelection();

  return (
    <>
      <div className="container">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="content">
          <Hero onSelect={handleCityChange} city={selectedCity} />
        </div>
        <div className="products">
          <Products
            onSelect={(product) => console.log(product)}
            city={selectedCity}
          />
        </div>
      </div>
    </>
  );
};

export default App;
