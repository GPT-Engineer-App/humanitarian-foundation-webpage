import React from "react";
import { Box, Heading, Text, VStack, Button, Input, Textarea, FormControl, FormLabel, Select, Flex, Image } from "@chakra-ui/react";

const GetInvolved: React.FC = () => {
  return (
    <Box p={4}>
      {/* Volunteer Opportunities */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Volunteer Opportunities</Heading>
        <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto" mb={4}>
          Join us in making a difference! We offer various volunteer opportunities including community outreach, educational programs, and healthcare initiatives.
        </Text>
        <Box maxW="600px" mx="auto">
          <Heading as="h3" size="lg" mb={4}>Apply to Volunteer</Heading>
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Volunteer Type</FormLabel>
            <Select placeholder="Select option">
              <option>Community Outreach</option>
              <option>Educational Programs</option>
              <option>Healthcare Initiatives</option>
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Why do you want to volunteer?" />
          </FormControl>
          <Button colorScheme="teal">Submit Application</Button>
        </Box>
      </Box>

      {/* Donate */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Donate</Heading>
        <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto" mb={4}>
          Your donations help us continue our mission. Choose a donation method that works best for you.
        </Text>
        <Flex justify="center" wrap="wrap">
          <Box maxW="300px" m={4} textAlign="center">
            <Heading as="h3" size="md" mb={2}>One-Time Donation</Heading>
            <Button colorScheme="teal">Donate Now</Button>
          </Box>
          <Box maxW="300px" m={4} textAlign="center">
            <Heading as="h3" size="md" mb={2}>Monthly Donation</Heading>
            <Button colorScheme="teal">Donate Monthly</Button>
          </Box>
          <Box maxW="300px" m={4} textAlign="center">
            <Heading as="h3" size="md" mb={2}>Sponsorship</Heading>
            <Button colorScheme="teal">Become a Sponsor</Button>
          </Box>
        </Flex>
      </Box>

      {/* Fundraise */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Fundraise</Heading>
        <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto" mb={4}>
          Want to help us raise funds? Here are some tools and tips to get you started.
        </Text>
        <Box maxW="600px" mx="auto">
          <Heading as="h3" size="lg" mb={4}>Fundraising Tips</Heading>
          <VStack spacing={4} textAlign="left">
            <Text>1. Set a clear goal and share it with your network.</Text>
            <Text>2. Use social media to spread the word.</Text>
            <Text>3. Host events or activities to engage your community.</Text>
            <Text>4. Keep your supporters updated on your progress.</Text>
          </VStack>
        </Box>
      </Box>

      {/* Events */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Events</Heading>
        <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto" mb={4}>
          Join us at our upcoming events and see the impact of our work firsthand.
        </Text>
        <Flex justify="center" wrap="wrap">
          <Box maxW="300px" m={4} textAlign="center">
            <Image src="/images/event1.jpg" alt="Event 1" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>Community Health Fair</Heading>
            <Text mt={2}>Date: 25th Dec 2023</Text>
            <Text mt={2}>Location: City Park</Text>
            <Button colorScheme="teal" mt={2}>Learn More</Button>
          </Box>
          <Box maxW="300px" m={4} textAlign="center">
            <Image src="/images/event2.jpg" alt="Event 2" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>Educational Workshop</Heading>
            <Text mt={2}>Date: 15th Jan 2024</Text>
            <Text mt={2}>Location: Community Center</Text>
            <Button colorScheme="teal" mt={2}>Learn More</Button>
          </Box>
          <Box maxW="300px" m={4} textAlign="center">
            <Image src="/images/event3.jpg" alt="Event 3" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>Fundraising Gala</Heading>
            <Text mt={2}>Date: 10th Feb 2024</Text>
            <Text mt={2}>Location: Grand Hall</Text>
            <Button colorScheme="teal" mt={2}>Learn More</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default GetInvolved;