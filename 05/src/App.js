import React, { useMemo, useState } from 'react';
import './App.css'; // Correctly import the CSS file

const App = () => {
  const [height, setHeight] = useState(170); // Changed default height to 170 for a more typical value
  const [weight, setWeight] = useState(70); // Changed default weight to 70 for a more typical value


  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  }, [weight, height]);

  const getBMICategory = (bmi) => {
    if (bmi < 16) return 'Underweight (Severe thinness)';
    if (bmi >= 16 && bmi < 17) return 'Underweight (Moderate thinness)';
    if (bmi >= 17 && bmi < 18.5) return 'Underweight (Mild thinness)';
    if (bmi >= 18.5 && bmi < 25) return 'Normal';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    if (bmi >= 30 && bmi < 35) return 'Obese (Class I)';
    if (bmi >= 35 && bmi < 40) return 'Obese (Class II)';
    return 'Obese (Class III)';
  };

  return (
    <main>
      <h1>Project: BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight}kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          value={weight}
          onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height}cm</p>
        <input
          className="input-slider"
          type="range"
          min="140"
          max="220"
          value={height}
          onChange={onHeightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
        <p className="output-category">{getBMICategory(output)}</p>
      </div>
    </main>
  )};




export default App;


