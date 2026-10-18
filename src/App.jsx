import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Temporary routes */}
        <Route
          path="/projects"
          element={<h1 className="p-10 text-3xl">Projects Page</h1>}
        />

        <Route
          path="/services"
          element={<h1 className="p-10 text-3xl">Services Page</h1>}
        />

        <Route
          path="/contact"
          element={<h1 className="p-10 text-3xl">Contact Page</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;  
