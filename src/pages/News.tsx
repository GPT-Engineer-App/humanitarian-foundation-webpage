import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link,
  Input,
  Button,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
} from "@chakra-ui/react";
import { FaTimes as CloseIcon } from "react-icons/fa";

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">News</Heading>
      <Input
        placeholder="Search news..."
        mb={4}
        value={searchTerm}
        onChange={handleSearch}
        size="lg"
      />
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
                <Image src="/images/featured-blog.jpg" alt="Featured Blog" mb={4} />
                <Heading as="h3" size="lg">Featured Blog Post</Heading>
                <Text mt={2}>Summary of the featured blog post content...</Text>
                <Link color="teal.500" href="#">Read More</Link>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="lg">Blog Post Title 1</Heading>
                <Text mt={2}>Summary of the blog post content...</Text>
                <Link color="teal.500" href="#">Read More</Link>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="lg">Blog Post Title 2</Heading>
                <Text mt={2}>Summary of the blog post content...</Text>
                <Link color="teal.500" href="#">Read More</Link>
              </Box>
              <Button colorScheme="teal" mt={4}>Load More</Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="lg">Press Release Title 1</Heading>
                <Text mt={2}>Date: 2023-01-01</Text>
                <Text mt={2}>Summary of the press release content...</Text>
                <Link color="teal.500" href="#">View Full Release</Link>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h3" size="lg">Press Release Title 2</Heading>
                <Text mt={2}>Date: 2023-02-01</Text>
                <Text mt={2}>Summary of the press release content...</Text>
                <Link color="teal.500" href="#">View Full Release</Link>
              </Box>
              <Button colorScheme="teal" mt={4}>Load More</Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              <Box onClick={() => handleImageClick("/images/media1.jpg")}>
                <Image src="/images/media1.jpg" alt="Media 1" boxSize="200px" objectFit="cover" cursor="pointer" />
              </Box>
              <Box onClick={() => handleImageClick("/images/media2.jpg")}>
                <Image src="/images/media2.jpg" alt="Media 2" boxSize="200px" objectFit="cover" cursor="pointer" />
              </Box>
              <Box onClick={() => handleImageClick("/images/media3.jpg")}>
                <Image src="/images/media3.jpg" alt="Media 3" boxSize="200px" objectFit="cover" cursor="pointer" />
              </Box>
            </SimpleGrid>
            <Button colorScheme="teal" mt={4}>Load More</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex justify="flex-end">
              <IconButton
                icon={<CloseIcon />}
                onClick={onClose}
                aria-label="Close"
              />
            </Flex>
            {selectedImage && <Image src={selectedImage} alt="Selected Media" />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default News;