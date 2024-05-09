// src/components/footer.js
import React from "react"
import { Box, Text, Heading, Container, VStack, Flex, Link } from "@chakra-ui/react"

const Footer = () => (
  <Box bg="rgba(90, 93, 159, 0.18)" w="100%">
    <Container maxW="1300px" pt="4rem" pb="2rem" color="#e0e0e0">
    <Flex justifyContent="space-between" direction="row">
        <VStack direction="column" alignItems="flex-start" justifyContent="space-between" height="100%">
          <Box pb="5rem">
            
            <Heading size="xl" background="linear-gradient(263deg, #bba6ff 0%, #6c63ff 100%)" backgroundClip="text">Would like to talk?</Heading>
            <Text pt='1rem' size="xl">Happy to grab a coffee and chat :) </Text>
            <Text pt="2rem" size="xl" >avinash.kaur90@gmail.com </Text>
          </Box>
          <Box width="100%">
            <Text size="sm">© 2024 Avinash Kaur. All Rights Reserved</Text>
          </Box>
          
        </VStack>
        <VStack direction="column" alignItems="flex-start" gap="1.5rem" height="100%">
          <Link size="lg" href="/">Home</Link>
          <Link size="lg" href="/about">About</Link>
          <Link size="lg" href="/contact">Contact</Link>          
        </VStack>
        <VStack pr="2rem" direction="column" alignItems="flex-start" justifyContent="flex-start" gap="1.5rem" height="100%">
          <Link size="lg" href="#">LinkedIn</Link>
          <Link size="lg" href="#">ADPList</Link>    
          <Link size="lg" href="#">X</Link>
        </VStack>
        </Flex>
    
    </Container>
  </Box>
);

export default Footer;