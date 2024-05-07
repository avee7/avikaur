import React from "react"
import { Stack, Box, Text, Heading, Image, Container, Flex, GridItem } from '@chakra-ui/react'
import heroImage from '../images/hero-img-no-bg.svg';



const HeroArea = () => (

  <Container maxW="1300px" pt="8rem" pb="10rem">


    <Flex direction="column" px="6rem" py="6rem" position="relative" gap="1rem" width="100%">
      <Box position="absolute" width='100%' background="rgba(90, 93, 159, 0.18)" zIndex="0"
        backdropFilter="blur(20px)" borderRadius="12px" height="100%" top="0" left="0">

      </Box>
      
      <Flex zIndex="1" alignItems="center" gap="2rem" flexWrap="wrap">
        <Flex width="10rem" zIndex="1" alignItems="center" justifyContent="flex-start">
          <Image src={heroImage} alt="hero Image" maxW="100%" width="100%" pr="1rem" />
        </Flex>
        
        
        <Heading as="h1" size="4xl" background="linear-gradient(263deg, #bba6ff 0%, #6c63ff 100%)" backgroundClip="text">
          Hi, I’m Avi
        </Heading>
        

      </Flex>
      <Text size="3xl" position="relative" zIndex="1">
        Product Designer with a background in front-end development, focused on merging intuitive design with technical precision to craft consistent, scalable user experiences.
      </Text>
      
     
      
    </Flex>



  </Container>

);

export default HeroArea;
