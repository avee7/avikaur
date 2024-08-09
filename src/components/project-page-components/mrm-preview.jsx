import React from "react"
import { Box, Text, Heading, Image, Flex, Container } from '@chakra-ui/react'



import ProductPreview from '../../images/mrm-preview.png';





const MRMPreview = () => (
  <Box pt={{ base: "4rem", md: "8rem" }}>
    <Container maxW="1300px">
      <Flex gap="3rem" width="100%" justifyContent="space-between" direction={{ base: 'column' }}>
        <Heading size={{ base: '3xl', md: '4xl' }} color="#f4f4f4">Multi-Brand, Multi-Mode</Heading>
        <Text size="lg" pt="1rem" maxW="600px" color="#f4f4f4">
          Beginning with the product design for Aalekh, we set out to develop a design system that not only supports multiple modes but also offers the flexibility to integrate multiple brands.
        </Text>
      </Flex>
      <Box mt={{base: "4rem", md: "8rem"}}>
      <Image src={ProductPreview} maxW="100%" />
    </Box>
    </Container>

    

  </Box>



);

export default MRMPreview;
