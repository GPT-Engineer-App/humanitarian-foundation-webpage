import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Index from "./pages/Index";
import GetInvolved from "./pages/GetInvolved";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";

import Topbar from "./components/Topbar";

const App: React.FC = () => {
  return (
    <Router>
      <Flex direction="column">
        <Topbar />
        <Box flex="1" p={4}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
};

export default App;
