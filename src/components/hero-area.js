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
    <MotionFlex zIndex="1" maxW="1300px" mt="8rem" mb="10rem"  mx={{ base: "24px", xl: "auto" }} direction="column" px={{ base: "2rem", xl: "6rem" }} pb="6rem" pt="4rem" position="relative" gap="2rem">
      <MotionBox
        position="absolute" width='100%' background="rgba(90, 93, 159, 0.18)" zIndex="0"
        backdropFilter="blur(5px)" borderRadius="12px" height="100%" top="0" left="0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      
      <MotionFlex zIndex="1" alignItems="center" gap="1rem" flexWrap="wrap">
        {/* <MotionFlex width="15%" display={{base: "none", md: "inline-block"}} zIndex="1" alignItems="center" justifyContent="flex-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <MotionImage src={heroImage} alt="Hero Image" maxW="100%" width="100%" pr="2rem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
        </MotionFlex> */}
        
        <MotionHeading as="h1"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Heading size="4xl" background="linear-gradient(263deg, #bba6ff 0%, #6c63ff 100%)" backgroundClip="text">Hi, I’m Avi</Heading>
        </MotionHeading>
      </MotionFlex>
      
      <MotionText position="relative" zIndex="1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.5 }}
      >
        <Text size="3xl">
        Product Designer with a background in front-end development, focused on merging intuitive design with technical precision to craft consistent, scalable user experiences.
        </Text>
      </MotionText>
    </MotionFlex>
  );
};

export default HeroArea;