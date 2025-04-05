import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './style.css';
import Index from "./component/Index";
import Introduce from "./component/Introduce";
import Location from "./component/Location";
import Camera from "./component/Camera";
import Preparing from "./component/Preparing";
import Demographics from "./component/Demographics";
import Estimation from "./component/Estimation";

function App() {
  return (
  <Router>
    <div>
      <Routes>
   <Route path="/" element={<Index />} />
   <Route path="/introduce" element={<Introduce />} />
   <Route path="/location" element={<Location />} />
   <Route path="/camera" element={<Camera />} />
   <Route path="/preparing" element={<Preparing />} />
   <Route path="/estimation" element={<Estimation />} />
   <Route path="/demographics" element={<Demographics />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;