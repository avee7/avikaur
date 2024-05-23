import React from "react"
import {
  Stack, Box, Text, Heading, Image, Grid, GridItem, Flex, VStack,
  Divider, Container
} from '@chakra-ui/react'
import ConceptImage1 from '../../images/concept1.jpg'
import ConceptImage2 from '../../images/concept2.jpg'
import SolutionImage1 from '../../images/solution1.png'
import SolutionImage2 from '../../images/solution2.png'
import { MdErrorOutline } from 'react-icons/md';
import { MdCheckCircleOutline } from "react-icons/md";
import OldHeroImage from '../../images/old-mendeley-hero.png'
import NewHeroImage from '../../images/new-mendeley-hero.png'



const SolutionPhase = () => (
  <Container maxW="1300px" py="6rem" mt="6rem">
    <Flex direction="column" gap={2} maxW="1020px">
      <Text size="md" color="#7B7A7E" textTransform="uppercase">Building Solution</Text>
      <Heading size="xl">Sailing to Solutions</Heading>
      <Box>
        <Text size="lg" pt={2}>
          Based on the learnings from the research phase and doing a deep competitor analysis, I came up with the following
          designs for our home page.
        </Text>
      </Box>
    </Flex>
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={4}
      justifyContent="center"
      mt="4rem"
    >
      {/* GridItem Wrapper for First Column */}
      <GridItem>
        <Box minHeight="100%" display="flex" flexDirection="column">
          <Box overflow="hidden">
            <Text size="md" textTransform="uppercase" mb={2}>concept</Text>
            <Image src={ConceptImage1} maxWidth="100%" borderRadius="12px"/>
          </Box>
          <VStack gap={4} align='stretch' p={5} borderRadius="12px" flexGrow={1}>
            <Box>
              <Box as={MdErrorOutline} boxSize="2rem" color="#A51A1A" float="left" mr="1rem" />
              <Text fontSize="lg">Users didn't scroll beyond the hero area.</Text>
            </Box>
            <Box>
              <Box as={MdErrorOutline} boxSize="2rem" color="#A51A1A" float="left" mr="1rem" />
              <Text fontSize="lg">Users reported confusion between "Solutions" and "Support".</Text>
            </Box>
          </VStack>
        </Box>
      </GridItem>

      {/* GridItem Wrapper for Second Column */}
      <GridItem>
        <Box minHeight="100%" display="flex" flexDirection="column">
          <Box overflow="hidden">
            <Text size="md" textTransform="uppercase" mb={2}>solution</Text>
            <Image src={SolutionImage1} maxWidth="100%" borderRadius="12px" />
          </Box>
          <VStack gap={4} align='stretch' p={5} borderRadius="12px" flexGrow={1}>
            <Box>
              <Box as={MdCheckCircleOutline} boxSize="2rem" color="#0A640E" float="left" mr="1rem" />
              <Text fontSize="lg">The visibility of content below the hero area encouraged the users to scroll.</Text>
            </Box>
            <Box>
              <Box as={MdCheckCircleOutline} boxSize="2rem" color="#0A640E" float="left" mr="1rem" />
              <Text fontSize="lg">Terminology "Mendeley Suite" helped to remove confusion.</Text>
            </Box>
          </VStack>
        </Box>
      </GridItem>
    </Grid>

    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={4}
      justifyContent="center"
      mt="4rem"
    >
      {/* GridItem Wrapper for First Column */}
      <GridItem>
        <Box minHeight="100%" display="flex" flexDirection="column">
          <Box overflow="hidden">
            <Text size="md" textTransform="uppercase" mb={2}>concept</Text>
            <Image src={ConceptImage2} maxWidth="100%" borderRadius="12px" />
          </Box>
          <VStack gap={4} align='stretch' p={5} borderRadius="12px" flexGrow={1}>
            <Box>
              <Box as={MdErrorOutline} boxSize="2rem" color="#A51A1A" float="left" mr="1rem" />
              <Text fontSize="lg">Users reported that the images were unclear, the had to squint to understand.</Text>
            </Box>
            <Box>
              <Box as={MdErrorOutline} boxSize="2rem" color="#A51A1A" float="left" mr="1rem" />
              <Text fontSize="lg">Many users didn't notice the CTAs on use case sections.</Text>
            </Box>
          </VStack>
        </Box>
      </GridItem>

      {/* GridItem Wrapper for Second Column */}
      <GridItem>
        <Box minHeight="100%" display="flex" flexDirection="column">
          <Box overflow="hidden">
            <Text size="md" textTransform="uppercase" mb={2}>Solution</Text>
            <Image src={SolutionImage2} maxWidth="100%" borderRadius="12px"/>
          </Box>
          <VStack gap={4} align='stretch' p={5} borderRadius="12px" flexGrow={1}>
            <Box>
              <Box as={MdCheckCircleOutline} boxSize="2rem" color="#0A640E" float="left" mr="1rem" />
              <Text fontSize="lg">The imagery was clear and less cluttered and received a positive feedback.</Text>
            </Box>
            <Box>
              <Box as={MdCheckCircleOutline} boxSize="2rem" color="#0A640E" float="left" mr="1rem" />
              <Text fontSize="lg">The CTAs were made bold and visible, with secondary actions given less visual weight.</Text>
            </Box>
          </VStack>
        </Box>
      </GridItem>
    </Grid>

    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={4}
      justifyContent="center"
      mt="4rem"
    >
      {/* GridItem Wrapper for First Column */}
      <GridItem>
        <Box minHeight="100%" display="flex" flexDirection="column">
          <Box overflow="hidden">
            <Text size="xl" textTransform="uppercase" mb={2}>old experience</Text>
            <Image src={OldHeroImage} maxWidth="100%" borderRadius="12px" />
          </Box>
          {/* <VStack gap={4} align='stretch' p={5} borderRadius="12px" flexGrow={1}>
            <Box>
              <Box as={MdErrorOutline} boxSize="2rem" color="#A51A1A" float="left" mr="1rem" />
              <Text fontSize="lg">Users reported that the images were unclear, the had to squint to understand.</Text>
            </Box>
            <Box>
              <Box as={MdErrorOutline} boxSize="2rem" color="#A51A1A" float="left" mr="1rem" />
              <Text fontSize="lg">Many users didn't notice the CTAs on use case sections.</Text>
            </Box>
          </VStack> */}
        </Box>
      </GridItem>

      {/* GridItem Wrapper for Second Column */}
      <GridItem>
        <Box minHeight="100%" display="flex" flexDirection="column">
          <Box overflow="hidden">
            <Text size="xl" textTransform="uppercase" mb={2}>New experience</Text>
            <Image src={NewHeroImage} maxWidth="100%" borderRadius="12px"/>
          </Box>
          {/* <VStack gap={4} align='stretch' p={5} borderRadius="12px" flexGrow={1}>
            <Box>
              <Box as={MdCheckCircleOutline} boxSize="2rem" color="#0A640E" float="left" mr="1rem" />
              <Text fontSize="lg">The imagery was clear and less cluttered and received a positive feedback.</Text>
            </Box>
            <Box>
              <Box as={MdCheckCircleOutline} boxSize="2rem" color="#0A640E" float="left" mr="1rem" />
              <Text fontSize="lg">The CTAs were made bold and visible, with secondary actions given less visual weight.</Text>
            </Box>
          </VStack> */}
        </Box>
      </GridItem>
    </Grid>
 

</Container>

);

export default SolutionPhase;
