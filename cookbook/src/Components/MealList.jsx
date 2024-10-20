import React from 'react';



// MealList component displays a list of meals
const MealList = ({ meals, onSelectMeal }) => {
  return (
    <div>
      {/* Iterate through meals and display each */}
      {meals.map(meal => (
        <div key={meal.idMeal} onClick={() => onSelectMeal(meal)}>
          {/* Meal thumbnail */}
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          {/* Meal name */}
          <p>{meal.strMeal}</p>
        </div>
      ))}
    </div>
  );
};

export default MealList;

