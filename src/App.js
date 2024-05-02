import React, { useState } from 'react';
import { findAll } from "highlight-words-core";
import './App.css'; // Import CSS for styling

const App = () => {
  // Initial text and search words for highlighting
  const initialTextToHighlight = "This is some text to highlight. Pariatur enim tempor anim non qui excepteur in irure culpa. Esse enim reprehenderit incididunt do irure ex duis. Cupidatat quis velit est tempor occaecat minim in quis. Elit consequat minim velit anim eiusmod. Eu cillum pariatur ea reprehenderit nostrud adipisicing enim. Elit proident sunt id non veniam dolore minim esse irure eiusmod. Cupidatat ipsum laboris occaecat proident anim eu proident do. Id quis tempor eiusmod consequat aliqua enim nostrud ex sit fugiat occaecat ullamco adipisicing. Adipisicing eu magna cillum nulla veniam velit adipisicing culpa quis culpa velit et do. Nostrud mollit eiusmod enim officia laborum ipsum aute quis esse reprehenderit ea ipsum eu. Voluptate amet elit pariatur officia esse est quis. Adipisicing cillum laborum commodo tempor quis tempor veniam nisi enim ex nostrud. Ex ipsum cupidatat aute reprehenderit consectetur duis. Do ipsum commodo anim id ea aliquip in minim et. Anim consectetur magna proident pariatur ex ut est laborum non aute.";
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
