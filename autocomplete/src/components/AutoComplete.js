import React, { useState } from "react";

const Autocomplete = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setHasSearched(value.length > 0);   

    if (value.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
  };

  const handleClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a fruit..."
      />
      {showSuggestions && filteredSuggestions.length > 0 ? (
        <ul className={`suggestions ${filteredSuggestions.length > 0 ? 'test' : ''}`}>
          {filteredSuggestions.map((suggestion, index) => (
            <li className="cursor-pointer" key={index} onClick={() => handleClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      ) : hasSearched && filteredSuggestions.length === 0 ? (
        <p>no data</p>
      ) : null}
    </div>
  );
};

export default Autocomplete;
