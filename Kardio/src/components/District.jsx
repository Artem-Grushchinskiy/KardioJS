import { useDistrictSelection } from "../hooks/useSelection";
import PropTypes from "prop-types";
import "../styles/District.css";

const District = ({ districts }) => {
  const { selectedDistrict, handleDistrictClick } = useDistrictSelection();

  return (
    <div className="district-container">
      <div className="selected-district">Выбери район: {selectedDistrict}</div>
      <ul className="district-list">
        {districts.map((district) => (
          <li
            className="district-goal"
            key={district}
            onClick={() => handleDistrictClick(district)}
          >
            {district}
          </li>
        ))}
      </ul>
    </div>
  );
};

District.propTypes = {
  districts: PropTypes.array.isRequired,
};

export default District;
