import React from "react"
import {
  Stack, Box, Text, Heading, Image, Grid, GridItem, Flex, VStack,
  Divider, Container, SimpleGrid
} from '@chakra-ui/react'
import TestMethods from "../../images/mendeley-research-plan.png"



const ConceptTesting = () => {

  return (
    <Container maxW="800px" py={{ base: "6rem", md: "8rem" }}>

    
    
      <Flex direction="column" gap={{base: "0.5rem", md: "1rem"}}>
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Concept testing</Text>
        <Heading size={{ base: '2xl', md: '3xl' }} color="#0A0911">Testing the Waters</Heading>
        {/* <Heading size={{ base: 'lg', md: 'xl' }}></Heading> */}
        <Box pt={{base: "1rem", md: "2rem"}}>
          <Text size="lg">
            I translated conceptual ideas into tangible prototypes and validated them through comprehensive
            user research comprising of qual and quant methods.
            
            </Text>
            <Text size="lg" pt={{base: "1rem"}}>
            The objectives were to assess the clarity of Mendeley's value proposition,
            evaluate trust in the brand and user engagement with the product, and
            analyse the discoverability and findability of the content.
            
            </Text>
           

            <Image mt={{base: "1rem", md: "4rem"}} src={TestMethods} width="100%" />

         
        </Box>
      </Flex>

    
    </Container>
  )



};

export default ConceptTesting;
