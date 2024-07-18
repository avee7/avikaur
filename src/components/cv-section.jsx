import React from 'react';
import { Container, VStack, Heading, Button } from '@chakra-ui/react';

const CVSection = () => (
  <Container pb={{ base: "7rem",  lg: "14rem"}} pt="2rem" bg={"#0A0911"} zIndex="9" position="relative" maxW="none">
    <VStack justifyContent="center" alignItems="center">
      <Heading maxW="1300px" width="100%" mx="auto" size={{base: "lg", md: "xl"}} mb={{base: "2rem", md: "3.5rem"}} textAlign="center">Dive Deeper into My Professional Journey</Heading>
      <Button
        size="sm"
        variant="outline"
        as="a"
        href="/AvinashKaurUX.pdf" 
        download="AvinashKaurUX.pdf" 
      >
        Download Resume
      </Button>
    </VStack>
  </Container>
);

export default CVSection;
