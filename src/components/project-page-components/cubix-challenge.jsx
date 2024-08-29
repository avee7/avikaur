import React from "react"
import { Box, Text, Heading, Image, Flex, Container } from '@chakra-ui/react';


const CubiXChallenge = () => (
  <Container maxW="1300px" py={{ base: "5rem", md: "10rem" }}>

    <Flex gap="1rem" width="100%" justifyContent="space-between" direction={{ base: 'column' }}>
      <Heading size={{ base: '2xl', md: '3xl' }} color="#0A0911">Objective</Heading>
      <Text size="lg" maxW="600px" color="#0A0911">
      Our primary challenge was to create a flexible design system that could support multiple brands and various modes within the same brand. This required a robust framework based on design tokens, ensuring consistency and adaptability. 
      Translating this methodology into Figma and effectively communicating and then reviewing with the product and dev teams was crucial for the project's success.
      </Text>
    </Flex>

   
  </Container>


);

export default CubiXChallenge;
