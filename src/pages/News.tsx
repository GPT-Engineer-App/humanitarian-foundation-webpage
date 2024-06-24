import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const News: React.FC = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4} textAlign="center">Latest News</Heading>
      <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto">
        Stay updated with the latest news and updates from HUFIDA.
      </Text>
    </Box>
  );
};

export default News;