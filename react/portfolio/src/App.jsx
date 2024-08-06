import React from "react";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import { Route, Routes } from "react-router-dom";
import Education from "./screens/Education";
import Experience from "./screens/Experience";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
