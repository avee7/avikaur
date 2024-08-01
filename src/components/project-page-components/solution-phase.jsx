import React from "react"
import {
  Box, Text, Heading, Image, Grid, GridItem, Flex, VStack,
  Container
} from '@chakra-ui/react'
import SolutionImage1 from '../../images/solution1.png'
import SolutionImage2 from '../../images/solution2.png'
import { MdCheckCircle } from "react-icons/md";

const SolutionPhase = () => (

  <Box>
    <Box bg="#007398" width="100%" py={{ base: "4rem", md: "8rem" }} textAlign="center">
      <Text size="md" color="#fff" textTransform="uppercase">Designing Solution</Text>
      <Heading size={{ base: '3xl', md: '4xl' }} color="#f4f4f4">Sailing to Solutions</Heading>


    </Box>
    <Container maxW="800px" pt={{ base: "3rem", md: "6rem" }} pb={{ base: "4rem", md: "8rem" }}>
      <Flex direction="column" gap={{base: "3rem", md: "6rem"}}>
        <Text size="lg" maxW="660px">
        I synthesised the results from our research and addressed the issues highlighted during the process. Based on these insights, I crafted the following designs.
        </Text>
        <Box>
          <Image src={SolutionImage1} maxWidth="100%" border="solid 1px rgba(60,61,59,0.2)" borderRadius="12px" />
          <VStack gap="1rem" align='stretch' borderRadius="12px" mt={{base: "1rem", md: "2rem"}}>
            <Flex gap="0.5rem">
              <Box as={MdCheckCircle} flexShrink="0" boxSize="1.5rem" color="#76b584" />
              <Text fontSize="lg">The visibility of content below the hero area encouraged the users to scroll.</Text>
            </Flex>
            <Flex gap="0.5rem">
              <Box as={MdCheckCircle} flexShrink="0" boxSize="1.5rem" color="#76b584" />
              <Text fontSize="lg">The replacement of "Solutions" with "Mendeley Suite" helped to remove confusion between with the "Support" section.</Text>
              </Flex>
          </VStack>
        </Box>
        <Box>
          <Image src={SolutionImage2} maxWidth="100%" border="solid 1px rgba(60,61,59,0.2)" borderRadius="12px" />
          <VStack gap="1rem" align='stretch' borderRadius="12px" mt={{base: "1rem", md: "2rem"}}>
            <Flex gap="0.5rem">
              <Box as={MdCheckCircle} flexShrink="0" boxSize="1.5rem" color="#76b584" />
              <Text fontSize="lg">The imagery was clear and less cluttered and received a positive feedback.</Text>
            </Flex>
            <Flex gap="0.5rem">
              <Box as={MdCheckCircle} flexShrink="0" boxSize="1.5rem" color="#76b584" />
              <Text fontSize="lg">The CTAs were made bold and visible, with secondary actions given less visual weight.</Text>
              </Flex>
          </VStack>
        </Box>
      


      </Flex>







    </Container>
    

   


  </Box>


);

export default SolutionPhase;
