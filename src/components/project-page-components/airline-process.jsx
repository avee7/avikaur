import React from "react"
import {
  Stack, Box, Text, Heading, Image, List, ListItem, Flex, VStack,
  Divider, Container, SimpleGrid
} from '@chakra-ui/react'
import PlanBlueprint from '../../images/airline-define-blueprint.png';
import DeltaBlues from '../../images/delta-blues.png';
import DesignTokens from '../../images/airline-design-tokens.png';
import FinalProduct from '../../images/airline-final-product.png';



const AirlineProcess = () => {


  return (
    <Box mt={{ base: "6rem", lg: "8rem" }}>
      <Heading size={{ base: 'xl', md: '2xl' }} mb={{ base: "2rem", md: "4rem" }}>The Process</Heading>
      <Flex direction="column" gap={2} maxW="1020px">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Creating a brand-identity and components systems</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>Let's set the Blueprint</Heading>
        <Box mt="1rem">
          <Image src={PlanBlueprint} width="100%" />

        </Box>
      </Flex>
      <Flex direction="column" gap={2} maxW="1020px" mt="8rem">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Leading Mobile Web UI Development</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>Commanding the Mobile Web UI Front</Heading>
        <Box>
          <Text size="lg" pt="2rem">
            I led the development of design tokens for the mobile web.
            Firstly, I refactored the Delta existing codebase, removing duplications and inefficiencies.
            </Text>
            <Image src={DeltaBlues} width={{base: '100%', md: '56%'}} m="3rem 0 5rem" />
            <Text size="lg" pt="2rem">

            I used Brad Frost's Atomic Design to create foundational styles, reusable components, and created a semantic layer with design tokens.
           
          </Text>
          <Image src={DesignTokens} width={{base: '100%'}} m="3rem 0 5rem" />
        </Box>
      </Flex>
      <Flex direction="column" gap={2} maxW="1020px" mb="5rem">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Communication and Implementation for iOS and Android teams</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>Turning Vision into Reality</Heading>
        <Box>
          <Text size="lg" pt={2}>
          After multiple rounds of refinement and incorporating feedback, I shared the new design system with the iOS and Android teams. I collaborated closely with both teams, guiding them to implement the redesign using the established directives. I also oversaw the implementation across all platforms to ensure adherence to guidelines and achieve a cohesive look and feel.</Text>
        </Box>
        <Image src={FinalProduct} width={{base: '100%', md: '60%'}} m="3rem 0 5rem" />
      </Flex>

    </Box>
  )



};

export default AirlineProcess;
