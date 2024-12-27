import React from "react";
import Navbar from "./Navbar";
import Allcourses from "./Pages/Allcourses";
import { Route, Routes } from "react-router-dom";
import Fullstack from "./Pages/Fullstack";
import DataScience from "./Pages/DataScience";
import CyberSecurity from "./Pages/CyberSecurity";
import Career from "./Pages/Career";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Allcourses />} />
        <Route path="/full-stack" element={<Fullstack />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </>
  );
};
export default App;
