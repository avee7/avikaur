import React from "react"
import { Heading, Container } from '@chakra-ui/react';
import Cards from "./cards"

const SelectedProjects = () => (
    <Container maxW="none"  pb={{ base: "5rem",  lg: "10rem"}} zIndex="9" position="relative" pt={{ base: "4rem",  lg: "7rem"}} bg={"#0A0911"} borderRadius="20px">
      <Heading maxW="1300px" width="100%" mx="auto" size='xl' mb={{base: "2rem", md: "3.5rem"}} >Selected Projects</Heading>

        <Cards />
      
      
    </Container>
    

);

export default SelectedProjects;
