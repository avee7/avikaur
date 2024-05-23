import React from 'react';
import { Box, Text, Image as ChakraImage, Container, Flex } from '@chakra-ui/react';
import { motion } from "framer-motion";
import MyImage from "../images/me.png";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionImage = motion(ChakraImage);

const AboutMe = () => {
  const containerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.3
      }
    }
  };

  return (
    <Container maxW="1300px" py={{ base: "4rem", lg: "6rem", xl: "6rem" }} borderRadius="lg">
      <Flex direction={{ base: 'column', lg: 'row' }} alignItems="flex-start">
        <MotionFlex
          direction="column"
          gap={6}
          alignItems="flex-start"
          w={{ base: "100%", lg: "70%" }}
          pt="3rem"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Flex align="center">
            <Box fontSize="2rem" mr="1rem">&#128075;</Box>
            <Text size="xl">
              Since 2017, I have been a product designer based in London. Prior to this, I dedicated five years to mastering front-end development.
            </Text>
          </Flex>

          <Flex align="center">
            <Box fontSize="2rem" mr="1rem">&#127752;</Box>
            <Text size="xl">
              I believe in elevating lives through design, emphasising usability, consistency and scalability as fundamental values that guide my work.
            </Text>
          </Flex>

          <Flex align="center">
            <Box fontSize="2rem" mr="1rem">&#128588;&#127996;</Box>
            <Text size="xl">
              I value constructive feedback as a catalyst for growth, motivating me to consistently enhance my skills.
            </Text>
          </Flex>

          <Flex align="center">
            <Box fontSize="2rem" mr="1rem">&#127775;</Box>
            <Text size="xl">
              I appreciate attention to detail and value prototyping as essential for realising ideas and guiding decisions.
            </Text>
          </Flex>

          <Flex align="center">
            <Box fontSize="2rem" mr="1rem">&#127807;</Box>
            <Text size="xl">
              Outside of work, I enjoy nature walks, painting, gardening, and meditation to nurture a focused mind.
            </Text>
          </Flex>
        </MotionFlex>

        <MotionBox w={{ base: "80%", md: "50%" }} maxW="100%">
          <MotionImage
            src={MyImage}
            maxW="100%"
            initial={{ opacity: 0, rotate: 10 }}  // Starts invisible and rotated by 10 degrees
            animate={{ opacity: 1, rotate: 0 }}  // Fades in and rotates back to 0 degrees
            transition={{
              rotate: {
                duration: 0.8,  // Duration of the rotation animation
                ease: "easeInOut",
                delay: 0.4     // Delay before starting the rotation
              },
              opacity: {
                duration: 0.8,  // Duration of the fade-in effect
                ease: "easeInOut",
                delay: 0.4      // Delay before starting the fade in
              }
            }}
          />
        </MotionBox>
      </Flex>
    </Container>
  );
};

export default AboutMe;

