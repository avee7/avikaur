import React from 'react'
import { Stack, Box, Circle, Text, Card, Flex, Heading, Image, Container, Grid, GridItem } from '@chakra-ui/react'
import { motion } from "framer-motion";
import heroImage from '../images/hero-img-no-bg.svg';

// Create a motion component based on Chakra's Box component
const MotionCircle = motion(Box);

// const PositionedImage = () => (
//   <Box position="relative" height="200px" width="full">
//     <Image
//       src="https://example.com/image-url.jpg"
//       alt="Descriptive Alt Text"
//       position="absolute"
//       top="0"
//       left="0"
//       boxSize="100%"  // Optionally make the image fill the container
//       objectFit="cover" // Ensures the aspect ratio is maintained while filling the area
//     />
//   </Box>
// );


export const Home = () => (
 <Box>
  <Container maxW="1140px" pt="8rem" pb="10rem">
    <Grid templateColumns='repeat(2, 1fr)' gap="64px" alignItems="center">
      <GridItem colSpan={1} position="relative" pr="48px" pl="20px" pt="20px">
        <Box borderRadius="20px"
            position="absolute"
            width="100%"
            height="100%"
            top="0"
            left="0"
            background="rgba(90, 93, 159, 0.18)"
            backdropFilter="blur(20px)"
            zIndex="0"
          />
        <Image src={heroImage} alt="hero Image" maxW="100%" width="100%" zIndex="1" position='relative' / >
      </GridItem>
      <GridItem colSpan={1}>
        <Stack gap="32px" >
          <Heading size="3xl" background="linear-gradient(263deg, #bba6ff 0%, #6c63ff 100%)" backgroundClip="text">
              Hi, I’m Avi
            </Heading>
            <Text size="2xl">         
            Product Designer with a background in front-end development, focused on merging intuitive design with technical precision to craft consistent, scalable user experiences.
            </Text>
          </Stack>
      </GridItem>

    </Grid>

  </Container>

 </Box>
  
 


)