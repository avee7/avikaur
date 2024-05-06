import React from "react"
import { Heading, Container, Flex, Button, Box, Image } from '@chakra-ui/react';
import Carousel from './carousel';
import SliderBgImage from '../images/inverted-comma.svg'
import HeadingBgImage from '../images/inverted-comma-small.svg'


const Testimonials = () => (
  <Container maxW="1300px" pb="10rem" width="100%">
    <Flex direction="row" justifyContent="space-between" width="100%" mt="6rem" position="relative">
      
      <Box width="20rem" position="relative" height="480px">
        <Heading size="xl" mb="14" pt="4%">Kind Words</Heading>
        <Image src={HeadingBgImage} maxW="100%" position="absolute" top="0" left="0"/>
      </Box>
      <Box width="40rem" overflow="hidden" position="relative" height="480px">
        <Image src={SliderBgImage} maxW="100%" position="absolute" top="0" right="0" backgroundRepeat="repeat" />
      </Box>
      <Box position="absolute" transform="translateX(-50%)" left="50%" top="20%" >
        <Carousel />
      </Box>
      
      
    </Flex>
  </Container>



);

export default Testimonials;