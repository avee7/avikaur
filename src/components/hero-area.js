import React from "react"
import { Stack, Box, Text, Heading, Image, Container, Grid, GridItem } from '@chakra-ui/react'
import heroImage from '../images/hero-img-no-bg.svg';



const HeroArea = () => (
  
    <Container maxW="1200px" pt="8rem" pb="10rem">
    
      <Grid templateColumns='repeat(2, 1fr)' gap="64px" alignItems="center">
        {/* <GridItem colSpan={1} position="relative" pr="64px" pl="56px" pt="20px">
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
        </GridItem> */}
        <GridItem colSpan={2} p="4rem" position="relative">
          <Box position="absolute" width='100%' background="rgba(90, 93, 159, 0.18)" zIndex="0"
              backdropFilter="blur(20px)" borderRadius="12px" height="100%" top="0" left="0">

          </Box>
          <Stack gap="32px" position="relative" zIndex="1" >
            <Heading as="h1" size="4xl" background="linear-gradient(263deg, #bba6ff 0%, #6c63ff 100%)" backgroundClip="text">
                Hi, I’m Avi
              </Heading>
              <Text size="3xl">         
              Product Designer with a background in front-end development, focused on merging intuitive design with technical precision to craft consistent, scalable user experiences.
              </Text>
            </Stack>
        </GridItem>

      </Grid>

    </Container>

);

export default HeroArea;
