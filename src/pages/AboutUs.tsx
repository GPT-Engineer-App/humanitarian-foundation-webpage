import React from "react";
import { Box, Heading, Text, VStack, Flex, Image } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

const AboutUs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About HUFIDA - Our Mission and Team</title>
        <meta name="description" content="Learn about HUFIDA's mission, our dedicated team, and our vision for sustainable development in Africa." />
        <meta name="keywords" content="HUFIDA, sustainable development, Africa, mission, team, healthcare, education" />
      </Helmet>
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

        {/* Our Team */}
        <Box mb={10}>
          <Heading as="h2" size="xl" mb={4} textAlign="center">Our Team</Heading>
          <Flex justify="center" wrap="wrap">
            <Box maxW="200px" m={4} textAlign="center">
              <Image src="/images/team1.jpg" alt="David Lindh - Team Leader" borderRadius="full" boxSize="150px" />
              <Text mt={2} fontWeight="bold">David Lindh</Text>
              <Text>Role: Team Leader</Text>
            </Box>
            <Box maxW="200px" m={4} textAlign="center">
              <Image src="/images/team2.jpg" alt="Babila Fofuleng - Project Manager" borderRadius="full" boxSize="150px" />
              <Text mt={2} fontWeight="bold">Babila Fofuleng</Text>
              <Text>Role: Project Manager</Text>
            </Box>
            <Box maxW="200px" m={4} textAlign="center">
              <Image src="/images/team3.jpg" alt="Shima - Technical Lead" borderRadius="full" boxSize="150px" />
              <Text mt={2} fontWeight="bold">Shima</Text>
              <Text>Role: Technical Lead</Text>
            </Box>
          </Flex>
        </Box>

        {/* Team Dynamics and Strengths */}
        <Box mb={10}>
          <Heading as="h2" size="xl" mb={4} textAlign="center">Team Dynamics and Strengths</Heading>
          <VStack spacing={4} maxW="800px" mx="auto">
            <Text fontSize="lg">
              Our team thrives on a collaborative approach, leveraging each member's unique strengths to achieve our goals. We are committed to our core values of integrity, innovation, and inclusivity, which guide our work and interactions.
            </Text>
          </VStack>
        </Box>

        {/* Project Vision and Goals */}
        <Box mb={10}>
          <Heading as="h2" size="xl" mb={4} textAlign="center">Project Vision and Goals</Heading>
          <VStack spacing={4} maxW="800px" mx="auto">
            <Text fontSize="lg">
              <strong>Vision:</strong> To create sustainable and impactful development projects that empower communities and improve lives.
            </Text>
            <Text fontSize="lg">
              <strong>Strategic Goals:</strong> To implement innovative solutions that address the root causes of poverty and inequality.
            </Text>
            <Text fontSize="lg">
              <strong>Sustainability Goals:</strong> To ensure that our projects are environmentally sustainable and economically viable.
            </Text>
            <Text fontSize="lg">
              <strong>Technical Goals:</strong> To leverage technology to enhance the effectiveness and reach of our projects.
            </Text>
            <Text fontSize="lg">
              <strong>Community Goals:</strong> To engage and empower local communities in the planning and implementation of our projects.
            </Text>
          </VStack>
        </Box>

        {/* Partners and Sponsors */}
        <Box mb={10}>
          <Heading as="h2" size="xl" mb={4} textAlign="center">Partners and Sponsors</Heading>
          <Flex justify="center" wrap="wrap">
            <Box maxW="200px" m={4} textAlign="center">
              <Image src="/images/partner1.png" alt="Partner 1 - Partner Description" borderRadius="md" boxSize="200px" />
              <Text mt={2} fontWeight="bold">Partner 1</Text>
              <Text>Partner Description</Text>
            </Box>
            <Box maxW="200px" m={4} textAlign="center">
              <Image src="/images/partner2.png" alt="Partner 2 - Partner Description" borderRadius="md" boxSize="200px" />
              <Text mt={2} fontWeight="bold">Partner 2</Text>
              <Text>Partner Description</Text>
            </Box>
            <Box maxW="200px" m={4} textAlign="center">
              <Image src="/images/partner3.png" alt="Partner 3 - Partner Description" borderRadius="md" boxSize="200px" />
              <Text mt={2} fontWeight="bold">Partner 3</Text>
              <Text>Partner Description</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;