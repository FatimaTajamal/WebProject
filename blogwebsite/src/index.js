import React from 'react';
import { createRoot } from 'react-dom/client';  // Import from "react-dom/client" instead of "react-dom"
import App from './App';

const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(<App />);
