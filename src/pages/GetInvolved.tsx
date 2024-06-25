import React from "react";
import { Box, Heading, Text, VStack, Button, Input, Textarea, FormControl, FormLabel, Select, Flex, Image, Checkbox } from "@chakra-ui/react";

const GetInvolved: React.FC = () => {
  return (
    <Box p={4}>
      {/* Volunteer Opportunities */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Volunteer Opportunities</Heading>
        <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto" mb={4}>
          Join us in making a difference! We offer various volunteer opportunities including community outreach, educational programs, and healthcare initiatives.
        </Text>
        <Box maxW="800px" mx="auto">
          <Heading as="h3" size="lg" mb={4}>Available Opportunities</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h4" size="md">Community Outreach Volunteer</Heading>
              <Text mt={2}>Help us reach out to local communities and spread awareness about our initiatives. Responsibilities include organizing events, distributing materials, and engaging with community members.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h4" size="md">Educational Program Assistant</Heading>
              <Text mt={2}>Assist in the planning and execution of educational programs for children and adults. Responsibilities include preparing materials, teaching, and providing support to participants.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h4" size="md">Healthcare Initiative Volunteer</Heading>
              <Text mt={2}>Support our healthcare initiatives by participating in health camps, assisting medical professionals, and educating the community about health and wellness.</Text>
            </Box>
          </VStack>
        </Box>
      </Box>

      {/* Volunteer Application Form */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Apply to Volunteer</Heading>
        <Box maxW="600px" mx="auto">
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
          <Button colorScheme="teal" width="full">Submit Application</Button>
        </Box>
      </Box>

      {/* Testimonials */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Volunteer Testimonials</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="300px" m={4} textAlign="center">
            <Image src="/images/volunteer1.jpg" alt="Volunteer 1" borderRadius="full" boxSize="150px" mx="auto" />
            <Text mt={2} fontWeight="bold">John Doe</Text>
            <Text>"Volunteering with HUFIDA has been an incredibly rewarding experience. I've had the opportunity to make a real difference in my community."</Text>
          </Box>
          <Box maxW="300px" m={4} textAlign="center">
            <Image src="/images/volunteer2.jpg" alt="Volunteer 2" borderRadius="full" boxSize="150px" mx="auto" />
            <Text mt={2} fontWeight="bold">Jane Smith</Text>
            <Text>"The team at HUFIDA is amazing. They are dedicated, passionate, and truly care about the work they do. I'm proud to be a part of this organization."</Text>
          </Box>
          <Box maxW="300px" m={4} textAlign="center">
            <Image src="/images/volunteer3.jpg" alt="Volunteer 3" borderRadius="full" boxSize="150px" mx="auto" />
            <Text mt={2} fontWeight="bold">Michael Johnson</Text>
            <Text>"I've learned so much and met so many wonderful people through my volunteer work with HUFIDA. It's been a life-changing experience."</Text>
          </Box>
        </Flex>
      </Box>

      {/* Donate */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Donate</Heading>
        <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto" mb={4}>
          Your donations help us continue our mission. Choose a donation method that works best for you.
        </Text>
        <Box maxW="600px" mx="auto">
          <FormControl mb={4}>
            <FormLabel>Donation Amount</FormLabel>
            <Input type="number" placeholder="Enter amount" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Payment Details</FormLabel>
            <Input placeholder="Card Number" />
          </FormControl>
          <Checkbox mb={4}>Make this a recurring donation</Checkbox>
          <Button colorScheme="teal" width="full">Donate Now</Button>
        </Box>
      </Box>

      {/* Impact Stories */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Impact Stories</Heading>
        <Flex justify="center" wrap="wrap">
          <Box maxW="300px" m={4} textAlign="center">
            <Image src="/images/impact1.jpg" alt="Impact Story 1" borderRadius="md" />
            <Text mt={2}>Story 1: How your donations have made a difference.</Text>
          </Box>
          <Box maxW="300px" m={4} textAlign="center">
            <Image src="/images/impact2.jpg" alt="Impact Story 2" borderRadius="md" />
            <Text mt={2}>Story 2: Transforming lives through education.</Text>
          </Box>
          <Box maxW="300px" m={4} textAlign="center">
            <Image src="/images/impact3.jpg" alt="Impact Story 3" borderRadius="md" />
            <Text mt={2}>Story 3: Providing healthcare to those in need.</Text>
          </Box>
        </Flex>
      </Box>
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