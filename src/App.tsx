import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./componets/Nav";
import Home from "./componets/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Commerce from "./pages/Commerce";
import Science from "./pages/Science";
import Arts from "./pages/Arts";
import Career from "./pages/Career";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/commerce" element={<Commerce />} />
          <Route path="/science" element={<Science />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
