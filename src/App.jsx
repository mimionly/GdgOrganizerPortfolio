import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages
import { Home } from './Pages/Home'; 
import { NotFound } from './Pages/NotFound'; // Ensure this matches how NotFound is exported!

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// THIS is the crucial line for main.jsx to work correctly
export default App;