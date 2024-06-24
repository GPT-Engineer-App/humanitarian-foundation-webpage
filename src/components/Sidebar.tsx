import React from "react";
import { Box, VStack, Link, Icon } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaHandsHelping, FaNewspaper, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <Box as="nav" bg="gray.800" color="white" width="250px" p={4} height="100vh" position="fixed">
      <VStack spacing={4} align="stretch">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaHome} boxSize={6} mr={2} />
            Home
          </Link>
        </NavLink>
        <NavLink to="/about-us" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaInfoCircle} boxSize={6} mr={2} />
            About Us
          </Link>
        </NavLink>
        <NavLink to="/projects" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaProjectDiagram} boxSize={6} mr={2} />
            Projects
          </Link>
        </NavLink>
        <NavLink to="/get-involved" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaHandsHelping} boxSize={6} mr={2} />
            Get Involved
          </Link>
        </NavLink>
        <NavLink to="/news" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaNewspaper} boxSize={6} mr={2} />
            News
          </Link>
        </NavLink>
        <NavLink to="/contact" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaEnvelope} boxSize={6} mr={2} />
            Contact
          </Link>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;