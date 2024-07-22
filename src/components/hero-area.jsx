import React from "react";
import { Flex, Box, Heading, Text, Stack } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const HeroArea = () => {
  const { scrollY } = useScroll();

  const yTransform = useTransform(scrollY, [0, 300], [0, 20]);
  const scaleTransform = useTransform(scrollY, [0, 300], [1, 0.95]);
  const opacityTransform = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <MotionFlex zIndex="1" width="100%" p={{ base: "10rem 0 4rem", lg: "16rem 0 10rem" }} m={{ base: "0 auto" }} direction="row" position="relative" gap="2rem" height="80vh" justifyContent="center">
      <MotionBox
        position="absolute" width='100%' background="rgba(90, 93, 159, 0.18)" zIndex="-1"
        backdropFilter="blur(5px)" height="100%" top="0" left="0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      <Stack direction="column" position="relative" gap="2rem" maxW="800px">
      <motion.div
        style={{ y: yTransform, scale: scaleTransform, opacity: opacityTransform, 
          // maxWidth: '1300px', 
          zIndex: '1', 
          position: 'relative', 
          // margin: '0 auto', 
          width: '100%' }}
        initial={{ y: 20, opacity: 0, visibility: 'hidden' }}
        animate={{ y: 0, opacity: 1, visibility: 'visible' }}
        transition={{ delay: 0.8, duration: 0.9 }}
      >
        
        <MotionHeading
          as="h1"
          p={{ base: "0 2rem 1rem", xl: "0 0 1rem" }}
          textAlign="center"
          size={{ base: '3xl', md: '4xl' }}
          background="linear-gradient(263deg, #bba6ff 0%, #6c63ff 100%)"
          backgroundClip="text"
        >
          Avinash Kaur
        </MotionHeading>
        {/* <Box fontSize="2rem" p={{ base: "0 0 1rem" }} float='left'>&#128075;&#127996;</Box> */}
        <MotionText position="relative" zIndex="1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.9 }}
        textAlign="center"
        size={{ base: '2xl', md: 'xl' }}
        width="100%"
        p={{ base: "0 2rem", xl: "0" }}
        mx="auto"
        
      >
        
        {/* I'm a product designer with a background in front-end development, passionate about building engaging, scalable, and purposeful digital experiences. */}
        I'm a product designer who integrates design passion with front-end development skills to craft engaging, scalable, and purposeful digital experiences.
        
      </MotionText>
      </motion.div>

      
      </Stack>
      
    </MotionFlex>
  );
};

export default HeroArea;
