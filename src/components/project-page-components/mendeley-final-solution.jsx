import React, { useEffect } from 'react';
import { Box, Heading, Image, Container, Flex } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FinalSolution from '../../images/mendeley-final-solution_50.jpg';

const MendeleyFinalSolution = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);


  return (
    <Container maxW="1400px" pb={{ base: "4rem", md: "8rem" }} pt={{ base: "4rem", md: "8rem" }}>
      <Flex direction="column" gap={{ base: "1.5rem", md: "3rem" }}>
        <Heading size={{ base: '2xl', md: '3xl' }} width="100%" align="center">
          A Fresh, Modern Look that Reflects Our Brand Values
        </Heading>
        <Image
          src={FinalSolution}
          width="100%"
          height="auto"
          borderRadius="12px"
        />

      </Flex>




    </Container>
  );
};

export default MendeleyFinalSolution;
