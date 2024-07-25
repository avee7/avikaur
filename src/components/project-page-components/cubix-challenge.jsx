import React from "react"
import { Box, Text, Heading, Image, Flex, Container } from '@chakra-ui/react'
import quoteImg from "../../images/quote.png"
// import ProductPreview from '../../images/cubix-ds.png';




const CubiXChallenge = () => (
  <Container maxW="1300px" py={{ base: "7.5rem", md: "15rem" }}>

    <Flex gap="1rem" width="100%" justifyContent="space-between" direction={{ base: 'column' }}>
      <Heading size={{ base: '3xl', md: '4xl' }}>The Challenge</Heading>
      <Text size="lg" maxW="600px">
      We wanted to build a flexible design system that not only supports multiple brands, but also has the power to
        support multiple modes within the same brand. Based on design tokens, I started mapping down the plan. The challenge was to translate this
        methodology in Figma and communicate it to the product and dev team.
      </Text>
    </Flex>

   
  </Container>


);

export default CubiXChallenge;
