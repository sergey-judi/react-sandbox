import React, { useState } from 'react';

class ClickableDiv {
  constructor(wasClicked = false, timestamp = null) {
    this.wasClicked = wasClicked;
    this.timestamp = timestamp;
  }

  toggleWasClicked() {
    this.wasClicked = !this.wasClicked;
    this.timestamp = new Date();
  }
}

const Divs = () => {
  const [divsNumber, setDivsNumber] = useState(5); // Set initial number of divs
  
  const [divsState, setDivsState] = useState(Array(divsNumber).fill(() => new ClickableDiv())); // Initialize an array to track the toggle state of each div

  const handleDivClick = (index) => {
    // Toggle the clicked state for the div at the specific index
    const updatedState = divsState.slice(); // Clone the array to avoid direct state mutation
    const existingDivState = divsState[index];

    const updatedDivState = new ClickableDiv(existingDivState.wasClicked);
    updatedDivState.toggleWasClicked();

    updatedState[index] = updatedDivState;
    setDivsState(updatedState);
  };

  const divs = divsState.map((divState, index) => (
    <div
      key={index}
      onClick={() => handleDivClick(index)}
      style={{
        margin: '10px',
        padding: '10px',
        border: '1px solid black',
        backgroundColor: divState.wasClicked ? '#FFCCCB' : '#CCFFCD', // Change color if clicked
        cursor: 'pointer',
      }}
    >
      Div {index + 1} - Last Clicked: {divState.timestamp != undefined ? new Date(divState.timestamp).toISOString() : "never"}
    </div>
  ));

  // Ensure the clicked array matches the number of divs when it changes
  const adjustClickedArray = (newSize) => {
    setDivsState((prevClicked) => {
      const updatedClicked = prevClicked.slice(0, newSize);
      while (updatedClicked.length < newSize) {
        updatedClicked.push(new ClickableDiv());
      }
      return updatedClicked;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={divsNumber}
        min="1" // Prevent negative numbers
        onChange={(e) => {
          const newSize = Number(e.target.value);
          setDivsNumber(newSize);
          adjustClickedArray(newSize);
        }}
        style={{ margin: '10px' }}
      />
      <div>
        REACT_APP_MONGODB_URL='{process.env.REACT_APP_MONGODB_URL}' REACT_APP_MONGODB_USERNAME='{process.env.REACT_APP_MONGODB_USERNAME}' REACT_APP_MONGODB_PASSWORD='{process.env.REACT_APP_MONGODB_PASSWORD}'
      </div>
      {divs}
    </div>
  );
};

export default Divs;
