import React from 'react'
import { Stack, Box, Circle, Text, Card, Flex } from '@chakra-ui/react'
import { motion } from "framer-motion";

// Create a motion component based on Chakra's Box component
const MotionCircle = motion(Box);


export const Home = () => (


  <Stack width="100%" pt="10rem" pb="20rem">
    <Flex className='hero-content' direction="row" justify="flex-start" align="center" gap="64px" maxW="1140px" mx="auto">
      <Box position={"relative"}>
        <Box
          borderRadius="20px"
          width="500px"
          height="398px"
          maxWidth="100%"
          background="rgba(90, 93, 159, 0.18)"
          backdropFilter="blur(20px)"
        />
      </Box>
      <Stack
        justify="center"
        align="flex-start"
        spacing="32px"
        maxWidth="100%"
      >
        <Text
          fontFamily="Poppins"
          lineHeight="1.03"
          fontWeight="semibold"
          fontSize="64px"
          background="linear-gradient(263deg, #bba6ff 0%, #6c63ff 100%)"
          backgroundClip="text"
          alignSelf="stretch"
        >
          Hi, I’m Avi
        </Text>
        <Text
          fontFamily="Inter"
          lineHeight="1.5"
          fontWeight="regular"
          fontSize="24px"
          color="#E0E0E0"
          alignSelf="stretch"
        >
          Product Designer with a background in front-end development, focused
          on merging intuitive design with technical precision to craft
          consistent, scalable user experiences.
        </Text>
      </Stack>
    </Flex>
  </Stack>


)

