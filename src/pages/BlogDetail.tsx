import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    // Fetch blog data based on the id
    fetch(`/api/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, [id]);

  if (!blogData) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box p={4}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">{blogData.title}</Heading>
      <Text fontSize="lg" mb={4}>{blogData.content}</Text>

      <Heading as="h2" size="xl" mb={4}>Project Information</Heading>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Start Date</Th>
            <Th>End Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {blogData.projects.map((project: any) => (
            <Tr key={project.id}>
              <Td>{project.name}</Td>
              <Td>{project.description}</Td>
              <Td>{project.startDate}</Td>
              <Td>{project.endDate}</Td>
              <Td>{project.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Heading as="h2" size="xl" mb={4}>Tasks</Heading>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Assigned To</Th>
            <Th>Status</Th>
            <Th>Priority</Th>
          </Tr>
        </Thead>
        <Tbody>
          {blogData.tasks.map((task: any) => (
            <Tr key={task.id}>
              <Td>{task.name}</Td>
              <Td>{task.description}</Td>
              <Td>{task.assignedTo}</Td>
              <Td>{task.status}</Td>
              <Td>{task.priority}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Heading as="h2" size="xl" mb={4}>Team Members</Heading>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Role</Th>
            <Th>Contact</Th>
          </Tr>
        </Thead>
        <Tbody>
          {blogData.teamMembers.map((member: any) => (
            <Tr key={member.id}>
              <Td>{member.name}</Td>
              <Td>{member.role}</Td>
              <Td>{member.contact}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Heading as="h2" size="xl" mb={4}>Milestones</Heading>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th>Due Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {blogData.milestones.map((milestone: any) => (
            <Tr key={milestone.id}>
              <Td>{milestone.description}</Td>
              <Td>{milestone.dueDate}</Td>
              <Td>{milestone.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Heading as="h2" size="xl" mb={4}>Resources</Heading>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Quantity</Th>
            <Th>Allocation Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {blogData.resources.map((resource: any) => (
            <Tr key={resource.id}>
              <Td>{resource.type}</Td>
              <Td>{resource.quantity}</Td>
              <Td>{resource.allocationDate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Heading as="h2" size="xl" mb={4}>Communications</Heading>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>Sender</Th>
            <Th>Receiver</Th>
            <Th>Message</Th>
          </Tr>
        </Thead>
        <Tbody>
          {blogData.communications.map((communication: any) => (
            <Tr key={communication.id}>
              <Td>{communication.sender}</Td>
              <Td>{communication.receiver}</Td>
              <Td>{communication.message}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default BlogDetail;