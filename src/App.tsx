import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import NavigationBar from "./components/NavigationBar";
import Projects from "./pages/Projects";
import GetInvolved from "./pages/GetInvolved";
import News from "./pages/News";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
      <Route path="/projects" element={<Projects />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;