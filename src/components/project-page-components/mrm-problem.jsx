import React from "react"
import { Box, Text, Heading, Image, Flex, Container } from '@chakra-ui/react'




const MRMProblem = () => (
  <Container maxW="1300px" py={{ base: "4rem", md: "8rem" }}>

    <Flex gap="1rem" width="100%" justifyContent="space-between" direction={{ base: 'column' }} maxW="660px">
    <Text size="md" color="#7B7A7E" textTransform="uppercase" >Defining the problem</Text>
      <Text size={{ base: '4xl', md: '5xl' }} color="#0A0911">The Impact of Duplicates on Researchers' Workflow</Text>
      <Text size="lg" color="#0A0911">
      Managing duplicates remains a significant challenge for the researchers worldwide. Duplicate references can clutter researchers' libraries, making it time-consuming and frustrating to locate and remove redundant entries. This not only hampers their productivity but also impacts the accuracy and quality of their work.</Text>
    </Flex>

   
  </Container>


);

export default MRMProblem;
