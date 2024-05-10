import React from 'react';
import { Container, VStack, Heading, Button } from '@chakra-ui/react';

const CVSection = () => (
  <Container maxW="1300px" pb="14rem" pt="2rem">
    <VStack justifyContent="center" alignItems="center">
      <Heading size="xl" mb={14}>Dive Deeper into My Professional Journey</Heading>
      <Button
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
