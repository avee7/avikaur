import React from "react"
import {
  Box, Text, Heading, Image, Grid, GridItem, Flex, VStack,
Container
} from '@chakra-ui/react'

import FinalSolution from '../../images/mendeley-final-solution.jpg'

const MendeleyFinalSolution = () => (
  <Container maxW="1300px"  mt={{ base: '4rem', md: '6rem' }}>
    <Box>
      <Heading size={{ base: 'lg', md: 'xl' }} width="100%" mb="2rem">A Fresh, Modern Solution that Reflects Our Brand Values</Heading>
      <Image src={FinalSolution} width="100%" height="auto" borderRadius="12px"  />
    
  </Box>
 

</Container>

);

export default MendeleyFinalSolution;
