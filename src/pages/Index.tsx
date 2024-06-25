import React from "react";
import { Box, Button, Flex, Heading, Text, VStack, HStack, Link, Icon, Divider } from "@chakra-ui/react";
import { Image } from 'next/image';
import Head from 'next/head';
import { FaDonate, FaHandsHelping, FaNewspaper, FaQuoteLeft, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index: React.FC = () => {
  return (
    <Box>
      <Head>
        <title>HUFIDA - Empowering Communities, Transforming Lives</title>
        <meta name="description" content="The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) is dedicated to empowering communities through sustainable development projects, education, and healthcare initiatives." />
        <meta name="keywords" content="HUFIDA, humanitarian, development, Africa, sustainable projects, education, healthcare" />
      </Head>
      {/* Hero Section */}
      <Box bgImage="url('/images/hero.jpg')" bgSize="cover" bgPos="center" color="white" textAlign="center" py={{ base: 10, md: 20 }}>
        <Heading as="h1" size="2xl" mb={4}>Empowering Communities, Transforming Lives</Heading>
        <Text fontSize="xl" mb={8}>Join us in making a difference in Africa. The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) is dedicated to empowering communities through sustainable development projects, education, and healthcare initiatives.</Text>
        <Button colorScheme="teal" size="lg" mr={4}>Get Involved</Button>
        <Button colorScheme="teal" size="lg" variant="outline">Learn More</Button>
      </Box>

      {/* Mission Statement */}
      <Box py={{ base: 5, md: 10 }} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Our Mission</Heading>
        <Text fontSize="lg" maxW="600px" mx="auto">The Humanitarian Foundation for Innovative Development in Africa (HUFIDA) is dedicated to empowering communities through sustainable development projects, education, and healthcare initiatives.</Text>
      </Box>

      {/* Impact Statistics */}
      <Box py={{ base: 5, md: 10 }} bg="gray.100" textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Our Impact</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="200px" m={4}>
            <Heading as="h3" size="2xl" color="teal.500">50+</Heading>
            <Text mt={2}>Communities Served</Text>
          </Box>
          <Box maxW="200px" m={4}>
            <Heading as="h3" size="2xl" color="teal.500">100+</Heading>
            <Text mt={2}>Projects Completed</Text>
          </Box>
          <Box maxW="200px" m={4}>
            <Heading as="h3" size="2xl" color="teal.500">200+</Heading>
            <Text mt={2}>Volunteers Engaged</Text>
          </Box>
        </Flex>
      </Box>

      {/* Quick Links */}
      <Flex justify="center" py={{ base: 5, md: 10 }} bg="gray.100" wrap={{ base: 'wrap', md: 'nowrap' }}>
        <HStack spacing={10}>
          <VStack>
            <Icon as={FaDonate} boxSize={10} color="teal.500" />
            <Link href="#" fontSize="lg" fontWeight="bold">Donate</Link>
          </VStack>
          <VStack>
            <Icon as={FaHandsHelping} boxSize={10} color="teal.500" />
            <Link href="#" fontSize="lg" fontWeight="bold">Volunteer</Link>
          </VStack>
          <VStack>
            <Icon as={FaNewspaper} boxSize={10} color="teal.500" />
            <Link href="#" fontSize="lg" fontWeight="bold">Latest News</Link>
          </VStack>
        </HStack>
      </Flex>

      {/* Featured Projects */}
      <Box py={{ base: 5, md: 10 }} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Featured Projects</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="300px" m={4}>
            <Image src="/images/project1.jpg" alt="Clean Water Initiative" borderRadius="md" width={300} height={200} />
            <Heading as="h3" size="md" mt={4}>Clean Water Initiative</Heading>
            <Text mt={2}>Providing access to clean and safe drinking water in rural communities.</Text>
          </Box>
          <Box maxW="300px" m={4}>
            <Image src="/images/project2.jpg" alt="Educational Programs" borderRadius="md" width={300} height={200} />
            <Heading as="h3" size="md" mt={4}>Educational Programs</Heading>
            <Text mt={2}>Empowering the next generation through quality education and resources.</Text>
          </Box>
          <Box maxW="300px" m={4}>
            <Image src="/images/project3.jpg" alt="Healthcare Services" borderRadius="md" width={300} height={200} />
            <Heading as="h3" size="md" mt={4}>Healthcare Services</Heading>
            <Text mt={2}>Improving healthcare access and outcomes in underserved areas.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Testimonials */}
      <Box py={{ base: 5, md: 10 }} bg="gray.100" textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Testimonials</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="300px" m={4} textAlign="left">
            <Icon as={FaQuoteLeft} boxSize={6} color="teal.500" />
            <Text mt={2}>"HUFIDA's programs have transformed our community. We now have access to clean water and better education for our children."</Text>
            <Text mt={2} fontWeight="bold">- Beneficiary</Text>
          </Box>
          <Box maxW="300px" m={4} textAlign="left">
            <Icon as={FaQuoteLeft} boxSize={6} color="teal.500" />
            <Text mt={2}>"Volunteering with HUFIDA has been a life-changing experience. I am grateful for the opportunity to make a difference."</Text>
            <Text mt={2} fontWeight="bold">- Volunteer</Text>
          </Box>
          <Box maxW="300px" m={4} textAlign="left">
            <Icon as={FaQuoteLeft} boxSize={6} color="teal.500" />
            <Text mt={2}>"Partnering with HUFIDA has allowed us to reach more people in need and create lasting impact."</Text>
            <Text mt={2} fontWeight="bold">- Partner</Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box py={{ base: 5, md: 10 }} bg="gray.800" color="white" textAlign="center">
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
              <Link href="#" aria-label="Facebook"><Icon as={FaFacebook} boxSize={6} /></Link>
              <Link href="#" aria-label="Twitter"><Icon as={FaTwitter} boxSize={6} /></Link>
              <Link href="#" aria-label="Instagram"><Icon as={FaInstagram} boxSize={6} /></Link>
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