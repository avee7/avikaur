import React from "react"
import { Stack, Box, Text, Heading, Image, Container, VStack } from '@chakra-ui/react';
import Cards from "./cards"

const SelectedProjects = () => (
    <Container maxW="1300px" pb="10rem">
      <Heading size="xl" mb={14}>Selected Projects</Heading>

        <Cards />
      
      
    </Container>
    

);

export default SelectedProjects;
