import React from "react";
import { Flex, Box, Heading, Text, Stack, Image, Container } from '@chakra-ui/react';
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
    <Container zIndex="1" width="100%" m={{ base: "0 auto" }} position="relative" pb={{ base: '0', lg: "0rem" }} maxW="none">



      <MotionFlex
        zIndex="1"
        width="100%"
        position="relative"
        justifyContent="center"
      >
        <Container maxW="1300px">
          <Stack direction="column" position="relative" gap="2rem" maxW={{ base: "100%", lg: "1300" }} mt={{ base: "2rem", lg: "10rem" }}>

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

                size={{ base: '2xl', md: '3xl', lg: '4xl' }}
                color="#0A0911"

              >
                I'm a product designer focused on creating scalable, engaging digital experiences.
              </MotionHeading>

              <MotionText position="relative" zIndex="1"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.25, duration: 0.9 }}
                size={{ base: 'lg', md: 'xl' }}
                width="100%"
                p={{ base: "0 2rem", xl: "0" }}

                color="#0A0911"


              >


                With a background in front-end development, I design solutions that merge functionality with aesthetics.
              </MotionText>
            </motion.div>


          </Stack>

        </Container>



      </MotionFlex>

    </Container>

  );
};

export default HeroArea;


