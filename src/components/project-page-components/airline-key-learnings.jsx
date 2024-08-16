import React from 'react';
import { Box, Grid, Heading, Text, Stack, Container } from '@chakra-ui/react';

function AirlineKeyLearnings() {
  return (
    <Box pb={{ base: "6rem", md: "8rem" }}>

      <Box bg="#0A0911" width="100%" py={{ base: "4rem", md: "8rem" }}>
      <Container maxW="1300px">
        <Heading size={{ base: '3xl', md: '4xl' }} mx="auto" color="#f4f4f4"> Key Learnings</Heading>
        </Container>

      </Box>

      <Container maxW="1300px" pt="6rem">
        <Stack
          direction="column"
          gap={{base: "2rem", md: "4rem"}}
          justifyItems="center"
          maxW="660px"
          // mx="auto"
        >

          <Box>
            <Heading size="lg" mb={{base: "1rem", md: "2rem"}}>
              Effective Communication Across Time Zones
            </Heading>
            <Text size="lg">
              Working with teams in Atlanta, London, and Gurgaon taught me the importance of clear,
              consistent communication and meticulous scheduling across time zones. Regular updates and asynchronous tools were essential for keeping everyone aligned and productive.</Text>
          </Box>



          <Box>
            <Heading size="lg" mb={{base: "1rem", md: "2rem"}}>
              Cross-Platform Design Understanding
            </Heading>
            <Text size="lg">
              Developing for Android, iOS, and mobile web revealed each platform's unique challenges and strengths. This experience enhanced my ability to create adaptive design systems.</Text>
          </Box>
          <Box>
            <Heading size="lg" mb={{base: "1rem", md: "2rem"}}>
              Collaborative Implementation and Iterative Feedback
            </Heading>
            <Text size="lg">
              Leading mobile web UI development and collaborating with iOS and Android teams taught me the importance of cross-functional teamwork and a unified design vision. Iterative feedback through multiple review rounds ensured we delivered robust, user-centered solutions across platforms.</Text>
          </Box>
        </Stack>

      </Container>


    </Box>
  );
}

export default AirlineKeyLearnings;

