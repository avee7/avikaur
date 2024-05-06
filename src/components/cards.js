import React from 'react'
import { Heading, Icon, Box, Circle, Stack, Text, Image, Link, VStack } from '@chakra-ui/react'
import CardObjectsImage from "../images/card-bg-shapes.svg"
import MendeleyProjectImage from "../images/mendley-macbook.svg"
import DeltaProjectImage from "../images/airline-neutral.svg"
import DuplicatesProjectImage from "../images/duplicates-image.png"

const Cards = () => (
  <VStack gap={14} width="full">
    <Link href="./selected-projects/mendeley-homepage-redesign" style={{ textDecoration: 'none' }} width="100%">
      <Box
        borderRadius="20px"
        position="relative"
        overflow="hidden"

        p={10}
        height="442px"
        background="linear-gradient(134deg, #6c63ff99 0%, #8374ff91 20%, #9180ff8c 40%, #9180ff8a 60%, #b6a5f48f 80%, #e0e0e09e 100%)">
        <Heading size="lg" mb={3}>Beyond Reference Management</Heading>
        <Text size="xl">
          Website Redesign / Case Study
        </Text>
        <Image src={CardObjectsImage} position="absolute" top="0" left="0" backgroundRepeat="repeat" />
        <Image src={MendeleyProjectImage} position="absolute" top="-4rem" right="-10rem" />

      </Box>

    </Link>
    <Link href="/" style={{ textDecoration: 'none' }} width="100%">
      <Box
        borderRadius="20px"
        position="relative"
        overflow="hidden"

        p={10}
        height="442px"
        background="linear-gradient(134deg, #6c63ff99 0%, #8374ff91 20%, #9180ff8c 40%, #9180ff8a 60%, #b6a5f48f 80%, #e0e0e09e 100%)">
        <Heading size="lg" mb={3}>Airline Neutral: Fly Delta Airlines</Heading>
        <Text size="xl">
          Multi-brand Design System
        </Text>
        <Image src={CardObjectsImage} position="absolute" top="0" left="0" backgroundRepeat="repeat" />
        <Image src={DeltaProjectImage} position="absolute" top="4rem" right="-20rem" />

      </Box>

    </Link>
    <Link href="/" style={{ textDecoration: 'none' }} width="100%">
      <Box
        borderRadius="20px"
        position="relative"
        overflow="hidden"

        p={10}
        height="442px"
        background="linear-gradient(134deg, #6c63ff99 0%, #8374ff91 20%, #9180ff8c 40%, #9180ff8a 60%, #b6a5f48f 80%, #e0e0e09e 100%)">
        <Heading size="lg" mb={3}>Duplicates Management</Heading>
        <Text size="xl">
          Product Design
        </Text>
        <Image src={CardObjectsImage} position="absolute" top="0" left="0" backgroundRepeat="repeat" />
        <Image src={DuplicatesProjectImage} position="absolute" top="3rem" right="-36rem" borderRadius={4} />

      </Box>

    </Link>
  </VStack>
)
export default Cards;