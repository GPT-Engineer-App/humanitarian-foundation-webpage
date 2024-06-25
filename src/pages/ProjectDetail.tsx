interface Project {
  id: number;
  name: string;
  description: string;
}

interface Task {
  id: number;
  name: string;
  description: string;
  assignedTo: string;
  status: string;
  priority: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  contact: string;
}

interface Milestone {
  id: number;
  name: string;
  description: string;
  dueDate: string;
  status: string;
}

interface Resource {
  id: number;
  type: string;
  quantity: number;
  allocationDate: string;
}

interface Communication {
  id: number;
  sender: string;
  receiver: string;
  message: string;
  date: string;
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [communications, setCommunications] = useState<Communication[]>([]);

  useEffect(() => {
    // Fetch project data
    fetch(`/api/projects/${projectId}`)
      .then(response => response.json())
      .then(data => setProject(data));

    // Fetch tasks data
    fetch(`/api/projects/${projectId}/tasks`)
      .then(response => response.json())
      .then(data => setTasks(data));

    // Fetch team members data
    fetch(`/api/projects/${projectId}/team-members`)
      .then(response => response.json())
      .then(data => setTeamMembers(data));

    // Fetch milestones data
    fetch(`/api/projects/${projectId}/milestones`)
      .then(response => response.json())
      .then(data => setMilestones(data));

    // Fetch resources data
    fetch(`/api/projects/${projectId}/resources`)
      .then(response => response.json())
      .then(data => setResources(data));

    // Fetch communications data
    fetch(`/api/projects/${projectId}/communications`)
      .then(response => response.json())
      .then(data => setCommunications(data));
  }, [projectId]);

  if (!project) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>{project.name}</Heading>
      <Text fontSize="lg" mb={4}>{project.description}</Text>

      <Heading as="h2" size="lg" mb={4}>Tasks</Heading>
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
          {tasks.map(task => (
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

      <Heading as="h2" size="lg" mb={4}>Team Members</Heading>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Role</Th>
            <Th>Contact</Th>
          </Tr>
        </Thead>
        <Tbody>
          {teamMembers.map(member => (
            <Tr key={member.id}>
              <Td>{member.name}</Td>
              <Td>{member.role}</Td>
              <Td>{member.contact}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Heading as="h2" size="lg" mb={4}>Milestones</Heading>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Due Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {milestones.map(milestone => (
            <Tr key={milestone.id}>
              <Td>{milestone.name}</Td>
              <Td>{milestone.description}</Td>
              <Td>{milestone.dueDate}</Td>
              <Td>{milestone.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Heading as="h2" size="lg" mb={4}>Resources</Heading>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Quantity</Th>
            <Th>Allocation Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {resources.map(resource => (
            <Tr key={resource.id}>
              <Td>{resource.type}</Td>
              <Td>{resource.quantity}</Td>
              <Td>{resource.allocationDate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Heading as="h2" size="lg" mb={4}>Communications</Heading>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>Sender</Th>
            <Th>Receiver</Th>
            <Th>Message</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {communications.map(communication => (
            <Tr key={communication.id}>
              <Td>{communication.sender}</Td>
              <Td>{communication.receiver}</Td>
              <Td>{communication.message}</Td>
              <Td>{communication.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProjectDetail;