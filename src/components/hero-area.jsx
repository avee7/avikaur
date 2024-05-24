import React from "react";
import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import heroImage from '../images/hero-img-no-bg.svg'; // Update with your path

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const HeroArea = () => {
  return (
    <MotionFlex zIndex="1" maxW="1300px" mt={{ base: "4rem",  lg: "8rem"}} mb={{ base: "5rem",  lg: "10rem"}} mx={{ base: "24px", md: "48px", xl: "auto" }} direction="column" px={{ base: "2rem", xl: "6rem" }} pb={{ base: "3rem", xl: "6rem" }} pt={{ base: "2rem", xl: "4rem" }} position="relative" gap="2rem">
      <MotionBox
        position="absolute" width='100%' background="rgba(90, 93, 159, 0.18)" zIndex="0"
        backdropFilter="blur(5px)" borderRadius="12px" height="100%" top="0" left="0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      
      <MotionFlex zIndex="1" alignItems="center" gap={{base: "0.5rem", md: "1rem"}} flexWrap="wrap">
        
        <MotionHeading as="h1"
          initial={{ y: 20, opacity: 0, visibility: 'hidden' }}
          animate={{ y: 0, opacity: 1, visibility: 'visible' }}
          transition={{ delay: 0.8, duration: 0.5 }}
          size={{ base: '2xl', md: '4xl' }} background="linear-gradient(263deg, #bba6ff 0%, #6c63ff 100%)" backgroundClip="text"
        >
          Hi, I’m Avi
        </MotionHeading>
      </MotionFlex>
      
      <MotionText position="relative" zIndex="1"        
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.5 }}
        size={{ base: '2xl', md: '3xl' }}
      >
        Product Designer with a background in front-end development, focused on merging intuitive design with technical precision to craft consistent, scalable user experiences.
      </MotionText>
    </MotionFlex>
  );
};

export default HeroArea;