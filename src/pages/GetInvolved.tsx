import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const GetInvolved: React.FC = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4} textAlign="center">Get Involved</Heading>
      <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto">
        Find out how you can get involved with our initiatives and make a difference.
      </Text>
    </Box>
  );
};

export default GetInvolved;