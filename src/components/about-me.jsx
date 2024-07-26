import React from 'react';
import { Box, Text, Image as ChakraImage, Container, Flex, Heading } from '@chakra-ui/react';
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
    <Container maxW="1300px" pt={{ base: "4rem", lg: "7.5rem" }} pb={{ base: "6rem", lg: "12rem" }} >
      <Box mb={{base: "2rem", md: "4rem"}}>
      <Heading size={{base: '3xl', md: '4xl'}}  maxW="1300px" width="100%" mx="auto" mb="1rem">About Me</Heading>
      <Text size={{base: '2xl', md: '3xl'}} mb="1rem"> Product designer based in London.</Text>
     

      </Box>
     
      <Flex direction={{ base: 'column', lg: 'row' }} alignItems={{base: "center", sm: "flex-start"}} gap="6rem">
        <MotionFlex
          direction="column"
          gap="2rem"
          alignItems="flex-start"
          w={{ base: "100%", lg: "70%" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Flex align="flex-start">
            <Box fontSize="2rem" mr="1rem">&#127912;</Box>
            <Text size={{base: 'xl', md: '2xl'}}>
            I started my career as a front-end developer but soon realised my true passion lies in design. Since 2017, I have been focusing on designing user-centered experiences that people love.
            </Text>
          </Flex>

          <Flex align="flex-start">
            <Box fontSize="2rem" mr="1rem">&#127775;</Box>
            <Text size={{base: 'xl', md: '2xl'}}>
            I believe in transforming lives through design by prioritising usability, consistency, and scalability as core values in my work.
            </Text>
          </Flex>

          <Flex align="flex-start">
            <Box fontSize="2rem" mr="1rem">&#127793;</Box>
            <Text size={{base: 'xl', md: '2xl'}}>
            I value constructive feedback as a catalyst for growth, driving me to continually enhance my skills.
            </Text>
          </Flex>

          {/* <Flex align="flex-start">
            <Box fontSize="2rem" mr="1rem">&#127775;</Box>
            <Text size="2xl">
              I appreciate attention to detail and value prototyping as essential for realising ideas and guiding decisions.
            </Text>
          </Flex> */}

          <Flex align="flex-start">
            <Box fontSize="1.8rem" mr="1rem">&#127803;</Box>
            <Text size={{base: 'xl', md: '2xl'}}>
            Beyond work, I enjoy nature walks, painting, and gardening.
            </Text>
          </Flex>
        </MotionFlex>

        <MotionBox w={{ base: "80%", md: "30%" }}>
          <MotionImage
            src={MyImage}
            maxW="300px"
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

