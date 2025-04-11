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
import Setting from "./component/Setting";
import Face from "./component/Face";
import Home from "./UI/Home";

function App() {
  return (
  <Router>
    <div>
      <Routes>
       {/* <Route path="#" element={<Home />} /> */}
   <Route path="/" element={<Index />} />
   <Route path="/introduce" element={<Introduce />} />
   <Route path="/location" element={<Location />} />
   <Route path="/camera" element={<Camera />} />
   <Route path="/preparing" element={<Preparing />} />
   <Route path="/estimation" element={<Estimation />} />
   <Route path="/demographics" element={<Demographics />} />
   <Route path="/setting" element={<Setting />} />
   <Route path="/face" element={<Face />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;