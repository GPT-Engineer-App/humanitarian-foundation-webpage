import React from "react";
import { Box, Heading, Text, Image, Flex, Progress, Link, Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Projects: React.FC = () => {
  return (
    <Box p={4}>
      {/* Current Projects */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Current Projects</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="300px" m={4}>
            <Image src="/images/current_project1.jpg" alt="Current Project 1" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>Clean Water Initiative</Heading>
            <Text mt={2}>Providing access to clean and safe drinking water in rural communities.</Text>
            <Progress value={70} size="sm" colorScheme="teal" mt={2} />
            <Link href="#" color="teal.500" mt={2} display="block">Get Involved</Link>
          </Box>
          <Box maxW="300px" m={4}>
            <Image src="/images/current_project2.jpg" alt="Current Project 2" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>Educational Programs</Heading>
            <Text mt={2}>Empowering the next generation through quality education and resources.</Text>
            <Progress value={50} size="sm" colorScheme="teal" mt={2} />
            <Link href="#" color="teal.500" mt={2} display="block">Get Involved</Link>
          </Box>
          <Box maxW="300px" m={4}>
            <Image src="/images/current_project3.jpg" alt="Current Project 3" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>Healthcare Services</Heading>
            <Text mt={2}>Improving healthcare access and outcomes in underserved areas.</Text>
            <Progress value={85} size="sm" colorScheme="teal" mt={2} />
            <Link href="#" color="teal.500" mt={2} display="block">Get Involved</Link>
          </Box>
        </Flex>
      </Box>

      {/* Past Projects */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Past Projects</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="300px" m={4}>
            <Image src="/images/past_project1.jpg" alt="Past Project 1" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>Agricultural Development</Heading>
            <Text mt={2}>Enhanced agricultural practices leading to increased crop yields and food security.</Text>
          </Box>
          <Box maxW="300px" m={4}>
            <Image src="/images/past_project2.jpg" alt="Past Project 2" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>Women's Empowerment</Heading>
            <Text mt={2}>Programs aimed at empowering women through education and vocational training.</Text>
          </Box>
          <Box maxW="300px" m={4}>
            <Image src="/images/past_project3.jpg" alt="Past Project 3" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>Renewable Energy</Heading>
            <Text mt={2}>Introduction of renewable energy solutions to reduce reliance on fossil fuels.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Interactive Map */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Where We Operate</Heading>
        <Box textAlign="center">
          <Icon as={FaMapMarkerAlt} boxSize={10} color="teal.500" />
          <Text mt={2}>Interactive map coming soon...</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;