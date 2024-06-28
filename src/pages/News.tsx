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
        bg="gray.100"
        p={4}
        fontSize="lg"
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
              <Box p={4} shadow="md" borderWidth="1px" bg="gray.50" fontSize="lg">
                <Image src="/images/featured-blog.jpg" alt="Featured Blog" mb={4} />
                <Heading as="h3" size="lg">Featured Blog Post</Heading>
                <Text mt={2}>Summary of the featured blog post content...</Text>
                <Link color="teal.500" href={`/blog/featured-blog`}>Read More</Link>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" bg="gray.50" fontSize="lg">
                <Heading as="h3" size="lg">Blog Post Title 1</Heading>
                <Text mt={2}>Summary of the blog post content...</Text>
                <Link color="teal.500" href={`/blog/blog-post-title-1`}>Read More</Link>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" bg="gray.50" fontSize="lg">
                <Heading as="h3" size="lg">Blog Post Title 2</Heading>
                <Text mt={2}>Summary of the blog post content...</Text>
                <Link color="teal.500" href={`/blog/blog-post-title-2`}>Read More</Link>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" bg="gray.50" fontSize="lg">
                <Image src="/images/blog1.jpg" alt="Blog 1" mb={4} />
                <Heading as="h3" size="lg">Innovative Low-Tech Farming Solutions in Cameroon</Heading>
                <Text mt={2}>Discover how local farmers in Cameroon are using low-tech solutions to improve crop yields and sustainability...</Text>
                <Link color="teal.500" href={`/blog/innovative-low-tech-farming-solutions-in-cameroon`}>Read More</Link>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" bg="gray.50" fontSize="lg">
                <Image src="/images/blog2.jpg" alt="Blog 2" mb={4} />
                <Heading as="h3" size="lg">Sustainable Water Management Practices</Heading>
                <Text mt={2}>Learn about practical and sustainable water management practices being implemented in rural communities...</Text>
                <Link color="teal.500" href={`/blog/sustainable-water-management-practices`}>Read More</Link>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" bg="gray.50" fontSize="lg">
                <Image src="/images/blog3.jpg" alt="Blog 3" mb={4} />
                <Heading as="h3" size="lg">Empowering Women Through Low-Tech Innovations</Heading>
                <Text mt={2}>Explore how low-tech innovations are empowering women in Cameroon to lead sustainable development projects...</Text>
                <Link color="teal.500" href={`/blog/empowering-women-through-low-tech-innovations`}>Read More</Link>
              </Box>
              <Button colorScheme="teal" mt={4}>Load More</Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px" bg="gray.50" fontSize="lg">
                <Heading as="h3" size="lg">Press Release Title 1</Heading>
                <Text mt={2}>Date: 2023-01-01</Text>
                <Text mt={2}>Summary of the press release content...</Text>
                <Link color="teal.500" href="#">View Full Release</Link>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" bg="gray.50" fontSize="lg">
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
              <Box onClick={() => handleImageClick("/images/media1.jpg")} p={4} bg="gray.50" fontSize="lg">
                <Image src="/images/media1.jpg" alt="Media 1" boxSize="200px" objectFit="cover" cursor="pointer" />
              </Box>
              <Box onClick={() => handleImageClick("/images/media2.jpg")} p={4} bg="gray.50" fontSize="lg">
                <Image src="/images/media2.jpg" alt="Media 2" boxSize="200px" objectFit="cover" cursor="pointer" />
              </Box>
              <Box onClick={() => handleImageClick("/images/media3.jpg")} p={4} bg="gray.50" fontSize="lg">
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