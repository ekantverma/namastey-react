import React from 'react';
import ReactDOM from 'react-dom';

// Header component is a functional component
const HeaderComponent = function () {
    return (
      <div>
        <h1>Namaste React Functional component</h1>
        <h2>This is h2 tag</h2>
      </div>
    );
  };
  
  // Create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // Pass the React element inside root
  root.render(<HeaderComponent />);
  