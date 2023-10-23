// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import CSS styles
import App from './App'; // Import the root component

// Render the main application within the 'root' element in the HTML file
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>,
  document.getElementById('root') // Mount it to the element with the id 'root' in the HTML file
);
