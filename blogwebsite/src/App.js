import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Routing from './Routes/Routing';

function App() {
  return (
    
    <Router>
      
      <div style={{ backgroundColor: 'pink', minHeight: '100vh', padding: '20px' }}>
        <h1>Welcome to My Blog</h1>
        <div>
          <span style={{ marginRight: '20px' }}><Routing/></span>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
