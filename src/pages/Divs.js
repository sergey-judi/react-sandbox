import React, { useState } from 'react';

const Divs = () => {
  const [numDivs, setNumDivs] = useState(5); // Set initial number of divs

  const divs = Array.from({ length: numDivs }, (_, index) => (
    <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
      Div {index + 1}
    </div>
  ));

  return (
    <div>
      <input
        type="number"
        value={numDivs}
        onChange={(e) => setNumDivs(Number(e.target.value))}
        style={{ margin: '10px' }}
      />
      {divs}
    </div>
  );
};

export default Divs;
