import React from "react"
import { Stack, Box, Text, Heading, Image, Grid, GridItem, Flex, VStack, List, ListItem, ListIcon, Container } from '@chakra-ui/react'
import OldMendeley from "../../images/old-mendeley.webp"
import ArrowDown from "../../images/TrendDown.svg";
import TrustImage from  '../../images/trust.svg';
import EngagingImage from  '../../images/engaging.svg';
import ClarityImage from  '../../images/clarity.svg';
import BrandImage from  '../../images/mendeley-logo.svg';






const InceptionAndProcess = () => (
  <Container maxW="1300px" pt="10rem">
    <Heading size="2xl" mb="4rem">Inception and Process</Heading>
    <Flex gap="8rem"  width="100%" direction="column">

      <Flex direction="column" gap={2} maxW="1020px">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Defining the problem</Text>
        <Heading size="xl">Why Mendeley's Full Potential Remains Hidden?</Heading>
        <Text size="lg" pt={2}>The user research at Mendeley has shown that while the reference manager
          is widely used for managing and organising research, users often turn to other platforms for
          additional needs. This indicates a significant gap in awareness regarding Mendeley’s
          comprehensive features, including the web importer, reader, and the MCite tool for
          writing and citing references, as well as Groups for collaborative work.
        </Text>
        <Box>
          <Grid mt="60px" templateColumns='repeat(2, 1fr)' gap={6}>
            <GridItem>
              <Image src={OldMendeley} maxW="100%" borderRadius="12px" />
            </GridItem>
            <GridItem>
              <VStack gap={4} width="100%" >
                <Box p={6} borderRadius="12px" bg="#1a1a1a" as="Flex" gap={2}>
                  <Image src={ArrowDown} width="3rem" />
                  <Box>
                    <Heading size="md" my={3} as="Flex" alignContent="center" display="flex">
                      Limited Value Proposition
                    </Heading>
                    <Text size="lg">Many users recognised Mendeley only as a reference manager, overlooking its full suite of research tools and collaborative features.</Text>
                  </Box>
                </Box>
                <Box p={6} borderRadius="12px" bg="#1a1a1a" as="Flex" gap={2}>
                  <Image src={ArrowDown} width="3rem" />
                  <Box>
                    <Heading size="md" my={3} as="Flex" alignContent="center" display="flex">
                      Obsolete Branding
                    </Heading>
                    <Text size="lg">Mendeley's previous branding did not reflect its modern vision and capabilities. </Text>
                  </Box>
                </Box>
                <Box p={6} borderRadius="12px" bg="#1a1a1a" as="Flex" gap={2}>
                  <Image src={ArrowDown} width="3rem" />
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
        <Heading size="xl">Defining the new value proposition</Heading>

        <Box pt={2}>
          <Text size="lg">In a collaborative workshop with key stakeholders from business,
            product, marketing, analytics, and development, we plotted, prioritised and defined
            critical focus areas for new Mendeley home page.

          </Text>
          <Grid mt={20} templateColumns='repeat(2, 1fr)' templateRows='repeat(2, 1fr)' gap={0} >
            <GridItem p="0 1rem 2rem 2rem">
              <Heading size="md" mb={3} textTransform="uppercase">
                <Image src={BrandImage} width="2rem" mb={3} py="0.5rem"/>Redefine brand presence</Heading>
              <Text size="lg">Communicate a fresh and modern visual look that speaks Mendeley's brand value.</Text>
            </GridItem>
            <GridItem borderLeft="solid 1px rgba(90, 93, 159, 0.25)" p="0 1rem 2rem 2rem">
              <Heading size="md" mb={3} textTransform="uppercase">
                <Image src={TrustImage} width="2rem" mb={3}/>Reinforce Trust</Heading>
              <Text size="lg">Communicate Mendeley's full range of capabilities in supporting researchers in their whole research journey</Text>
            </GridItem>
            <GridItem p="2rem 1rem 2rem 2rem" borderTop="solid 1px rgba(90, 93, 159, 0.25)">
              <Heading size="md" mb={3} textTransform="uppercase">
                <Image src={ClarityImage} height="2rem" mb={3}/>Content Clarity</Heading>
              <Text size="lg">Communicate a fresh and modern visual look that speaks Mendeley's brand value</Text>
            </GridItem>
            <GridItem borderLeft="solid 1px rgba(90, 93, 159, 0.25)" borderTop="solid 1px rgba(90, 93, 159, 0.25)" p="2rem 1rem 2rem 2rem">
              <Heading size="md" mb={3} textTransform="uppercase">
                <Image src={EngagingImage} width="2rem" mb={3}/>Make it engaging</Heading>
              <Text size="lg">Communicate how can mendldey support researchers in their whole research journey</Text>
            </GridItem>
            
            

          </Grid>

        </Box>

      </Flex>

      


    </Flex>
  </Container>


);

export default InceptionAndProcess;
