import React from "react";
import { Box, HStack, Link, Icon } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaHandsHelping, FaNewspaper, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Topbar: React.FC = () => {
  return (
    <Box as="nav" bg="gray.800" color="white" width="100%" p={4} position="fixed" top="0" zIndex="1000">
      <HStack spacing={8} justify="center">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" justifyContent="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaHome} boxSize={6} />
          </Link>
        </NavLink>
        <NavLink to="/about-us" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" justifyContent="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaInfoCircle} boxSize={6} />
          </Link>
        </NavLink>
        <NavLink to="/projects" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" justifyContent="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaProjectDiagram} boxSize={6} />
          </Link>
        </NavLink>
        <NavLink to="/get-involved" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" justifyContent="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaHandsHelping} boxSize={6} />
          </Link>
        </NavLink>
        <NavLink to="/news" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" justifyContent="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaNewspaper} boxSize={6} />
          </Link>
        </NavLink>
        <NavLink to="/contact" style={{ textDecoration: 'none' }}>
          <Link display="flex" alignItems="center" justifyContent="center" p={2} _hover={{ bg: "gray.700" }}>
            <Icon as={FaEnvelope} boxSize={6} />
          </Link>
        </NavLink>
      </HStack>
    </Box>
  );
};

export default Topbar;