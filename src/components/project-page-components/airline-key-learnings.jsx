import React from 'react';
import { Box, Grid, Heading, Text, Stack } from '@chakra-ui/react';

function AirlineKeyLearnings() {
  return (
    <Box mt={{ base: "3rem",  md: "6rem"}}  mb={{ base: "6rem",  md: "10rem"}}>
      <Heading size={{base: 'xl', md: '2xl'}} mb={{base: "2rem", md: "4rem"}}>
        Key Learnings
      </Heading>
      <Stack
        direction="column"
        gap={5}
        justifyItems="center"
      >
        
        <Box maxW="800px" w="full" p="1.5rem" borderRadius="8px" bg="#1a1a1a">
          <Heading size="md" mb={3}>
          Effective Communication Across Time Zones
          </Heading>
          <Text size="lg" mt={2}>
          Working with teams in Atlanta, London, and Gurgaon taught me the importance of clear, 
          consistent communication and meticulous scheduling across time zones. Regular updates and asynchronous tools were essential for keeping everyone aligned and productive.</Text>
        </Box>

        
        
        <Box maxW="800px" w="full" p="1.5rem" borderRadius="8px" bg="#1a1a1a">
          <Heading size="md" mb={3}>
          Cross-Platform Design Understanding
          </Heading>
          <Text size="lg" mt={2}>
          Developing for Android, iOS, and mobile web revealed each platform's unique challenges and strengths. This experience enhanced my ability to create adaptive design systems.</Text>
        </Box>
        <Box maxW="800px" w="full" p="1.5rem" borderRadius="8px" bg="#1a1a1a">
          <Heading size="md" mb={3}>
          Collaborative Implementation and Iterative Feedback
          </Heading>
          <Text size="lg" mt={2}>
          Leading mobile web UI development and collaborating with iOS and Android teams taught me the importance of cross-functional teamwork and a unified design vision. Iterative feedback through multiple review rounds ensured we delivered robust, user-centered solutions across platforms.</Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default AirlineKeyLearnings;

