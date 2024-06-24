import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Projects: React.FC = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4} textAlign="center">Our Projects</Heading>
      <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto">
        Here you can find information about our ongoing and completed projects.
      </Text>
    </Box>
  );
};

export default Projects;