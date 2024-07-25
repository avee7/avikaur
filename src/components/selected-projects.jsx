import React from "react"
import { Heading, Container } from '@chakra-ui/react';
import Cards from "./cards"

const SelectedProjects = () => (
    <Container maxW="none"  py={{ base: "4rem",  lg: "7rem"}} zIndex="9" position="relative"  bg={"#fff"} borderRadius="20px 20px 0 0">
      {/* <Heading maxW="1300px" width="100%" mx="auto" size='xl' mb={{base: "2rem", md: "3.5rem"}} >Selected Projects</Heading> */}

        <Cards />
      
      
    </Container>
    

);

export default SelectedProjects;
