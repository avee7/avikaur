import React from "react"
import { Stack, Box, Text, Heading, Image, Grid, GridItem, Flex, VStack } from '@chakra-ui/react'
import OldMendeley from "../../images/old-mendeley.webp"
import ArrowDown from "../../images/TrendDown.svg";
import TrustImage from  '../../images/trust.svg';
import EngagingImage from  '../../images/engaging.svg';
import ClarityImage from  '../../images/clarity.svg';
import BrandImage from  '../../images/mendeley-logo.svg';






const AirlineProblem = () => (
  <Box pt={{ base: "6rem",  lg: "10rem"}} >
    
    <Flex gap="8rem"  width="100%" direction="column">

      <Flex direction="column" gap={2} maxW="1020px">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Defining the problem</Text>
        <Heading size={{base: 'lg', md: 'xl'}}>We've Got Apps, Now Let's Revamp! But What's the Real Issue?</Heading>
        <Text size="lg" pt={2}>There were no guidelines. We were given only 3-4 key screens by the desiign agency, we had no idea how it would be
        translated to all the 3 teams across 3 different time zones (Atlanta, London and Gurgaon). 
        </Text>
        <Text size="lg">
        I worked on this project primarily as a UI developer but also took on design responsibilities. An external agency provided a few rebranded screens incorporating Virgin Atlantic’s brand guidelines into the Delta app.
        </Text>
      </Flex>

      {/* <Flex direction="column" gap={2} maxW="1020px" width="100%">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Project Goals</Text>
        <Heading size={{base: 'lg', md: 'xl'}}>Defining the new value proposition</Heading>

        <Box pt={2}>
          <Text size="lg">In a collaborative workshop with key stakeholders from the business,
            product, marketing, analytics, and development, I plotted, prioritised and defined
            critical focus areas for new Mendeley home page.

          </Text>
          <Grid mt={{base: "2rem", lg: "6rem"}}
           templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
           templateRows={{ base: 'repeat(4, auto)', lg: 'repeat(2, auto)' }}
           gap={0} >
            <GridItem p="2rem 1rem 2rem 2rem">
              <Heading size="md" mb={3} textTransform="uppercase">
                <Image src={BrandImage} width="2rem" mb={3} py="0.5rem"/>Redefine brand presence</Heading>
              <Text size="lg">
              Elevate Mendeley’s brand by adopting a fresh, modern visual identity that aligns with its core values and appeals to the audience.
              </Text>
            </GridItem>
            <GridItem borderLeft={{base: "none", lg: "solid 1px rgba(90, 93, 159, 0.25)"}} p="2rem 1rem 2rem 2rem">
              <Heading size="md" mb={3} textTransform="uppercase">
                <Image src={TrustImage} width="2rem" mb={3}/>Reinforce Trust</Heading>
              <Text size="lg">
              Highlight Mendeley's capabilities to support researchers throughout their research journey, enhancing user trust and reliability.
              </Text>
            </GridItem>
            <GridItem p="2rem 1rem 2rem 2rem" borderTop={{base: "none", lg: "solid 1px rgba(90, 93, 159, 0.25)"}}>
              <Heading size="md" mb={3} textTransform="uppercase">
                <Image src={ClarityImage} height="2rem" mb={3}/>Content Clarity</Heading>
              <Text size="lg">
              Revamp content to reflect Mendeley's modernised brand image, ensuring clarity and alignment with our updated brand values.
              </Text>
            </GridItem>
            <GridItem borderLeft={{base: "none", lg: "solid 1px rgba(90, 93, 159, 0.25)"}} borderTop={{base: "none", lg: "solid 1px rgba(90, 93, 159, 0.25)"}} p="2rem 1rem 2rem 2rem">
              <Heading size="md" mb={3} textTransform="uppercase">
                <Image src={EngagingImage} width="2rem" mb={3}/>Make it engaging</Heading>
              <Text size="lg">Communicate how Mendeley supports researchers throughout their entire research journey.</Text>
            </GridItem>
            
            

          </Grid>

        </Box>

      </Flex> */}

      


    </Flex>
  </Box>


);

export default AirlineProblem;
