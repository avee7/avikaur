import React from "react";
import { Flex, Box, Heading, Text, Stack, Image } from '@chakra-ui/react';
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

       {/* <Box position="absolute" width="100%" maxW={{base: "700px", lg: "1000px"}} 
      top="50%"
      
      left= "50%"
      
      transform= "translate(-50%, -50%)"
      >
        <Image src={HeroBg} maxW={{base: '100%', md: '100%'}} /> 
      </Box>  */}


      <MotionFlex
        zIndex="1"
        width="100%"
        position="relative"
        justifyContent="center"
      >


        <Stack direction="column" position="relative" gap="2rem" maxW={{base: "660px", lg:"900px"}}>

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


