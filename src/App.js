import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  // Ensure this file exists
import About from './pages/About';  // Ensure this file exists
import NotFound from './pages/NotFound'; // Handle unknown routes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
