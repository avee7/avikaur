import React from 'react';
import { Container, VStack, Heading, Button } from '@chakra-ui/react';

const CVSection = () => (
  <Container maxW="1300px" pb={{ base: "7rem",  lg: "14rem"}} pt="2rem">
    <VStack justifyContent="center" alignItems="center">
      <Heading size={{base: "lg", md: "xl"}} mb={{base: "2rem", md: "3.5rem"}} textAlign="center">Dive Deeper into My Professional Journey</Heading>
      <Button
        size="sm"
        variant="outline"
        as="a"
        href="/resume.pdf" 
        download="AvinashKaur.pdf" 
      >
        Download Resume
      </Button>
    </VStack>
  </Container>
);

export default CVSection;
