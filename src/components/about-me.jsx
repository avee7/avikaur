import React from 'react';
import { Box, Text, Image as ChakraImage, Container, Flex, Heading } from '@chakra-ui/react';
import { motion } from "framer-motion";
import MyImage from "../images/about-me.jpg";

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
    <Container maxW="1300px" pt={{ base: "4rem", sm: "5rem", lg: "10rem" }} pb={{ base: "4rem", sm: "6rem", lg: "12rem" }} >
      <Flex gap="2rem" alignItems={{base: "flex-start", md: "center"}} direction={{base: 'column', md: 'row'}}>

        <Box>
          <Box mb={{ base: "2rem", md: "4rem" }}>
            <Heading size={{ base: '4xl', md: '5xl' }} maxW="1300px" width="100%" mx="auto" mb="1rem">About Me</Heading>
          </Box>

          <Flex direction={{ base: 'column', lg: 'row' }} alignItems={{ base: "center", sm: "flex-start" }} gap="6rem">
            <MotionFlex
              direction="column"
              gap="2rem"
              alignItems="flex-start"
              maxW="776px"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Flex align="center" position="relative">
                <Box fontSize="1.5rem" position="absolute" top="-4px">&#128075;</Box>
                <Text size={{ base: 'lg', md: 'xl' }} pl="2rem">
                  I'm Avi, a product designer based in London.
                </Text>
              </Flex>
              <Flex align="center" position="relative">
                <Box fontSize="1.5rem" position="absolute" top="-4px">&#127912;</Box>
                <Text size={{ base: 'lg', md: 'xl' }} pl="2rem">
                  I started my career as a front-end developer but soon realised that my true passion lies in design. Since 2017, I have been focusing on creating user-centered experiences that people love.
                </Text>
              </Flex>

              <Flex align="center" position="relative">
                <Box fontSize="1.5rem" position="absolute" top="-4px">&#127775;</Box>
                <Text size={{ base: 'lg', md: 'xl' }} pl="2rem">
                  I believe in transforming lives through design by prioritising usability, consistency, and scalability as core values in my work.
                </Text>
              </Flex>

              <Flex align="center" position="relative">
                <Box fontSize="1.5rem" position="absolute" top="-4px">&#127793;</Box>
                <Text size={{ base: 'lg', md: 'xl' }} pl="2rem">
                  I value constructive feedback as a catalyst for growth, driving me to continually enhance my skills.
                </Text>
              </Flex>



              <Flex align="center" position="relative">
                <Box fontSize="1.5rem" position="absolute" top="-4px">&#127803;</Box>
                <Text size={{ base: 'lg', md: 'xl' }} pl="2rem">
                  Beyond work, I enjoy nature walks, painting, and gardening.
                </Text>
              </Flex>
            </MotionFlex>
          </Flex>
        </Box>
        <MotionBox w={{base: "50%", md: "50%", lg: "30%"}}>
              <MotionImage
                src={MyImage}
                maxW="100%"
                margin="0 auto"
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

