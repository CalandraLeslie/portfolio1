import React, { useState } from 'react';
import MealDetails from './Components/MealDetails';
import Search from './Components/Search';
import './App.css'; 

const App = () => {
  // State variables to manage search results and errors
  const [searchResults, setSearchResults] = useState([]); // State for storing search results
  const [error, setError] = useState(null); // State for managing errors during search

  // Function to handle meal search
  const handleSearch = async (query) => {
    try {
      // Fetch data from the meal database API
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      // Update search results if meals are found, otherwise set an error message
      if (data.meals) {
        setSearchResults(data.meals); // Update search results if meals are found
        setError(null); // Clear error if meals are found
      } else {
        setSearchResults([]); // Reset search results if no meals found
        setError('No meals found.'); // Set error message
      }
    } catch (error) {
      console.error('Error searching meals:', error);
      setSearchResults([]); // Reset search results on error
      setError('An error occurred while searching for meals. Please try again.'); // Set error message
    }
  };

  // Function to handle meal selection and display details in a new window
  const handleSelectMeal = (meal) => {
    // Collect all ingredients and measures from the selected meal
    let ingredientsAndMeasures = '';
    for (let i = 1; i <= 20; i++) { // Assuming there are maximum 20 ingredients
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      // Append ingredient and measure to the list if both exist
      if (ingredient && measure) {
        ingredientsAndMeasures += `<p>${ingredient} ${measure}</p>`;
      }
    }
    
    // Split instructions into sentences
    const instructionsSentences = meal.strInstructions.split('. ');

    // Render each sentence separately with spacing
    const instructionsHTML = instructionsSentences.map(sentence => `<p>${sentence}.</p>`).join('\n');

    // Construct the HTML content to display detailed meal information
    const detailedMealInfo = `
      <html>
        <head>
          <title>${meal.strMeal}</title>
          <style>
            body {
              margin: 0; /* Remove default margin */
            }
            /* Styles for meal details */
            /* Container for meal details */
            .meal-details {
              display: flex;
              flex-direction: column;
              align-items: center;
              background-color: black;
              color: white;
              padding: 20px;
            }
            /* Meal image */
            .meal-details img {
              margin-bottom: 20px;
              width: 400px;
              height: 400px;
              object-fit: cover;
            }
            /* Container for ingredients and instructions */
            .content {
              display: flex;
              width: 100%;
            }
            /* Ingredients container */
            .ingredients,
            /* Instructions container */
            .instructions {
              flex: 1;
              padding: 0 10px;
            }
            /* Ingredients list */
            .ingredients {
              margin-right: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: left; /* Flush ingredients to the left */
            }
            /* Instructions list */
            .instructions {
              margin-left: 10px;
              display: flex;
              flex-direction: column;
              align-items: flex-start; /* Flush instructions to the left */
            }
            /* Instruction lines */
            .instructions p {
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <div class="meal-details">
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <p>Nationality: ${meal.strArea}</p>
            <p>Category: ${meal.strCategory}</p>
            <div class="content">
              <div class="ingredients">
                <h3>Ingredients</h3>
                ${ingredientsAndMeasures}
              </div>
              <div class="instructions">
                <h3>Instructions</h3>
                ${instructionsHTML}
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
  
    // Open a new window to display meal details
    const mealWindow = window.open('', '_blank');
    mealWindow.document.write(detailedMealInfo);
    mealWindow.document.close();
  };

  return (
    <div>
      {/* Search component to allow users to search for meals */}
      <Search onSearch={handleSearch} />
      {/* Display error message if there is any */}
      {error && <div className="error-message">{error}</div>}
      {/* Container to display search results */}
      <div className="container">
        {/* Iterate through search results and display each meal */}
        {searchResults.map(meal => (
          <MealDetails
            key={meal.idMeal}
            meal={meal}
            onSelectMeal={() => handleSelectMeal(meal)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
