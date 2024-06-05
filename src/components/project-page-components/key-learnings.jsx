import React from 'react';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';

function KeyLearnings() {
  return (
    <Box mt={{ base: "3rem",  md: "6rem"}}  mb="8rem">
      <Heading size={{base: 'xl', md: '2xl'}} mb={{base: "2rem", md: "4rem"}}>
        Key Learnings
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}  // Adjusts columns based on the screen size
        gap={5}
        justifyItems="center"
      >
        {/* Early and Iterative Feedback Card */}
        <Box maxW="640px" w="full" border="1px solid rgba(90, 93, 159, 0.8)" borderRadius="12px" p={5}>
          <Heading size="md" mb={3}>
            Early and Iterative Feedback
          </Heading>
          <Text size="lg" mt={2}>
            By incorporating user feedback early in the design process during the concept testing phase, we were able to gather valuable insights that shaped the direction and effectiveness of our design solutions.
          </Text>
        </Box>

        {/* Importance of Adequate Response Time Card */}
        {/* <Box maxW="640px" w="full" border="1px solid rgba(90, 93, 159, 0.8)" borderRadius="12px" p={5}>
          <Heading size="md" mb={3}>
            Importance of Adequate Response Time in User Research
          </Heading>
          <Text size="lg" mt={2}>
            One area that highlighted a need for 
            improvement was our timeline for gathering user responses for unmoderated user testing using Ballpark.
            The responses were fewer than anticipated, which suggested a need for extended timelines to ensure sufficient user participation.
          </Text>
        </Box> */}

        {/* Critical Role of Team Communication Card */}
        <Box maxW="640px" w="full" border="1px solid rgba(90, 93, 159, 0.8)" borderRadius="12px" p={5}>
          <Heading size="md" mb={3}>
            Critical Role of Team Communication
          </Heading>
          <Text size="lg" mt={2}>
          Effective and ongoing communication was crucial for the project's success. 
          By keeping communication channels open, we aligned our goals, understood each team's challenges, 
          and ensured unity. This approach streamlined our workflow, reduced misunderstandings, 
          and minimised delays throughout the project lifecycle.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default KeyLearnings;

