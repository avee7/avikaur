import React from 'react';
import { Box, Heading, Text, Container, Flex } from '@chakra-ui/react';

function KeyLearnings() {
  return (
    <Container maxW="1300px" pt={{ base: "3rem",  md: "8rem"}} pb={{ base: "6rem",  md: "12rem"}} >
      <Heading size={{base: '2xl', md: '3xl'}} mb={{base: "2rem", md: "4rem"}}>
        Key Learnings
      </Heading>
      <Flex direction={{base: "column" , md: "row"}} gap={{base: "1rem", md: "2rem"}}>
        {/* Early and Iterative Feedback Card */}
        <Box maxW="640px" w="full"  borderRadius="12px">
        <Heading size={{ base: 'lg', md: 'xl' }}>Early and Iterative Feedback</Heading>
         
          <Text size="lg" mt="2rem">
            By incorporating user feedback early in the design process during the concept testing phase, we were able to gather valuable insights that shaped the direction and effectiveness of our design solutions.
          </Text>
        </Box>

       

        {/* Critical Role of Team Communication Card */}
        <Box maxW="640px" w="full"  borderRadius="12px">
        <Heading size={{ base: 'lg', md: 'xl' }}>Critical Role of Team Communication</Heading>
          
          <Text size="lg" mt="2rem">
          Effective and ongoing communication was crucial for the project's success. 
          By keeping communication channels open, we aligned our goals, understood each team's challenges, 
          and ensured unity. This approach streamlined our workflow, reduced misunderstandings, 
          and minimised delays throughout the project lifecycle.
          </Text>
        </Box>
        </Flex>
    </Container>
  );
}

export default KeyLearnings;

