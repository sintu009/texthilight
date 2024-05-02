import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { findAll } from "highlight-words-core";
import './App.css'; // Import CSS for styling

const App = () => {
  // Initial text and search words for highlighting
  const initialTextToHighlight = "This is some text to highlight.Commodo occaecat officia cillum sunt ipsum commodo proident dolore. Sit esse eiusmod nulla occaecat pariatur ea ex aliquip proident fugiat sunt voluptate. Pariatur qui tempor excepteur officia esse sunt consectetur enim exercitation enim fugiat. Officia reprehenderit voluptate culpa adipisicing reprehenderit cillum elit aute tempor anim. Nulla ullamco do aliqua consequat ad ut amet excepteur adipisicing duis consequat. Eu commodo nostrud nostrud aliqua incididunt ea excepteur pariatur ea in cillum in. Ea culpa et quis dolore labore pariatur sit non officia ex esse ullamco. Minim tempor Lorem excepteur cillum aliqua. Officia sit consectetur anim eu minim adipisicing eu amet magna et. Ipsum id amet voluptate ullamco ad excepteur irure pariatur nulla do Lorem. In nulla veniam ipsum occaecat veniam ea nisi irure nisi commodo duis consectetur irure ea.";
  const initialSearchWords = ["This", "i"];

  // State for text to highlight and search words
  const [textToHighlight, setTextToHighlight] = useState(initialTextToHighlight);
  const [searchWords, setSearchWords] = useState(initialSearchWords);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchWords(event.target.value.split(' '));
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
    <Box className="app-container" textAlign="left">
      <Typography variant="h4" gutterBottom>Text Highlighter</Typography>
      <Box className="search-container">
        <TextField
          label="Search text..."
          variant="outlined"
          fullWidth
          value={searchWords.join(' ')}
          onChange={handleSearchInputChange}
        />
      </Box>
      <div className="highlighted-text" id="app">
        {highlightedText}
      </div>
    </Box>
  );
}

export default App;
