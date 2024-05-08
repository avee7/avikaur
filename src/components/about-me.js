import React from 'react';
import { Box, Text, VStack, Heading, Icon, Container, Flex } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Container maxW="1300px" py="10rem" borderRadius="lg">
      <Flex direction="column" gap={4} alignItems="flex-start" maxW={{base: "100%", lg:"60%"}}>
        {/* <Heading size="2xl">&#128075; About Me</Heading> */}
        <Flex align="center">
          <Box fontSize="1.5rem" mr="1rem">&#128075;</Box>
          <Text size="lg">
            I'm a product designer based in London passionate about building intuitive user interfaces that are scalable and consistent.
          </Text>
        </Flex>

        <Flex align="center">
          <Box fontSize="1.5rem" mr="1rem">&#127752;</Box>
          <Text size="lg">
          I believe in elevating lives through design, with a focus on consistency, scalability, and reusability as core values shaping my work and approach.
          </Text>
        </Flex>

        <Flex align="center">
          <Box fontSize="1.5rem" mr="1rem">&#128588;&#127996;</Box>
          <Text size="lg">
          I value constructive feedback as a catalyst for growth, inspiring me to continually expand my skillset.
          </Text>
        </Flex>

        <Flex align="center">
          <Box fontSize="1.5rem" mr="1rem">&#127775;</Box>
          <Text size="lg">
          I appreciate attention to detail and recognize prototyping as a vital skill that brings ideas to life and informs decision-making.
          </Text>
        </Flex>

        <Flex align="center">
          <Box fontSize="1.5rem" mr="1rem">&#128187;</Box>
          <Text size="lg">
          Drawing from my development background, I possess a natural inclination for designing reusable components.
          </Text>
        </Flex>

        <Flex align="center">
          <Box fontSize="1.5rem" mr="1rem">&#127807;</Box>
          <Text size="lg">
          Outside of work, I enjoy nature walks, painting, gardening, and meditation to nurture a focused mind.
          </Text>
        </Flex>
       
       
       
       
      </Flex>
    </Container>
  );
};

export default AboutMe;
