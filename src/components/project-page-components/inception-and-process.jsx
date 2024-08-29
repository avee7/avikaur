import React from "react"
import { Stack, Box, Text, Heading, Image, Grid, GridItem, Flex, VStack, Container } from '@chakra-ui/react'
import OldMendeley from "../../images/old-mendeley.webp"
import ArrowDown from "../../images/TrendDown.svg";
import TrustImage from '../../images/trust.svg';
import EngagingImage from '../../images/engaging.svg';
import ClarityImage from '../../images/clarity.svg';
import BrandImage from '../../images/mendeley-logo.svg';
import Workshop from '../../images/mendeley-workshop-outcomes.jpg'






const InceptionAndProcess = () => (
  <Box pt={{ base: "6rem", lg: "10rem" }} >

    <Flex gap="8rem" width="100%" direction="column">

      <Container maxW="1300px" width="100%">

        <Flex direction="column" gap={{ base: "0.5rem", md: "1rem" }}>
          <Text size="md" color="#7B7A7E" textTransform="uppercase">Defining the problem</Text>

          <Heading maxW="660px" size={{ base: 'xl', md: '2xl' }} color="#0A0911">Why Mendeley's Full Potential Remains Hidden?</Heading>
          <Text maxW="660px" size="lg" pt={{ base: "1rem", md: "2rem" }}>The user research at Mendeley has shown that while the reference manager
            is widely used for managing and organising research, users often turn to other platforms for
            additional needs. This indicates a significant gap in awareness regarding Mendeley’s
            comprehensive features, including the web importer, reader, and the MCite tool for
            writing and citing references, as well as Groups for collaborative work.
          </Text>
        </Flex>


        <Box mt={{ base: "3rem", md: "6rem" }}>
          <Flex direction={{ base: "column", lg: "row" }} gap="2rem">
            <Box maxW="600px" width="100%">
              <Image src={OldMendeley} maxW="100%" borderRadius="12px" border="solid 1px rgba(60,61,59,0.2)" />
            </Box>
            <Box>
              <VStack width="100%" maxW="480px" gap="0" >
                <Box p="2rem" borderRadius="12px" as="Flex" gap="1rem">
                  <Image src={ArrowDown} width="2.5rem" />
                  <Box>
                    <Heading size="md" mt="1rem" mb="0.5rem" as="Flex" alignContent="center" display="flex">
                      Limited Value Proposition
                    </Heading>
                    <Text size="lg">Many users recognised Mendeley only as a reference manager, overlooking its full suite of research tools and collaborative features.</Text>
                  </Box>
                </Box>
                <Box p="2rem" borderRadius="12px" as="Flex" gap="1rem">
                  <Image src={ArrowDown} width="2.5rem" />
                  <Box>
                    <Heading size="md" mt="1rem" mb="0.5rem" as="Flex" alignContent="center" display="flex">
                      Obsolete Branding
                    </Heading>
                    <Text size="lg">Mendeley's previous branding did not reflect its modern vision and capabilities. </Text>
                  </Box>
                </Box>
                <Box p="2rem" borderRadius="12px" as="Flex" gap="1rem">
                  <Image src={ArrowDown} width="2.5rem" />
                  <Box>
                    <Heading size="md" mt="1rem" mb="0.5rem" as="Flex" alignContent="center" display="flex">
                      Outdated Content
                    </Heading>
                    <Text size="lg">Several sections, including the careers page, were outdated and no longer relevant, highlighting the need for immediate updates to maintain our site's relevance and accuracy.</Text>
                  </Box>
                </Box>

              </VStack>

            </Box>


          </Flex>

        </Box>

      </Container>


      <Box bg="#0A0911" width="100%" py={{ base: "4rem", md: "8rem" }} textAlign="center">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Project Goals</Text>
        <Heading size={{ base: '3xl', md: '4xl' }} color="#f4f4f4">Defining the New Value Proposition</Heading>
        

      </Box>

      <Container maxW="1300px">
      <Flex direction="column" width="100%" gap={{base: "3rem", md: "6rem"}}>
       
       <Box maxW="660px">
         <Text size="lg">In a collaborative workshop with key stakeholders from the business,
           product, marketing, analytics, and development, I plotted, prioritised and defined
           critical focus areas for new Mendeley home page.

         </Text>
      </Box>
      <Image src={Workshop} maxW="100%" border="solid 1px rgba(60,61,59,0.2)" borderRadius="12px" />
      </Flex>


      </Container>
      <Box bg="#F6F6F6" width="100%" py={{base: "4rem", md: "8rem"}}>
        <Container maxW="1300px">
        <Flex direction={{base: "column" , md: "row"}} gap="3rem">
          <Box>
          <Heading size={{ base: '3xl', lg: '4xl' }}>Workshop Outcome</Heading>
          <Text size={{ base: 'lg', md: 'lg' }} mt={{ base: "1rem", md: "2rem" }}>The workshop helped us to define the clear goals for the project</Text>

          </Box>
        
        <Grid maxW="800px"
        templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        templateRows={{ base: 'repeat(4, auto)', lg: 'repeat(2, auto)' }}
        gap={0} >
        <GridItem p="2rem 1rem 2rem 2rem">
          <Heading size="md" mb={3} textTransform="uppercase">
            <Image src={BrandImage} width="2rem" mb={3} py="0.5rem" />Redefine brand presence</Heading>
          <Text size="lg">
            Elevate Mendeley’s brand by adopting a fresh, modern visual identity that aligns with its core values and appeals to the audience.
          </Text>
        </GridItem>
        <GridItem borderLeft={{ base: "none", lg: "solid 1px rgba(90, 93, 159, 0.25)" }} p="2rem 1rem 2rem 2rem">
          <Heading size="md" mb={3} textTransform="uppercase">
            <Image src={TrustImage} width="2rem" mb={3} />Reinforce Trust</Heading>
          <Text size="lg">
            Highlight Mendeley's capabilities to support researchers throughout their research journey, enhancing user trust and reliability.
          </Text>
        </GridItem>
        <GridItem p="2rem 1rem 2rem 2rem" borderTop={{ base: "none", lg: "solid 1px rgba(90, 93, 159, 0.25)" }}>
          <Heading size="md" mb={3} textTransform="uppercase">
            <Image src={ClarityImage} height="2rem" mb={3} />Content Clarity</Heading>
          <Text size="lg">
            Revamp content to reflect Mendeley's modernised brand image, ensuring clarity and alignment with our updated brand values.
          </Text>
        </GridItem>
        <GridItem borderLeft={{ base: "none", lg: "solid 1px rgba(90, 93, 159, 0.25)" }} borderTop={{ base: "none", lg: "solid 1px rgba(90, 93, 159, 0.25)" }} p="2rem 1rem 2rem 2rem">
          <Heading size="md" mb={3} textTransform="uppercase">
            <Image src={EngagingImage} width="2rem" mb={3} />Make it engaging</Heading>
          <Text size="lg">Communicate how Mendeley supports researchers throughout their entire research journey.</Text>
        </GridItem>



      </Grid>
      </Flex>
      </Container>
      </Box>
     


      




    </Flex>
  </Box>


);

export default InceptionAndProcess;
