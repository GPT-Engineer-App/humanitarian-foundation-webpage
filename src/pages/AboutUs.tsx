import React from "react";
import { Box, Heading, Text, Image, VStack, Flex } from "@chakra-ui/react";

const AboutUs: React.FC = () => {
  return (
    <Box p={4}>
      {/* Our Story */}
      <Box mb={10} display="flex" flexDirection="column" justifyContent="center" minH="300px">
        <Heading as="h2" size="xl" mb={4} textAlign="center">Our Story</Heading>
        <Text fontSize="xl" textAlign="center" maxW="800px" mx="auto">
          The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) was founded with the vision of empowering communities through sustainable development projects, education, and healthcare initiatives. Our journey began in [Year], and since then, we have been dedicated to transforming lives and creating lasting impact in Africa.
        </Text>
      </Box>

      {/* Mission and Vision */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Mission and Vision</Heading>
        <VStack spacing={4} maxW="800px" mx="auto">
          <Text fontSize="lg" display="flex" alignItems="center">
            <Box as="span" mr={2}><Icon name="mission" /></Box>
            <strong>Mission:</strong> To empower communities through sustainable development projects, education, and healthcare initiatives.
          </Text>
          <Text fontSize="lg" display="flex" alignItems="center">
            <Box as="span" mr={2}><Icon name="vision" /></Box>
            <strong>Vision:</strong> A thriving Africa where every individual has access to the resources and opportunities needed to achieve their full potential.
          </Text>
        </VStack>
      </Box>

      {/* Our Team */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Our Team</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="200px" m={4} textAlign="center" boxShadow="md" p={4} borderRadius="md">
            <Image src="/images/team1.jpg" alt="David Lindh" borderRadius="full" boxSize="150px" mx="auto" />
            <Text mt={2} fontWeight="bold">David Lindh</Text>
            <Text mt={1}>Role: Team Leader</Text>
          </Box>
          <Box maxW="200px" m={4} textAlign="center" boxShadow="md" p={4} borderRadius="md">
            <Image src="/images/team2.jpg" alt="Babila Fofuleng" borderRadius="full" boxSize="150px" mx="auto" />
            <Text mt={2} fontWeight="bold">Babila Fofuleng</Text>
            <Text mt={1}>Role: Project Manager</Text>
          </Box>
          <Box maxW="200px" m={4} textAlign="center" boxShadow="md" p={4} borderRadius="md">
            <Image src="/images/team3.jpg" alt="Shima" borderRadius="full" boxSize="150px" mx="auto" />
            <Text mt={2} fontWeight="bold">Shima</Text>
            <Text mt={1}>Role: Technical Lead</Text>
          </Box>
        </Flex>
      </Box>

      {/* Team Dynamics and Strengths */}
      <Box mb={10} display="flex" flexDirection="column" justifyContent="center" minH="300px">
        <Heading as="h2" size="xl" mb={4} textAlign="center">Team Dynamics and Strengths</Heading>
        <VStack spacing={4} maxW="800px" mx="auto">
          <Text fontSize="xl">
            Our team thrives on a collaborative approach, leveraging each member's unique strengths to achieve our goals. We are committed to our core values of integrity, innovation, and inclusivity, which guide our work and interactions.
          </Text>
        </VStack>
      </Box>

      {/* Project Vision and Goals */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Project Vision and Goals</Heading>
        <VStack spacing={4} maxW="800px" mx="auto">
          <Text fontSize="lg" display="flex" alignItems="center">
            <Box as="span" mr={2}><Icon name="vision" /></Box>
            <strong>Vision:</strong> To create sustainable and impactful development projects that empower communities and improve lives.
          </Text>
          <Text fontSize="lg" display="flex" alignItems="center">
            <Box as="span" mr={2}><Icon name="strategic" /></Box>
            <strong>Strategic Goals:</strong> To implement innovative solutions that address the root causes of poverty and inequality.
          </Text>
          <Text fontSize="lg" display="flex" alignItems="center">
            <Box as="span" mr={2}><Icon name="sustainability" /></Box>
            <strong>Sustainability Goals:</strong> To ensure that our projects are environmentally sustainable and economically viable.
          </Text>
          <Text fontSize="lg" display="flex" alignItems="center">
            <Box as="span" mr={2}><Icon name="technical" /></Box>
            <strong>Technical Goals:</strong> To leverage technology to enhance the effectiveness and reach of our projects.
          </Text>
          <Text fontSize="lg" display="flex" alignItems="center">
            <Box as="span" mr={2}><Icon name="community" /></Box>
            <strong>Community Goals:</strong> To engage and empower local communities in the planning and implementation of our projects.
          </Text>
        </VStack>
      </Box>

      {/* Partners and Sponsors */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Partners and Sponsors</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="200px" m={4} textAlign="center" boxShadow="md" p={4} borderRadius="md">
            <Image src="/images/partner1.png" alt="Partner 1" borderRadius="md" />
            <Text mt={2} fontWeight="bold">Partner 1</Text>
            <Text mt={1}>Partner Description</Text>
          </Box>
          <Box maxW="200px" m={4} textAlign="center" boxShadow="md" p={4} borderRadius="md">
            <Image src="/images/partner2.png" alt="Partner 2" borderRadius="md" />
            <Text mt={2} fontWeight="bold">Partner 2</Text>
            <Text mt={1}>Partner Description</Text>
          </Box>
          <Box maxW="200px" m={4} textAlign="center" boxShadow="md" p={4} borderRadius="md">
            <Image src="/images/partner3.png" alt="Partner 3" borderRadius="md" />
            <Text mt={2} fontWeight="bold">Partner 3</Text>
            <Text mt={1}>Partner Description</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;