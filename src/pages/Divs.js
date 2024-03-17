import React, { useState } from 'react';

const Divs = () => {
  const [numDivs, setNumDivs] = useState(5); // Set initial number of divs
  // Initialize an array to track the toggle state of each div
  const [clicked, setClicked] = useState(Array(numDivs).fill(false));

  const handleDivClick = (index) => {
    // Toggle the clicked state for the div at the specific index
    const updatedClicked = clicked.slice(); // Clone the array to avoid direct state mutation
    updatedClicked[index] = !updatedClicked[index];
    setClicked(updatedClicked);
  };

  const divs = Array.from({ length: numDivs }, (_, index) => (
    <div
      key={index}
      onClick={() => handleDivClick(index)}
      style={{
        margin: '10px',
        padding: '10px',
        border: '1px solid black',
        backgroundColor: clicked[index] ? '#FFCCCB' : '#CCFFCD', // Change color if clicked
        cursor: 'pointer',
      }}
    >
      Div {index + 1}
    </div>
  ));

  // Ensure the clicked array matches the number of divs when it changes
  const adjustClickedArray = (newSize) => {
    setClicked((prevClicked) => {
      const updatedClicked = prevClicked.slice(0, newSize);
      while (updatedClicked.length < newSize) {
        updatedClicked.push(false);
      }
      return updatedClicked;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={numDivs}
        min="1" // Prevent negative numbers
        onChange={(e) => {
          const newSize = Number(e.target.value);
          setNumDivs(newSize);
          adjustClickedArray(newSize);
        }}
        style={{ margin: '10px' }}
      />
      {divs}
    </div>
  );
};

export default Divs;
