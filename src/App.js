import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home/>} />

      </Routes>
    </Router>
  );
}

export default App;
