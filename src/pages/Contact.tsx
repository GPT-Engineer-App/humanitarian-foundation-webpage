import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Contact: React.FC = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4} textAlign="center">Contact Us</Heading>
      <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto">
        Get in touch with us for any inquiries or support.
      </Text>
    </Box>
  );
};

export default Contact;