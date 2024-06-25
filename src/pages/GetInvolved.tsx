import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button, Input, Textarea, FormControl, FormLabel, Select, Flex, useToast } from "@chakra-ui/react";
import { useUsers, useAddVolunteerOpportunity, useUpdateVolunteerOpportunity, useDeleteVolunteerOpportunity, useVolunteerOpportunities, useAddTestimonial, useUpdateTestimonial, useDeleteTestimonial, useTestimonials } from "../integrations/supabase/index.js";

const GetInvolved: React.FC = () => {
  const toast = useToast();
  const { data: users, isLoading: usersLoading, error: usersError } = useUsers();
  const { data: volunteerOpportunities, isLoading: volunteerOpportunitiesLoading, error: volunteerOpportunitiesError } = useVolunteerOpportunities();
  const { data: testimonials, isLoading: testimonialsLoading, error: testimonialsError } = useTestimonials();

  const addVolunteerOpportunity = useAddVolunteerOpportunity();
  const updateVolunteerOpportunity = useUpdateVolunteerOpportunity();
  const deleteVolunteerOpportunity = useDeleteVolunteerOpportunity();

  const addTestimonial = useAddTestimonial();
  const updateTestimonial = useUpdateTestimonial();
  const deleteTestimonial = useDeleteTestimonial();

  const [volunteerForm, setVolunteerForm] = useState({ id: null, name: "", description: "", user_id: "" });
  const [testimonialForm, setTestimonialForm] = useState({ id: null, content: "", user_id: "" });

  const handleVolunteerFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVolunteerForm({ ...volunteerForm, [name]: value });
  };

  const handleTestimonialFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTestimonialForm({ ...testimonialForm, [name]: value });
  };

  const handleVolunteerFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (volunteerForm.id) {
      await updateVolunteerOpportunity.mutateAsync(volunteerForm);
      toast({ title: "Volunteer opportunity updated.", status: "success" });
    } else {
      await addVolunteerOpportunity.mutateAsync(volunteerForm);
      toast({ title: "Volunteer opportunity added.", status: "success" });
    }
    setVolunteerForm({ id: null, name: "", description: "", user_id: "" });
  };

  const handleTestimonialFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (testimonialForm.id) {
      await updateTestimonial.mutateAsync(testimonialForm);
      toast({ title: "Testimonial updated.", status: "success" });
    } else {
      await addTestimonial.mutateAsync(testimonialForm);
      toast({ title: "Testimonial added.", status: "success" });
    }
    setTestimonialForm({ id: null, content: "", user_id: "" });
  };

  const handleVolunteerEdit = (volunteer: any) => {
    setVolunteerForm(volunteer);
  };

  const handleTestimonialEdit = (testimonial: any) => {
    setTestimonialForm(testimonial);
  };

  const handleVolunteerDelete = async (id: string) => {
    await deleteVolunteerOpportunity.mutateAsync(id);
    toast({ title: "Volunteer opportunity deleted.", status: "success" });
  };

  const handleTestimonialDelete = async (id: string) => {
    await deleteTestimonial.mutateAsync(id);
    toast({ title: "Testimonial deleted.", status: "success" });
  };

  if (usersLoading || volunteerOpportunitiesLoading || testimonialsLoading) {
    return <Text>Loading...</Text>;
  }

  if (usersError || volunteerOpportunitiesError || testimonialsError) {
    return <Text>Error loading data.</Text>;
  }

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
            {volunteerOpportunities.map((volunteer: any) => (
              <Box key={volunteer.id} p={4} shadow="md" borderWidth="1px">
                <Heading as="h4" size="md">{volunteer.name}</Heading>
                <Text mt={2}>{volunteer.description}</Text>
                <Button mt={2} colorScheme="teal" onClick={() => handleVolunteerEdit(volunteer)}>Edit</Button>
                <Button mt={2} colorScheme="red" onClick={() => handleVolunteerDelete(volunteer.id)}>Delete</Button>
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>

      {/* Volunteer Application Form */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Apply to Volunteer</Heading>
        <Box maxW="600px" mx="auto" as="form" onSubmit={handleVolunteerFormSubmit}>
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={volunteerForm.name} onChange={handleVolunteerFormChange} placeholder="Your Name" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Description</FormLabel>
            <Textarea name="description" value={volunteerForm.description} onChange={handleVolunteerFormChange} placeholder="Why do you want to volunteer?" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>User</FormLabel>
            <Select name="user_id" value={volunteerForm.user_id} onChange={handleVolunteerFormChange} placeholder="Select user">
              {users.map((user: any) => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </Select>
          </FormControl>
          <Button colorScheme="teal" width="full" type="submit">Submit Application</Button>
        </Box>
      </Box>

      {/* Testimonials */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Volunteer Testimonials</Heading>
        <Flex justify="center" wrap="wrap">
          {testimonials.map((testimonial: any) => (
            <Box key={testimonial.id} maxW="300px" m={4} textAlign="center">
              <Text mt={2} fontWeight="bold">{users.find((user: any) => user.id === testimonial.user_id)?.name}</Text>
              <Text>"{testimonial.content}"</Text>
              <Button mt={2} colorScheme="teal" onClick={() => handleTestimonialEdit(testimonial)}>Edit</Button>
              <Button mt={2} colorScheme="red" onClick={() => handleTestimonialDelete(testimonial.id)}>Delete</Button>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Testimonial Form */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Add Testimonial</Heading>
        <Box maxW="600px" mx="auto" as="form" onSubmit={handleTestimonialFormSubmit}>
          <FormControl mb={4}>
            <FormLabel>Content</FormLabel>
            <Textarea name="content" value={testimonialForm.content} onChange={handleTestimonialFormChange} placeholder="Your Testimonial" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>User</FormLabel>
            <Select name="user_id" value={testimonialForm.user_id} onChange={handleTestimonialFormChange} placeholder="Select user">
              {users.map((user: any) => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </Select>
          </FormControl>
          <Button colorScheme="teal" width="full" type="submit">Submit Testimonial</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInvolved;