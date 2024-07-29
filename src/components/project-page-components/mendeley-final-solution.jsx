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

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
  };

  return (
    <Container maxW="1400px" py={{ base: "4rem", md: "8rem" }}>
      <Flex direction="column" gap={{ base: "3rem", md: "6rem" }} alignItems="center">
        <Heading size={{ base: '2xl', md: '3xl' }} maxW="800px" width="100%" color="#f4f4f4" textAlign="center">
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
