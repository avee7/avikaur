import React from 'react';
import { Box, Heading, Text, Image, Link, Flex, Grid, GridItem, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MendeleyProjectImage from "../images/mendeley-image.png";
import DeltaProjectImage from "../images/delta-image.png";
import DuplicatesProjectImage from "../images/mrm-image.png";
import CubixHero from "../images/cubix-image.png";

const Card = ({ href, title, description, imageSrc, imgHeight, index, scale, textColor }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }} display="inline-flex">
      <Box
        borderRadius="20px"
        position="relative"
        overflow="hidden"
        border="solid 1px rgba(224,224,224, 1)"
      >
        <Image src={imageSrc} width="auto" maxW="100%" />
        <Box display={{base: "none", xl: "block"}} pos="absolute" top={{base: "-10rem", md: "1.25rem"}} left={{base: "-10rem", md: "1.25rem"}}>
          <Text size="md" textTransform="uppercase" color={textColor}>{description}</Text>
          <Heading size="xl" color={textColor} mt="4px">{title}</Heading>
        </Box>
      </Box>

    </Link>
  );
};

const Cards = () => (
  <Box>
    <Container maxW="1300px">
      <Grid
        maxW="1300px"
        width="100%"
        templateRows="1"
        templateColumns="1"
      >
        <GridItem>
          <Card
            href="./selected-projects/mendeley-homepage-redesign"
            title="Beyond Reference Management"
            description="Website Redesign / Case Study"
            imageSrc={MendeleyProjectImage}
            textColor="#E0E0E0"
            index={0}
          />
        </GridItem>

      </Grid>

      <Grid
        mt="2rem"
        templateRows='repeat(6, 1fr)'
        templateColumns='repeat(6, 1fr)'
        gap="2rem"
      // height="896px"
      >

        {/* <GridItem rowSpan={6} colSpan={{ base: 6 }}>
          <Card
            href="./selected-projects/mendeley-homepage-redesign"
            title="Beyond Reference Management"
            description="Website Redesign / Case Study"
            imageSrc={MendeleyProjectImage}
            textColor="#E0E0E0"
            index={0}
          />
        </GridItem> */}
        <GridItem rowSpan={6} colSpan={{ base: 6, md: 4 }}>
          <Card
            href="./selected-projects/cubix-design-system"
            title="Cubix Design System"
            description="Multi-brand, themeable design system"
            imageSrc={CubixHero}
            textColor="#E0E0E0"
            index={1}
          />

        </GridItem>
        <GridItem rowSpan={3} colSpan={{ base: 6, md: 2 }}>

          <Card
            href="./selected-projects/airline-neutral-design-system"
            title="Fly Delta Airlines"
            description="Multi-brand design system"
            imageSrc={DeltaProjectImage}
            textColor="#0A0911"
            index={3}

          />
        </GridItem>
        <GridItem rowSpan={3} colSpan={{ base: 6, md: 2 }}>
          <Card
            href="./selected-projects/mrm-duplicate-management"
            title="Duplicate Management"
            description="Product Design"
            imageSrc={DuplicatesProjectImage}
            textColor="#E0E0E0"
            index={2}

          />
        </GridItem>

      </Grid>


    </Container>
  </Box>




);

export default Cards;
