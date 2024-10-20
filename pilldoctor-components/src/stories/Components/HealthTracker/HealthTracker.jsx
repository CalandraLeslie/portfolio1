import React, { useState } from 'react';
import './HealthTracker.css';
const HealthTracker = () => {
  const [steps, setSteps] = useState('');
  const [calories, setCalories] = useState('');
  const [water, setWater] = useState('');

  return (
    <div className="health-tracker">
      <h2>Health Tracker</h2>
      <div>
        <label htmlFor="steps">Daily Step Goal: </label>
        <input 
          id="steps"
          type="number" 
          value={steps} 
          onChange={(e) => setSteps(e.target.value)} 
          placeholder="Enter step goal"
        />
      </div>
      <div>
        <label htmlFor="calories">Daily Calorie Goal: </label>
        <input 
          id="calories"
          type="number" 
          value={calories} 
          onChange={(e) => setCalories(e.target.value)} 
          placeholder="Enter calorie goal"
        />
      </div>
      <div>
        <label htmlFor="water">Daily Water Intake Goal (ml): </label>
        <input 
          id="water"
          type="number" 
          value={water} 
          onChange={(e) => setWater(e.target.value)} 
          placeholder="Enter water intake goal"
        />
      </div>
    </div>
  );
};

export default HealthTracker;