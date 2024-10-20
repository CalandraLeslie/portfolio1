import React, { useState, useRef } from 'react';

// Functional component for searching meals
const Search = ({ onSearch }) => {
    // State for managing search query
    const [query, setQuery] = useState('');
    // Create a ref for the search button
    const searchBtnRef = useRef(null);

    // Function to handle input change
    const handleChange = (event) => {
        setQuery(event.target.value);
        // Enable/disable the button based on query
        if (event.target.value.trim() === '') {
            searchBtnRef.current.disabled = true; // Disable button if query is empty
        } else {
            searchBtnRef.current.disabled = false; // Enable button if query is not empty
        }
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query); // Call onSearch function with the query
    };

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Calandra's Cookbook</h1>
            <div className="search-container">
                {/* Search form */}
                <form onSubmit={handleSubmit} className="search-form">
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Search meals by name..."
                        className="search-input"
                    />
                    {/* Search button */}
                    <button type="submit" ref={searchBtnRef} className="search-button" disabled={!query.trim()}>Search</button>
                </form>
            </div>
        </div>
    );
};

export default Search; // Export Search component
