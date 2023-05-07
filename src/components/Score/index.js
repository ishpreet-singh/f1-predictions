import React from "react";
import "./index.css";

const Score = ({ originalStandings, userPredictions }) => {
  const calculateScore = () => {
    let score = 0;
    userPredictions.forEach((prediction, index) => {
      if (prediction === originalStandings[index].name) {
        score += 10 - index;
      }
    });
    return score;
  };

  const score = calculateScore();

  return <div className="score">Your Score: {score}</div>;
};

export default Score;
