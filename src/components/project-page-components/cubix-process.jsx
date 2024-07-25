import React from "react"
import {
  Stack, Box, Text, Heading, Image, Flex, Container
} from '@chakra-ui/react'
import ProductPreview from '../../images/cubix-multi-mode.png';
import FileStructure from '../../images/cubix-file-structure.jpg';




const CubixProcess = () => {


  return (
    <Box py={{ base: "7.5rem", md: "15rem" }}>
      <Container maxW="1300px">
      <Heading size={{ base: '3xl', lg: '4xl' }} mb={{ base: "2rem", md: "4rem" }}>The Journey</Heading>
      <Flex direction="column" gap="8rem">
      <Flex direction="column" gap={2} maxW="1020px">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Defining the problem</Text>
        
        <Heading size={{base: 'lg', md: 'xl'}}>Defining the plan</Heading>
        <Text size="lg" pt={2}>
        I partnered with the company CEO to chalk down what are the expected timelines we have for building this design system. We wanted to build this alongwith 
        the product we are working on. Since it was a project which we were building from scratch, we set up some milestones.
        </Text>
        
      </Flex>

      <Flex direction="column" gap={2} maxW="1020px">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Creating a brand-identity and components systems</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>Catalog everything</Heading>
        <Box>
          <Text size="lg" pt="2rem">
            With the product we were building, I catalogued everything - everything starting from foundations till patterns. Since 
            it was a greenfield project, we had the advantage of not carrying and backlog. We had already built a good foundations and components 
            but it was based on only base tokens and didn't have the infrastructure for semantic tokens in place.
            </Text>
            
          {/* <Image src={DesignTokens} width={{base: '100%'}} mt="3rem" /> */}
        </Box>
       
      </Flex>
      
      <Flex direction="column" gap={2} maxW="1020px" >
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Communication and Implementation for iOS and Android teams</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>First iteration of Semantic layer</Heading>
        <Box>
          <Text size="lg" pt={2}>
            We had created designs for our first products using base tokens. That is, simply naming the raw values. The project was building on Chakra UI,
            so I utlised the foundation values (colour, typography, radius, spacing) provided by Chakra UI and linked them to base tokens.
            For setting up the semantic layer, I researched hundreds of articles and analysed many famous design system like material design, lightening design system,
            carbon design system, wise design system, Atlassian design system, etc. 
            I drew inspiration from the Github's approach and setup a semantic layer for colours, typography, border radius, spacing, breakpoints, shadows, etc.

         
          </Text>
          <Text size="lg" pt={2}>
            After discussing the approach with the product and engineering team, I decided to stress test this for a few months. 
          </Text>
        </Box>
        {/* <Image src={FinalProduct} width={{base: '100%', md: '60%'}} m="3rem 0 5rem" /> */}
      </Flex>
      <Flex direction="column" gap={2} maxW="1020px" >
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Communication and Implementation for iOS and Android teams</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>Second iteration of Semantic layer</Heading>
        <Box>
          <Text size="lg" pt={2}>
            In the second iteration, I interviewed the designers and dev team, to understand the challenges faced by them. Documented the challenges the are facing.
            I also evaluated the places where the components are using values directly from the base tokens.
          </Text>
         
        </Box>
        <Box width="full">
      <Image src={FileStructure} width="100%" borderRadius="12px" />
    </Box>
       
      </Flex>
      <Flex direction="column" gap={2} maxW="1020px" >
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Communication and Implementation for iOS and Android teams</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>Extending it for the other product</Heading>
        <Box>
         
          <Text size="lg" pt={2}>
            Now, was the time of building another product, so I had to refine the approach for Figma files for supporting multiple brands and their respective modes too.
          Therefore, I created a figma file system structure that could support multiple brands in future. 
          </Text>
          {/* Image for cubix file structure */}
          <Text size="lg" pt={2}>
            Also, I further refined the semantic layer by understanding the problems and focusing a coherent experience.
          </Text>
        </Box>
       
      </Flex>
      <Flex direction="column" gap={2} maxW="1020px" >
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Communication and Implementation for iOS and Android teams</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>A system is born</Heading>
        <Box>
         
          <Text size="lg" pt={2}>
            After testing it with the existing designs and receiving feedback from the devs and designers, we are working on the documentation. But as we are working very closely with the develooment team, the team is already implentating changes and are making progress quickly.            
          </Text>
          {/* Image for snapshots from the design system */}
          
        </Box>
      <Box width="full">
      <Image src={ProductPreview} width="100%" borderRadius="12px" />
    </Box>
       
      </Flex>
      </Flex>
      </Container>

     

    </Box>
  )



};

export default CubixProcess;
