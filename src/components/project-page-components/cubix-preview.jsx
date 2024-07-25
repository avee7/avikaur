import React from "react"
import { Box, Text, Heading, Image, Flex, Container } from '@chakra-ui/react'
import quoteImg from "../../images/quote.png"

import AalekhPreview from '../../images/aalekh-screens.png';





const CubiXPreview = () => (
  <Container maxW="1300px" py={{ base: "6rem", md: "11rem" }}>
    <Flex gap="3rem" width="100%" justifyContent="space-between" direction={{ base: 'column', md: 'row' }}>
      <Heading size={{ base: '3xl', md: '4xl' }}>Multi-Brand, <br />Multi-Mode</Heading>
      <Text size="lg" pt="1rem" maxW="600px">
      Starting with the product design for Aalekh, we built a design system which not only supports multiple modes, but also gives flexibility to add multiple brands too.
      </Text>
    </Flex>
    
    
    <Flex mt={{ base: "2rem", md: "4rem" }} direction={{ base: 'column'}}>
      
      <Box width="full" mt="2rem">
        <Image src={AalekhPreview} width="100%" borderRadius="12px" />
      </Box>
     
     
     


    </Flex>
    
    
  </Container>


);

export default CubiXPreview;
