// Import necessary dependencies
import React from 'react';
import './index.css'; // Import CSS styles
import App from './App'; // Import the root component
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client

// Get the root element from the HTML file by its ID
const root = document.getElementById('root');

// Create a root using Concurrent Mode
const reactRoot = createRoot(root);

// Render the main application component (App) within the root element
reactRoot.render(<App />);
