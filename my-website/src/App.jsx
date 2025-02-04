import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home.jsx";
import ProjectPage from "./pages/Projects.jsx";
import IndividualProject from "./pages/SpecProject.jsx";
import AboutPage from "./pages/About.jsx";
import ContactPage from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route exact path = "/" element={<HomePage/>}/>
      <Route exact path = "/projects/" element={<ProjectPage/>}/>
      <Route exact path = "/projects/:pjctname" element={<IndividualProject/>}/>

      <Route exact path = "/about" element={<AboutPage/>}/>
      <Route exact path = "/contact" element={<ContactPage/>}/>
    </Routes>
  )
}
