import React from "react";
import { Box, Heading, Text, Image, VStack, HStack, Flex, Divider } from "@chakra-ui/react";

const AboutUs: React.FC = () => {
  return (
    <Box p={4}>
      {/* Our Story */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Our Story</Heading>
        <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto">
          The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) was founded with the vision of empowering communities through sustainable development projects, education, and healthcare initiatives. Our journey began in [Year], and since then, we have been dedicated to transforming lives and creating lasting impact in Africa.
        </Text>
      </Box>

      {/* Mission and Vision */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Mission and Vision</Heading>
        <VStack spacing={4} maxW="800px" mx="auto">
          <Text fontSize="lg">
            <strong>Mission:</strong> To empower communities through sustainable development projects, education, and healthcare initiatives.
          </Text>
          <Text fontSize="lg">
            <strong>Vision:</strong> A thriving Africa where every individual has access to the resources and opportunities needed to achieve their full potential.
          </Text>
        </VStack>
      </Box>

      {/* Team */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Our Team</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="200px" m={4} textAlign="center">
            <Image src="/images/team1.jpg" alt="Team Member 1" borderRadius="full" boxSize="150px" mx="auto" />
            <Text mt={2} fontWeight="bold">John Doe</Text>
            <Text>CEO & Founder</Text>
          </Box>
          <Box maxW="200px" m={4} textAlign="center">
            <Image src="/images/team2.jpg" alt="Team Member 2" borderRadius="full" boxSize="150px" mx="auto" />
            <Text mt={2} fontWeight="bold">Jane Smith</Text>
            <Text>Director of Operations</Text>
          </Box>
          <Box maxW="200px" m={4} textAlign="center">
            <Image src="/images/team3.jpg" alt="Team Member 3" borderRadius="full" boxSize="150px" mx="auto" />
            <Text mt={2} fontWeight="bold">Michael Brown</Text>
            <Text>Head of Education Programs</Text>
          </Box>
        </Flex>
      </Box>

      {/* Partners and Sponsors */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Partners and Sponsors</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="200px" m={4} textAlign="center">
            <Image src="/images/partner1.png" alt="Partner 1" borderRadius="md" />
            <Text mt={2} fontWeight="bold">Partner 1</Text>
            <Text>Partner Description</Text>
          </Box>
          <Box maxW="200px" m={4} textAlign="center">
            <Image src="/images/partner2.png" alt="Partner 2" borderRadius="md" />
            <Text mt={2} fontWeight="bold">Partner 2</Text>
            <Text>Partner Description</Text>
          </Box>
          <Box maxW="200px" m={4} textAlign="center">
            <Image src="/images/partner3.png" alt="Partner 3" borderRadius="md" />
            <Text mt={2} fontWeight="bold">Partner 3</Text>
            <Text>Partner Description</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;