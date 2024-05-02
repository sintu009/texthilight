import React, { useState } from 'react';
import { findAll } from "highlight-words-core";
import './App.css'; // Import CSS for styling

const App = () => {
  // Initial text and search words for highlighting
  const initialTextToHighlight = "This is some text to highlight.";
  const initialSearchWords = ["This", "i"];

  // State for text to highlight and search words
  const [textToHighlight, setTextToHighlight] = useState(initialTextToHighlight);
  const [searchWords, setSearchWords] = useState(initialSearchWords);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchWords([event.target.value]);
  };

  // Find all occurrences of search words in the text
  const chunks = findAll({
    caseSensitive: false,
    searchWords,
    textToHighlight
  });

  // Map chunks to highlight or render text
  const highlightedText = chunks.map((chunk, index) => {
    const { end, highlight, start } = chunk;
    const text = textToHighlight.substr(start, end - start);
    if (highlight) {
      return <mark key={index}>{text}</mark>;
    } else {
      return text;
    }
  });

  return (
    <div className="app-container">
      <h1>Text Highlighter</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search text..."
          value={searchWords[0]}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="highlighted-text" id="app">
        {highlightedText}
      </div>
    </div>
  );
}

export default App;
