import React from "react";
import { Box, Heading, Text, Flex, Progress, Link, Icon } from "@chakra-ui/react";
import Image from 'next/image';
import Head from 'next/head';
import { FaMapMarkerAlt } from "react-icons/fa";

const Projects: React.FC = () => {
  return (
    <Box p={4}>
      <Head>
        <title>HUFIDA Projects - Making a Difference in Africa</title>
        <meta name="description" content="Explore HUFIDA's current and past projects in sustainable development, education, and healthcare across Africa." />
        <meta name="keywords" content="HUFIDA, projects, sustainable development, education, healthcare, Africa" />
      </Head>
      {/* Current Projects */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Current Projects</Heading>
        <Flex justify="center" wrap="wrap" direction={{ base: "column", md: "row" }}>
          <Box maxW="300px" m={4}>
            <Image src="/images/current_project1.jpg" alt="Clean Water Initiative - Providing access to clean and safe drinking water in rural communities." layout="responsive" width={300} height={200} style={{ borderRadius: '8px' }} />
            <Heading as="h3" size="md" mt={4}>Clean Water Initiative</Heading>
            <Text mt={2}>Providing access to clean and safe drinking water in rural communities.</Text>
            <Text mt={2}><strong>Goal:</strong> To ensure every household has access to clean water by the end of 2023.</Text>
            <Progress value={70} size="sm" colorScheme="teal" mt={2} />
            <Link href="#" color="teal.500" mt={2} display="block">Get Involved</Link>
          </Box>
          <Box maxW="300px" m={4}>
            <Image src="/images/current_project2.jpg" alt="Educational Programs - Empowering the next generation through quality education and resources." layout="responsive" width={300} height={200} style={{ borderRadius: '8px' }} />
            <Heading as="h3" size="md" mt={4}>Educational Programs</Heading>
            <Text mt={2}>Empowering the next generation through quality education and resources.</Text>
            <Text mt={2}><strong>Goal:</strong> To provide educational resources to 1,000 children by mid-2024.</Text>
            <Progress value={50} size="sm" colorScheme="teal" mt={2} />
            <Link href="#" color="teal.500" mt={2} display="block">Get Involved</Link>
          </Box>
          <Box maxW="300px" m={4}>
            <Image src="/images/current_project3.jpg" alt="Healthcare Services - Improving healthcare access and outcomes in underserved areas." layout="responsive" width={300} height={200} style={{ borderRadius: '8px' }} />
            <Heading as="h3" size="md" mt={4}>Healthcare Services</Heading>
            <Text mt={2}>Improving healthcare access and outcomes in underserved areas.</Text>
            <Text mt={2}><strong>Goal:</strong> To establish 5 new healthcare centers by the end of 2024.</Text>
            <Progress value={85} size="sm" colorScheme="teal" mt={2} />
            <Link href="#" color="teal.500" mt={2} display="block">Get Involved</Link>
          </Box>
        </Flex>
      </Box>

      {/* Past Projects */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Past Projects</Heading>
        <Flex justify="center" wrap="wrap" direction={{ base: "column", md: "row" }}>
          <Box maxW="300px" m={4}>
            <Image src="/images/past_project1.jpg" alt="Agricultural Development - Enhanced agricultural practices leading to increased crop yields and food security." layout="responsive" width={300} height={200} style={{ borderRadius: '8px' }} />
            <Heading as="h3" size="md" mt={4}>Agricultural Development</Heading>
            <Text mt={2}>Enhanced agricultural practices leading to increased crop yields and food security.</Text>
            <Text mt={2}><strong>Outcome:</strong> Increased crop yields by 30% and improved food security for 500 families.</Text>
            <Text mt={2}><strong>Impact Report:</strong> [Link to detailed report]</Text>
          </Box>
          <Box maxW="300px" m={4}>
            <Image src="/images/past_project2.jpg" alt="Women's Empowerment - Programs aimed at empowering women through education and vocational training." layout="responsive" width={300} height={200} style={{ borderRadius: '8px' }} />
            <Heading as="h3" size="md" mt={4}>Women's Empowerment</Heading>
            <Text mt={2}>Programs aimed at empowering women through education and vocational training.</Text>
            <Text mt={2}><strong>Outcome:</strong> Empowered 200 women with new skills and opportunities.</Text>
            <Text mt={2}><strong>Impact Report:</strong> [Link to detailed report]</Text>
          </Box>
          <Box maxW="300px" m={4}>
            <Image src="/images/past_project3.jpg" alt="Renewable Energy - Introduction of renewable energy solutions to reduce reliance on fossil fuels." layout="responsive" width={300} height={200} style={{ borderRadius: '8px' }} />
            <Heading as="h3" size="md" mt={4}>Renewable Energy</Heading>
            <Text mt={2}>Introduction of renewable energy solutions to reduce reliance on fossil fuels.</Text>
            <Text mt={2}><strong>Outcome:</strong> Installed solar panels in 100 homes, reducing energy costs by 40%.</Text>
            <Text mt={2}><strong>Impact Report:</strong> [Link to detailed report]</Text>
          </Box>
        </Flex>
      </Box>

      {/* Interactive Map */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Where We Operate</Heading>
        <Box textAlign="center" p={4}>
          <Icon as={FaMapMarkerAlt} boxSize={10} color="teal.500" />
          <Text mt={2}>Interactive map coming soon...</Text>
          <Text mt={2}>We operate in various regions across Africa, focusing on areas with the greatest need for development and support.</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;