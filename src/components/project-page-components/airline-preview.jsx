import React from "react"
import { Box, Text, Heading, Image, Flex, Container} from '@chakra-ui/react'
import ProductPreview from '../../images/airline-product-preview.png';




const AirlinePreview = () => (
  <Box bg="#f6f6f6">
    <Container maxW="1300px" py={{ base: "4rem", md: "8rem" }}>
      
    <Flex gap="3rem" width="100%" justifyContent="space-between">
    <Heading size={{ base: '3xl', md: '4xl' }}>Unified Core, Diverse Brands</Heading>
    </Flex>
    <Flex mt={{ base: "1rem", md: "2rem" }} direction={{ base: 'column', md: 'row' }}>
      <Box width="full" maxW="800px">
        <Image src={ProductPreview} />
      </Box>
     
     
     


    </Flex>
    <Flex direction="row" gap={2} alignItems="center" justifyContent="center" mt={{base: "2rem", md: "4rem"}} maxW="800px">
        
        
        <Box p={{base: '1rem', md: '2rem'}}  borderLeft="4px solid #A6FEBA" position="relative" borderRadius="0 12px 12px 0" bg="#fff">
          <Text size={{base: "lg", md:"xl"}} mb="1rem" as="blockquote">Avi was the backbone of the Airline Neutral project. Her contributions were absolutely invaluable.
          Without her leadership and expertise, we wouldn't have achieved the seamless integration we did.</Text>
          <Heading size="sm"display="block">Rajdeep Varma, Senior QE</Heading>

        </Box>
    </Flex>

    </Container>
    
  </Box>



);

export default AirlinePreview;
