import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Donate from "./components/Donate";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px" }}>
          🙏 Sri Someshwara Shivagnana Peetham 🙏
        </h1>

        <nav style={{
          background: "#eee",
          padding: "10px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "15px"
        }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;