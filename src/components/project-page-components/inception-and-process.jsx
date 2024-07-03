import React from "react"
import { Stack, Box, Text, Heading, Image, Grid, GridItem, Flex, VStack } from '@chakra-ui/react'
import OldMendeley from "../../images/old-mendeley.webp"
import ArrowDown from "../../images/TrendDown.svg";
import TrustImage from  '../../images/trust.svg';
import EngagingImage from  '../../images/engaging.svg';
import ClarityImage from  '../../images/clarity.svg';
import BrandImage from  '../../images/mendeley-logo.svg';






const InceptionAndProcess = () => (
  <Box pt={{ base: "6rem",  lg: "10rem"}} >
    <Heading size={{base: 'xl', md: '2xl'}} mb={{ base: "2rem",  md: "4rem"}}>Inception and Process</Heading>
    <Flex gap="8rem"  width="100%" direction="column">

      <Flex direction="column" gap={2}>
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Defining the problem</Text>
        <Heading size={{base: 'lg', md: 'xl'}}  maxW="1020px">Why Mendeley's Full Potential Remains Hidden?</Heading>
        <Text size="lg" pt={2}  maxW="1020px">The user research at Mendeley has shown that while the reference manager
          is widely used for managing and organising research, users often turn to other platforms for
          additional needs. This indicates a significant gap in awareness regarding Mendeley’s
          comprehensive features, including the web importer, reader, and the MCite tool for
          writing and citing references, as well as Groups for collaborative work.
        </Text>
        <Box>
          <Grid mt="60px" templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            <GridItem>
              <Image src={OldMendeley} maxW="100%" borderRadius="12px" />
            </GridItem>
            <GridItem>
              <VStack gap={4} width="100%" maxW="480px" >
                <Box p={6} borderRadius="12px" bg="#1a1a1a" as="Flex" gap={2}>
                  <Image src={ArrowDown} width="2.5rem" />
                  <Box>
                    <Heading size="md" my={3} as="Flex" alignContent="center" display="flex">
                      Limited Value Proposition
                    </Heading>
                    <Text size="lg">Many users recognised Mendeley only as a reference manager, overlooking its full suite of research tools and collaborative features.</Text>
                  </Box>
                </Box>
                <Box p={6} borderRadius="12px" bg="#1a1a1a" as="Flex" gap={2}>
                  <Image src={ArrowDown} width="2.5rem" />
                  <Box>
                    <Heading size="md" my={3} as="Flex" alignContent="center" display="flex">
                      Obsolete Branding
                    </Heading>
                    <Text size="lg">Mendeley's previous branding did not reflect its modern vision and capabilities. </Text>
                  </Box>
                </Box>
                <Box p={6} borderRadius="12px" bg="#1a1a1a" as="Flex" gap={2}>
                  <Image src={ArrowDown} width="2.5rem" />
                  <Box>
                    <Heading size="md" my={3} as="Flex" alignContent="center" display="flex">
                      Outdated Content
                    </Heading>
                    <Text size="lg">Several sections, including the careers page, were outdated and no longer relevant, highlighting the need for immediate updates to maintain our site's relevance and accuracy.</Text>
                  </Box>
                </Box>

              </VStack>

            </GridItem>


          </Grid>

        </Box>
      </Flex>

      <Flex direction="column" gap={2} maxW="1020px" width="100%">
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

      </Flex>

      


    </Flex>
  </Box>


);

export default InceptionAndProcess;
