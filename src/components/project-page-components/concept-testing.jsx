import React from "react"
import {
  Stack, Box, Text, Heading, Image, Grid, GridItem, Flex, VStack,
  Divider, Container
} from '@chakra-ui/react'
import { MdOutlineAnalytics } from 'react-icons/md';
import { MdSettings } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import ConceptImage1 from '../../images/concept1.jpg'
import ConceptImage2 from '../../images/concept2.jpg'
import { MdErrorOutline } from 'react-icons/md';



const ConceptTesting = () => (
  <Box mt={{ base: "6rem",  lg: "8rem"}}>
    <Flex direction="column" gap={2} maxW="1020px">
      <Text size="md" color="#7B7A7E" textTransform="uppercase">Concept testing</Text>
      <Heading size={{base: 'lg', md: 'xl'}}>Testing the Waters</Heading>
      <Box>
        <Text size="lg" pt={2}>
          We translated conceptual ideas into tangible prototypes and validated them through comprehensive
          user research. Our objectives were to assess the clarity of Mendeley's value proposition,
          evaluate trust in the brand and user engagement with the product,
          determine the understandability of the content, and
          analyze the discoverability and findability of the content.
          To better understand the user needs, we used a hybrid approach comprising of qual and quant methods.</Text>
        
        <Box maxW={{base: "100%", lg: "80%"}} p={4} rounded="md" mt={6}>
          <Grid templateColumns='15% repeat(1, 1fr) 15% 15%' gap={6} alignItems="center">
            {/* Header */}
            <Text></Text>
            <Text size="md" color="#7B7A7E">Methods</Text>
            <Text size="md" color="#7B7A7E" sx={{ maxWidth: "160px" }}>Users</Text>
            <Text size="md" color="#7B7A7E">Tools</Text>

            {/* Row 1 */}
            <Text fontWeight="semibold">Qualitative</Text>
            <Text>Remote user interviews, Semi-Structured</Text>
            <Text sx={{ maxWidth: "160px" }}>6 users</Text>
            <Text>Zoom, Confluence</Text>

            {/* Row 2 */}
            <Text fontWeight="semibold">Quantitative</Text>
            <Text>First click test, 5-second test</Text>
            <Text sx={{ maxWidth: "160px" }}>20 responses</Text>
            <Text>Ballpark</Text>
          </Grid>
        </Box>
      </Box>
    </Flex>
    
  </Box>



);

export default ConceptTesting;
