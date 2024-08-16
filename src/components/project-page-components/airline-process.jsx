import React from "react"
import {
  Stack, Box, Text, Heading, Image, Flex, Container
} from '@chakra-ui/react'
import PlanBlueprint from '../../images/airline-define-blueprint.png';
import DeltaBlues from '../../images/delta-blues.png';
import DesignTokens from '../../images/airline-design-tokens.png';
import FinalProduct from '../../images/airline-final-product.png';



const AirlineProcess = () => {


  return (
    <Box>

      <Box bg="#0A0911" width="100%" py={{ base: "4rem", md: "8rem" }} textAlign="center">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">The Process</Text>
        <Heading size={{ base: '3xl', md: '4xl' }} maxW="900px" mx="auto" color="#f4f4f4">Defining an Airline-Agnostic Design Framework</Heading>


      </Box>


      <Container maxW="1300px" py={{ base: "3rem", md: "6rem" }}>

        <Flex direction="column" gap="1rem" maxW="1020px">
          <Text size="md" color="#7B7A7E" textTransform="uppercase">Defining the problem</Text>
          <Heading size={{ base: 'lg', md: 'xl' }}>Starting with Screens, Missing the Manual</Heading>
          <Text size="lg" pt="1rem" maxW="660px">
            There were no comprehensive guidelines. An external design agency supplied a few rebranded screens incorporating Virgin Atlantic’s brand guidelines into the Delta app, leaving us unsure how to translate them across three teams (iOS, Android, and Mobile Web) in different time zones (Atlanta, London, and Gurgaon). While primarily working as a UI developer, I also assumed design responsibilities.
          </Text>

        </Flex>
      </Container>



      <Box bg="#f6f6f6" py={{ base: "4rem", md: "8rem" }}>
        <Container maxW="1300px">
          <Flex direction={{ base: "column", md: "row" }} gap="2rem" justifyContent="space-between">
            <Box maxW="660px">
              <Text size="md" color="#7B7A7E" textTransform="uppercase">Creating a brand-identity and components systems</Text>
              <Heading pt="1rem" size={{ base: 'xl', md: '2xl' }}>Let's set the Blueprint</Heading>
              <Text size="lg" pt={{ base: "1rem", md: "2rem" }}>
                We developed a multi-brand system by analysing the Delta app and Virgin Atlantic designs. The strategy included a Brand-Identity System for unique typography, colours, and copy, and a Components System for modular, reusable design elements adaptable across brands. This approach ensured cohesive yet distinct branding.
              </Text>
            </Box>

            <Box maxW="660px">
              <Image src={PlanBlueprint} width="100%" />

            </Box>
          </Flex>

        </Container>



      </Box>

      <Box py={{ base: "4rem", md: "8rem" }} bg="#0A0911">
        <Container maxW="1300px">
          <Flex direction="column" gap="1rem" maxW="660px" mx="auto">
            <Text size="md" color="#7B7A7E" textTransform="uppercase">Leading Mobile Web UI Development</Text>
            <Heading size={{ base: 'xl', md: '2xl' }} color="#f4f4f4">Commanding the Mobile Web UI Front</Heading>
            <Box pt={{ base: "2rem", md: "4rem" }}>
              <Text size="lg" color="#f4f4f4">
                I led the development of design tokens for the mobile web.
                Firstly, I refactored the Delta existing codebase, removing duplications and inefficiencies.
              </Text>
              <Image src={DeltaBlues} width={{ base: '100%' }} mt={{ base: "2rem", md: "4rem" }} />
              <Text size="lg" pt={{ base: "2rem", md: "4rem" }} color="#f4f4f4">
                I applied Brad Frost's Atomic Design to develop foundational styles and reusable components for the
                mobile web. Additionally, I created two layers of abstraction to effectively use themes across various brands, known today as design tokens.

              </Text>
            </Box>
          </Flex>


        </Container>
        <Box maxW="1200px" textAlign="center" mx="auto" pt={{ base: "4rem", md: "8rem" }}>
          <Image src={DesignTokens} width={{ base: '100%' }} />

        </Box>

      </Box>

      <Box bg="linear-gradient(135deg, #013368 0%, #AB0133 100%)" >


        <Container maxW="1300px" py="6rem">

          <Flex direction={{ base: "column", md: "row" }} gap="1rem" alignItems="center">
            <Box>
              <Text size="md" color="#fff" textTransform="uppercase" mb={{ base: "0.5rem", md: "1rem" }}>Collaboration with iOS and Android teams</Text>
              <Heading size={{ base: 'xl', md: '2xl' }} color="#fff">Turning Vision into Reality</Heading>
              <Box maxW="660px" pt={{ base: "1rem", md: "2rem" }}>
                <Text size="lg" color="#fff">
                  After multiple rounds of refinement and incorporating feedback, I shared the new design system with the iOS and Android teams. I collaborated closely with both teams, guiding them to implement the redesign using the established directives. I also oversaw the implementation across all platforms to ensure adherence to guidelines and achieve a cohesive look and feel.</Text>
              </Box>

            </Box>
            <Box maxW="700px">
              <Image src={FinalProduct} width="100%" />

            </Box>


          </Flex>
        </Container>
      </Box>


    </Box>
  )



};

export default AirlineProcess;
