import React from "react";
import { Box, Heading, Text, VStack, Image, Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const News: React.FC = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">News</Heading>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Blog</Tab>
          <Tab>Press Releases</Tab>
          <Tab>Media Gallery</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="lg">Blog Post Title 1</Heading>
                <Text mt={2}>Summary of the blog post content...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="lg">Blog Post Title 2</Heading>
                <Text mt={2}>Summary of the blog post content...</Text>
              </Box>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="lg">Press Release Title 1</Heading>
                <Text mt={2}>Summary of the press release content...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="lg">Press Release Title 2</Heading>
                <Text mt={2}>Summary of the press release content...</Text>
              </Box>
            </VStack>
          </TabPanel>
          <TabPanel>
            <Flex wrap="wrap" justify="center">
              <Box m={2}>
                <Image src="/images/media1.jpg" alt="Media 1" boxSize="200px" objectFit="cover" />
              </Box>
              <Box m={2}>
                <Image src="/images/media2.jpg" alt="Media 2" boxSize="200px" objectFit="cover" />
              </Box>
              <Box m={2}>
                <Image src="/images/media3.jpg" alt="Media 3" boxSize="200px" objectFit="cover" />
              </Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default News;