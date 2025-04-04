import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './style.css';
import Index from "./component/Index";
import Introduce from "./component/Introduce";
import Location from "./component/Location";
import Camera from "./component/Camera";

function App() {
  return (
  <Router>
    <div>
      <Routes>
   <Route path="/" element={<Index />} />
   <Route path="/introduce" element={<Introduce />} />
   <Route path="/location" element={<Location />} />
   <Route path="/camera" element={<Camera />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;