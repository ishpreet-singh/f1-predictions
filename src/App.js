import React, { useState } from "react";
import "./App.css";
import PredictionForm from "./components/PredictionForm";
import Score from "./components/Score";
import driversData from "./data/drivers.json";
import driverResultsData from "./data/result.json";
import ResultUpload from "./components/ResultUpload";

const mergeDriverResults = (drivers, results) => {
  return results.map((result) => {
    const driverInfo = drivers.find((driver) => driver.name === result.name);
    return { ...result, ...driverInfo };
  });
};

function App() {
  const [originalStandings, setOriginalStandings] = useState([]);
  const [userPredictions, setUserPredictions] = useState([]);
  const [driverResults, setDriverResults] = useState(driverResultsData);

  const handleSubmit = (predictions) => {
    setUserPredictions(predictions);

    const mergedDriverResults = mergeDriverResults(driversData, driverResults);

    // Set dummy standings using the drivers.json data
    setOriginalStandings(mergedDriverResults);
  };

  const handleResultUpload = (newResults) => {
    setDriverResults(newResults);
  };

  const driverNames = driversData.map((driver) => driver.name);

  return (
    <div className="App">
      <h1>F1 Predictions - Miami 🏁</h1>
      <PredictionForm drivers={driverNames} onSubmit={handleSubmit} />
      {originalStandings.length > 0 && userPredictions.length > 0 && (
        <Score
          originalStandings={originalStandings}
          userPredictions={userPredictions}
        />
      )}
      <ResultUpload onUpload={handleResultUpload} />
    </div>
  );
}

export default App;
