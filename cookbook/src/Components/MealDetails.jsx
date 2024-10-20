import React from 'react';

// Functional component to display meal details
const MealDetails = ({ meal, onSelectMeal }) => {
  // Function to handle "See More" button click
  const handleSeeMore = () => {
    onSelectMeal(meal); // Calls onSelectMeal function to display detailed meal information
  };

  // Function to generate a random rating between 1 and 5
  const generateRandomRating = () => {
    return Math.floor(Math.random() * 5) + 1; // Generates a random number between 1 and 5
  };

  // Render star icons based on the random rating
  const renderStars = () => {
    const rating = generateRandomRating(); // Generates a random rating
    return Array.from({ length: rating }).map((_, index) => (
      <span key={index}>&#9733;</span> // Renders a star icon for each rating
    ));
  };

  return (
    // Meal details container, clickable to see more
    <div className="meal-details" onClick={handleSeeMore}>
      {/* Meal thumbnail */}
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      {/* Meal information */}
      <div className="meal-info">
        <h3>{meal.strMeal}</h3>
        <p>Nationality: {meal.strArea}</p>
        <p>Category: {meal.strCategory}</p>
        {/* Render star icons */}
        {renderStars()}
      </div>
    </div>
  );
};

export default MealDetails; // Export MealDetails component
