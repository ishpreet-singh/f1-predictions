import React, { useState } from "react";
import DriverDropdown from "../DriverDropdown";
import PredictionControls from "../PredictionControls";
import "./index.css";

const PredictionForm = ({ drivers, onSubmit }) => {
  const initialSelections = Array(10).fill("");
  const [selections, setSelections] = useState(initialSelections);

  const handleSelect = (rank, driver) => {
    const newSelections = [...selections];
    newSelections[rank - 1] = driver;
    setSelections(newSelections);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selections);
  };

  const isFormComplete = selections.every((selection) => selection !== "");

  const handleUpload = (uploadedPredictions) => {
    setSelections(uploadedPredictions);
  };

  const getAvailableDrivers = (index) => {
    if (!drivers || drivers.length === 0) {
      return [];
    }
  
    return drivers.filter(
      (driver) => !selections.includes(driver) || selections[index] === driver
    );
  };
  

  return (
    <form className="prediction-form" onSubmit={handleSubmit}>
      {initialSelections.map((_, index) => (
        <div key={index} className="dropdown-wrapper">
          <label>Rank {index + 1}:</label>
          <DriverDropdown
            drivers={getAvailableDrivers(index)}
            onSelect={(driver) => handleSelect(index + 1, driver)}
            selectedDriver={selections[index]}
          />
        </div>
      ))}
      <button type="submit" disabled={!isFormComplete}>
        Submit Predictions
      </button>
      <PredictionControls
        predictions={selections}
        onUpload={handleUpload}
      />
    </form>
  );
};

export default PredictionForm;
