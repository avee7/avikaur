import React from 'react';
import { Container, VStack, Heading, Button } from '@chakra-ui/react';

const CVSection = () => (
  <Container py={{ base: "7rem",  lg: "14rem"}} zIndex="9" position="relative" maxW="none">
    <VStack justifyContent="center" alignItems="center">
      {/* <Heading maxW="1300px" width="100%" mx="auto" size={{base: "lg", md: "xl"}} mb={{base: "2rem", md: "3.5rem"}} textAlign="center">Dive Deeper into My Professional Journey</Heading> */}
      <Heading width="100%" mx="auto" size={{base: '2xl', md: '3xl'}} mb={{base: "1rem", md:"2rem"}} textAlign="center">Dive Deeper into My Professional Journey</Heading>
      <Button
        size="sm"
        variant="outline"
        as="a"
        href="/AvinashKaurUX.pdf" 
        download="AvinashKaurUX.pdf" 
      >
        Download Résumé
      </Button>
    </VStack>
  </Container>
);

export default CVSection;
