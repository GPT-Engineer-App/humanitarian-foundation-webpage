import React from "react";
import { Box, Button, Flex, Heading, Image, Text, VStack, HStack, Link, Icon, Divider } from "@chakra-ui/react";
import { FaDonate, FaHandsHelping, FaNewspaper, FaQuoteLeft, FaFacebook, FaTwitter, FaInstagram, FaUsers, FaProjectDiagram, FaHandsHelping as FaVolunteers } from "react-icons/fa";

const Index: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box position="relative" bgImage="url('/images/hero.jpg')" bgSize="cover" bgPos="center" color="white" textAlign="center" py={20}>
        <Box position="absolute" top={0} left={0} right={0} bottom={0} bg="rgba(0, 0, 0, 0.5)" />
        <Box position="relative" zIndex={1}>
          <Heading as="h1" size="2xl" mb={4} textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)">Empowering Communities, Transforming Lives</Heading>
          <Text fontSize="xl" mb={8} textShadow="1px 1px 3px rgba(0, 0, 0, 0.7)">Join us in making a difference in Africa. The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) is dedicated to empowering communities through sustainable development projects, education, and healthcare initiatives.</Text>
          <Button colorScheme="teal" size="lg" mr={4}>Get Involved</Button>
          <Button colorScheme="teal" size="lg" variant="outline">Learn More</Button>
        </Box>
      </Box>

      {/* Mission Statement */}
      <Box py={20} textAlign="center" display="flex" alignItems="center" justifyContent="center">
        <Box>
          <Heading as="h2" size="xl" mb={4}>Our Mission</Heading>
          <Text fontSize="2xl" maxW="600px" mx="auto">The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) is dedicated to empowering communities through sustainable development projects, education, and healthcare initiatives.</Text>
        </Box>
      </Box>

      {/* Impact Statistics */}
      <Box py={10} bg="gray.100" textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Our Impact</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="200px" m={4} textAlign="center">
            <Icon as={FaUsers} boxSize={10} color="teal.500" />
            <Heading as="h3" size="2xl" color="teal.500" mt={2}>50+</Heading>
            <Text mt={2}>Communities Served</Text>
          </Box>
          <Box maxW="200px" m={4} textAlign="center">
            <Icon as={FaProjectDiagram} boxSize={10} color="teal.500" />
            <Heading as="h3" size="2xl" color="teal.500" mt={2}>100+</Heading>
            <Text mt={2}>Projects Completed</Text>
          </Box>
          <Box maxW="200px" m={4} textAlign="center">
            <Icon as={FaVolunteers} boxSize={10} color="teal.500" />
            <Heading as="h3" size="2xl" color="teal.500" mt={2}>200+</Heading>
            <Text mt={2}>Volunteers Engaged</Text>
          </Box>
        </Flex>
      </Box>

      {/* Quick Links */}
      <Flex justify="center" py={10} bg="gray.100">
        <HStack spacing={10}>
          <VStack>
            <Icon as={FaDonate} boxSize={10} color="teal.500" _hover={{ color: "teal.300" }} />
            <Link href="#" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: "underline" }}>Donate</Link>
          </VStack>
          <VStack>
            <Icon as={FaHandsHelping} boxSize={10} color="teal.500" _hover={{ color: "teal.300" }} />
            <Link href="#" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: "underline" }}>Volunteer</Link>
          </VStack>
          <VStack>
            <Icon as={FaNewspaper} boxSize={10} color="teal.500" _hover={{ color: "teal.300" }} />
            <Link href="#" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: "underline" }}>Latest News</Link>
          </VStack>
        </HStack>
      </Flex>

      {/* Featured Projects */}
      <Box py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Featured Projects</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="300px" m={4} boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/project1.jpg" alt="Project 1" />
            <Box p={4}>
              <Heading as="h3" size="md" mt={4}>Clean Water Initiative</Heading>
              <Text mt={2}>Providing access to clean and safe drinking water in rural communities.</Text>
            </Box>
          </Box>
          <Box maxW="300px" m={4} boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/project2.jpg" alt="Project 2" />
            <Box p={4}>
              <Heading as="h3" size="md" mt={4}>Educational Programs</Heading>
              <Text mt={2}>Empowering the next generation through quality education and resources.</Text>
            </Box>
          </Box>
          <Box maxW="300px" m={4} boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/project3.jpg" alt="Project 3" />
            <Box p={4}>
              <Heading as="h3" size="md" mt={4}>Healthcare Services</Heading>
              <Text mt={2}>Improving healthcare access and outcomes in underserved areas.</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Testimonials */}
      <Box py={10} bg="gray.200" textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Testimonials</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="300px" m={4} textAlign="left" bg="white" p={4} borderRadius="md" boxShadow="md">
            <Icon as={FaQuoteLeft} boxSize={6} color="teal.500" />
            <Text mt={2}>"HUFIDA's programs have transformed our community. We now have access to clean water and better education for our children."</Text>
            <Text mt={2} fontWeight="bold">- Beneficiary</Text>
          </Box>
          <Box maxW="300px" m={4} textAlign="left" bg="white" p={4} borderRadius="md" boxShadow="md">
            <Icon as={FaQuoteLeft} boxSize={6} color="teal.500" />
            <Text mt={2}>"Volunteering with HUFIDA has been a life-changing experience. I am grateful for the opportunity to make a difference."</Text>
            <Text mt={2} fontWeight="bold">- Volunteer</Text>
          </Box>
          <Box maxW="300px" m={4} textAlign="left" bg="white" p={4} borderRadius="md" boxShadow="md">
            <Icon as={FaQuoteLeft} boxSize={6} color="teal.500" />
            <Text mt={2}>"Partnering with HUFIDA has allowed us to reach more people in need and create lasting impact."</Text>
            <Text mt={2} fontWeight="bold">- Partner</Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box py={10} bg="gray.800" color="white" textAlign="center">
        <Flex justify="center" wrap="wrap">
          <Box maxW="300px" m={4}>
            <Heading as="h3" size="md" mb={4}>Contact Us</Heading>
            <Text>1234 HUFIDA Street</Text>
            <Text>City, Country</Text>
            <Text>Email: info@hufida.org</Text>
            <Text>Phone: +123 456 7890</Text>
          </Box>
          <Box maxW="300px" m={4}>
            <Heading as="h3" size="md" mb={4}>Follow Us</Heading>
            <HStack justify="center" spacing={4}>
              <Link href="#"><Icon as={FaFacebook} boxSize={6} /></Link>
              <Link href="#"><Icon as={FaTwitter} boxSize={6} /></Link>
              <Link href="#"><Icon as={FaInstagram} boxSize={6} /></Link>
            </HStack>
          </Box>
          <Box maxW="300px" m={4}>
            <Heading as="h3" size="md" mb={4}>Subscribe</Heading>
            <Text mb={2}>Get the latest updates and news.</Text>
            <Button colorScheme="teal">Subscribe</Button>
          </Box>
        </Flex>
        <Divider my={4} />
        <Text>&copy; 2023 HUFIDA. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;