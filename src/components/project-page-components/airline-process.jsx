import React from "react"
import {
  Stack, Box, Text, Heading, Image, Flex
} from '@chakra-ui/react'
import PlanBlueprint from '../../images/airline-define-blueprint.png';
import DeltaBlues from '../../images/delta-blues.png';
import DesignTokens from '../../images/airline-design-tokens.png';
import FinalProduct from '../../images/airline-final-product.png';



const AirlineProcess = () => {


  return (
    <Box mt={{ base: "6rem", lg: "8rem" }}>
      <Heading size={{ base: 'xl', md: '2xl' }} mb={{ base: "2rem", md: "4rem" }}>The Process</Heading>

      <Flex direction="column" gap="8rem">
      <Flex direction="column" gap={2} maxW="1020px">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Defining the problem</Text>
        <Heading size={{base: 'lg', md: 'xl'}}>Starting with Screens, Missing the Manual</Heading>
        <Text size="lg" pt={2}>
        There were no comprehensive guidelines. An external design agency supplied a few rebranded screens incorporating Virgin Atlantic’s brand guidelines into the Delta app, leaving us unsure how to translate them across three teams (iOS, Android, and Mobile Web) in different time zones (Atlanta, London, and Gurgaon). While primarily working as a UI developer, I also assumed design responsibilities.
        </Text>
        
      </Flex>

      <Flex direction="column" gap={2} maxW="1020px">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Creating a brand-identity and components systems</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>Let's set the Blueprint</Heading>
        <Box mt="1rem">
          <Image src={PlanBlueprint} width="100%" />

        </Box>
      </Flex>
      <Flex direction="column" gap={2} maxW="1020px">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Leading Mobile Web UI Development</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>Commanding the Mobile Web UI Front</Heading>
        <Box>
          <Text size="lg" pt="2rem">
            I led the development of design tokens for the mobile web.
            Firstly, I refactored the Delta existing codebase, removing duplications and inefficiencies.
            </Text>
            <Image src={DeltaBlues} width={{base: '100%', md: '56%'}} m="3rem 0" />
            <Text size="lg" pt="2rem">
            I applied Brad Frost's Atomic Design to develop foundational styles and reusable components for the 
            mobile web. Additionally, I created two layers of abstraction to effectively use themes across various brands, known today as design tokens.

          </Text>
          <Image src={DesignTokens} width={{base: '100%'}} mt="3rem" />
        </Box>
      </Flex>
      <Flex direction="column" gap={2} maxW="1020px" >
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Communication and Implementation for iOS and Android teams</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>Turning Vision into Reality</Heading>
        <Box>
          <Text size="lg" pt={2}>
          After multiple rounds of refinement and incorporating feedback, I shared the new design system with the iOS and Android teams. I collaborated closely with both teams, guiding them to implement the redesign using the established directives. I also oversaw the implementation across all platforms to ensure adherence to guidelines and achieve a cohesive look and feel.</Text>
        </Box>
        <Image src={FinalProduct} width={{base: '100%', md: '60%'}} m="3rem 0 5rem" />
      </Flex>
      </Flex>

    </Box>
  )



};

export default AirlineProcess;
