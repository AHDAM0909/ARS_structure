import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import WhatsAppButton from "./components/WhatsAppButton";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Temporary routes */}
        <Route
          path="/projects"
          element={<ProjectsPage />} />
      

        <Route
          path="/services"
          element={<ServicesPage/>}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;  
