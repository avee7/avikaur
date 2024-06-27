import React from "react"
import { Box, Text, Heading, Image, Flex, VStack } from '@chakra-ui/react'
import quoteImg from "../../images/quote.png"
// import DeltaMainImg from '../../images/delta-main.png';
import ProductPreview from '../../images/airline-product-preview.png';




const AirlinePreview = () => (
  <Box>
    <Flex gap="3rem" pt={{ base: "6rem", md: "10rem" }} width="100%" justifyContent="space-between">
      <Heading size={{ base: 'xl', md: '2xl' }}>One app, Two brands</Heading>
    </Flex>
    <Flex mt={{ base: "2rem", md: "4rem" }} direction={{ base: 'column', md: 'row' }}>
      <Box width="full" maxW="">
        <Image src={ProductPreview} maxW={{base: '100%', md: '80%'}} />
      </Box>
     
     
     


    </Flex>
    <Flex direction="row" gap={2} alignItems="center" justifyContent="center" mt="6rem" maxW={{base: '100%', md: '80%'}}>
        
        
        <Box p="1.5rem"  borderLeft="4px solid rgba(90, 93, 159, 0.8)" position="relative">
          <Text size="lg" mb={8} as="blockquote">Avi was the backbone of the Airline Neutral project. Her contributions were absolutely invaluable.
          Without her leadership and expertise, we wouldn't have achieved the seamless integration we did.</Text>
          <Heading size="sm" as="cite" display="block">Rajdeep Varma, Senior QE, ex-Thoughtworker</Heading>
          <Image src={quoteImg}  width="3rem" position="absolute" top="-2rem" right="0rem" opacity="0.8"/>
        </Box>
    </Flex>
    
  </Box>


);

export default AirlinePreview;
