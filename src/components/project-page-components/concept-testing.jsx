import React from "react"
import {
  Stack, Box, Text, Heading, Image, Grid, GridItem, Flex, VStack,
  Divider, Container, SimpleGrid
} from '@chakra-ui/react'
import TestMethods from "../../images/mendeley-research-plan.png"



const ConceptTesting = () => {

  return (
    <Box mt={{ base: "6rem", lg: "8rem" }}>
      <Flex direction="column" gap={2} maxW="1020px">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Concept testing</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>Testing the Waters</Heading>
        <Box>
          <Text size="lg" pt={2}>
            I translated conceptual ideas into tangible prototypes and validated them through comprehensive
            user research. The objectives were to assess the clarity of Mendeley's value proposition,
            evaluate trust in the brand and user engagement with the product,
            determine the understandability of the content, and
            analyse the discoverability and findability of the content.
            
            </Text>
            <Text size="lg" pt={2}>
            To better understand the user needs, I used a hybrid approach comprising of qual and quant methods.
            </Text>

            <Image mt={{base: "1rem", md: "4rem"}} src={TestMethods} width="100%" />

         
        </Box>
      </Flex>

    </Box>
  )



};

export default ConceptTesting;
