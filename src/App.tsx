import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Index from "./pages/Index";
import GetInvolved from "./pages/GetInvolved";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Contact from "./pages/Contact";

import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <Router>
      {/* SSL certificate implementation placeholder */}
      <Flex direction={{ base: "column", md: "row" }}>
        <Sidebar />
        <Box flex="1" p={{ base: 2, md: 4 }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
};

export default App;