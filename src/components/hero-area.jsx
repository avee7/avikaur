import React from "react";
import { Flex, Box, Heading, Text, Stack, Image } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CodeIcon from "../images/browser.png"
import DesignIcon from "../images/color-palette.png"

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
    <Box zIndex="1" width="100%" m={{ base: "0 auto" }} position="relative" pb={{base: '0', lg:"0rem"}}>
      {/* <MotionBox
        position="absolute" width='100%' 
        zIndex="-1"
        backdropFilter="blur(3px)" 
        height="100%" 
        top="0" 
        left="0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      /> */}

      <Box position="absolute" width={{base: "90%", lg: "920px", xl: "1200px"}} 
      // top="50%"
      bottom="-4rem"  
      left= "50%"
      transform= "translateX(-50%)"
      // transform= "translate(-50%, -50%)"
      >
        <Box
          position="absolute"
          width={{base: '56px', md: '56px'}} 
          height={{base: '56px', md: '56px'}} 
          left={{base: '-10px', md: '-10px'}}
          top={{base: '-28px', md: '-28px'}}
          bg="radial-gradient(rgba(246, 255,248, 0.6) 0%, rgba(246, 255,248, 0) 80%)"
          zIndex="0"
          borderRadius="9999px"
          backdropFilter="blur(5px)"
           >
          {/* <Box position="absolute"
            width="80px" height="80px"
            bg="transparent"
            filter="blur(10px)"
          /> */}
          <Image src={DesignIcon} maxW={{base: '40px', md: '56px'}}  />
        </Box>
        <Box position="absolute" width="100%" height="2px" bg="#97E8A9" top="0" zIndex="-1">
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "-10px",
              width: "12px",
              height: "5px",
              borderRadius: "50%",
              boxShadow: "0 0 20px 2px rgba(209, 207, 255, 1)",
              background: "rgb(227, 255, 234)",
              transform: "translateY(-50%)",
              filter: "blur(2px)"
            }}
            initial={{ left: "calc(0% - 10px)" }}
            animate={{
              left: ["calc(0% - 10px)", "calc(100% + 10px)", "calc(0% - 10px)"],
            }}
            transition={{
              delay: 1,
              duration: 8,
              ease: 'easeInOut',

              repeat: Infinity,
              repeatDelay: 0
            }}
          />

        </Box>
        <Box
          position="absolute"
          width={{base: '60px', md: '60px'}} 
          height={{base: '60px', md: '60px'}} 
          right={{base: '-10px', md: '-20px'}}
          top={{base: '-28px', md: '-28px'}}
          bg="radial-gradient(rgba(246, 255,248, 0.6) 0%, rgba(246, 255,248, 0) 80%)"
         
          zIndex="0"
          borderRadius="9999px"
          backdropFilter="blur(5px)" >
          <Image src={CodeIcon} maxW={{base: '40px', md: '56px'}} />
        </Box>
      </Box>


      <MotionFlex
        zIndex="1"
        width="100%"
        position="relative"
        justifyContent="center"
      >


        <Stack direction="column" position="relative" gap="2rem" maxW={{base: "570px", lg:"900px"}}>

          <motion.div
            style={{
              y: yTransform, scale: scaleTransform, opacity: opacityTransform,
              zIndex: '1',
              position: 'relative',
              width: '100%'
            }}
            initial={{ y: 20, opacity: 0, visibility: 'hidden' }}
            animate={{ y: 0, opacity: 1, visibility: 'visible' }}
            transition={{ delay: 0.8, duration: 0.9 }}
            background="rgba(10,9,16,0.5)"
          backdropFilter="blur(10px)"
          >

            <MotionHeading
              as="h1"
              p={{ base: "0 2rem 1rem", xl: "0 0 1.25rem" }}
              textAlign="center"
              size={{ base: '5xl', lg: '6xl' }}
              // color="#f4f4f4"
              // mt={{base: '0', lg: '2rem'}}
              // color="#6c63ff"
              color="#0A0911"
              // background="linear-gradient(263deg,#6c63ff  0%, #8982ff 100%)"
              // backgroundClip="text"
            >
              Avinash Kaur
            </MotionHeading>
           
            <MotionText position="relative" zIndex="1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.9 }}
              textAlign="center"
              size={{ base: 'xl', lg: '3xl' }}
              width="100%"
              p={{ base: "0 2rem", xl: "0" }}
              mx="auto"
              color="#0A0911"
              
              // color="#e0e0e0"

            >

              {/* I'm a product designer with a background in front-end development, passionate about building engaging, scalable, and purposeful digital experiences. */}
              I'm a product designer who blends design passion with front-end development skills to craft engaging, scalable digital experiences.
              {/* I'm a product designer focused on merging creative and technical skills to craft user-focused, scalable digital experiences. */}
            </MotionText>
          </motion.div>


        </Stack>

      </MotionFlex>

    </Box>

  );
};

export default HeroArea;


