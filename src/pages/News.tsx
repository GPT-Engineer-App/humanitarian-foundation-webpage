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

  const blogPosts = [
    {
      title: "Featured Blog Post",
      summary: "Summary of the featured blog post content...",
      image: "/images/featured-blog.jpg",
      link: "/blog/featured-blog",
    },
    {
      title: "Blog Post Title 1",
      summary: "Summary of the blog post content...",
      link: "/blog/blog-post-title-1",
    },
    {
      title: "Blog Post Title 2",
      summary: "Summary of the blog post content...",
      link: "/blog/blog-post-title-2",
    },
    {
      title: "Innovative Low-Tech Farming Solutions in Cameroon",
      summary: "Discover how local farmers in Cameroon are using low-tech solutions to improve crop yields and sustainability...",
      image: "/images/blog1.jpg",
      link: "/blog/innovative-low-tech-farming-solutions-in-cameroon",
    },
    {
      title: "Sustainable Water Management Practices",
      summary: "Learn about practical and sustainable water management practices being implemented in rural communities...",
      image: "/images/blog2.jpg",
      link: "/blog/sustainable-water-management-practices",
    },
    {
      title: "Empowering Women Through Low-Tech Innovations",
      summary: "Explore how low-tech innovations are empowering women in Cameroon to lead sustainable development projects...",
      image: "/images/blog3.jpg",
      link: "/blog/empowering-women-through-low-tech-innovations",
    },
    // Add more blog posts here
  ];

  const pressReleases = [
    {
      title: "Press Release Title 1",
      date: "2023-01-01",
      summary: "Summary of the press release content...",
      link: "#",
    },
    {
      title: "Press Release Title 2",
      date: "2023-02-01",
      summary: "Summary of the press release content...",
      link: "#",
    },
    // Add more press releases here
  ];

  const mediaImages = [
    "/images/media1.jpg",
    "/images/media2.jpg",
    "/images/media3.jpg",
    // Add more images here
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  const filteredBlogPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPressReleases = pressReleases.filter((release) =>
    release.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              {filteredBlogPosts.map((post, index) => (
                <Box key={index} p={4} shadow="md" borderWidth="1px">
                  {post.image && <Image src={post.image} alt={post.title} mb={4} />}
                  <Heading as="h3" size="lg" mb={2}>{post.title}</Heading>
                  <Text mb={4}>{post.summary}</Text>
                  <Link color="teal.500" href={post.link}>Read More</Link>
                </Box>
              ))}
              <Button colorScheme="teal" mt={4}>Load More</Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              {filteredPressReleases.map((release, index) => (
                <Box key={index} p={4} shadow="md" borderWidth="1px">
                  <Heading as="h3" size="lg" mb={2}>{release.title}</Heading>
                  <Text mt={2}>Date: {release.date}</Text>
                  <Text mb={4}>{release.summary}</Text>
                  <Link color="teal.500" href={release.link}>View Full Release</Link>
                </Box>
              ))}
              <Button colorScheme="teal" mt={4}>Load More</Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {mediaImages.map((src, index) => (
                <Box key={index} onClick={() => handleImageClick(src)}>
                  <Image src={src} alt={`Media ${index + 1}`} boxSize="200px" objectFit="cover" cursor="pointer" />
                </Box>
              ))}
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