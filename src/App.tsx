import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import GetInvolved from "./pages/GetInvolved";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import News from "./pages/News";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;
