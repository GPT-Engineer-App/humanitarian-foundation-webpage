import React from "react";
import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, Icon } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaHandsHelping, FaNewspaper, FaEnvelope } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Links = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "About Us", path: "/about-us", icon: FaInfoCircle },
  { name: "Projects", path: "/projects", icon: FaProjectDiagram },
  { name: "Get Involved", path: "/get-involved", icon: FaHandsHelping },
  { name: "News", path: "/news", icon: FaNewspaper },
  { name: "Contact", path: "/contact", icon: FaEnvelope },
];

const NavLink = ({ name, path, icon }: { name: string; path: string; icon: any }) => (
  <Link
    as={RouterLink}
    to={path}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
    }}
    display="flex"
    alignItems="center"
  >
    <Icon as={icon} mr={2} />
    {name}
  </Link>
);

const NavigationBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box fontWeight="bold">HUFIDA</Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavigationBar;