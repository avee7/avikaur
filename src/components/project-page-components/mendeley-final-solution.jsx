import React, { useEffect } from 'react';
import { Box, Heading, Image, Container } from '@chakra-ui/react';
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
    <Container maxW="1300px" mt={{ base: '4rem', md: '6rem' }}>
      <Box>
      <Heading size={{ base: 'lg', md: 'xl' }} width="100%" mb="2rem">
            A Fresh, Modern Solution that Reflects Our Brand Values
          </Heading>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            ...variants,
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3, ease: 'easeInOut' } },
          }}
        >
          <Image
            src={FinalSolution}
            width="100%"
            height="auto"
            borderRadius="12px"
          />
        </motion.div>
      </Box>
    </Container>
  );
};

export default MendeleyFinalSolution;
