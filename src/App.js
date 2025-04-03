import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './style.css';
import Index from "./component/Index";

function App() {
  return (
  <Router>
    <div>
      <Routes>
   <Route path="/" element={<Index />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;