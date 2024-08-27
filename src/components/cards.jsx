import React from 'react';
import { Box, Heading, Text, Image, Link, Flex, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MendeleyProjectImage from "../images/mendeley-project-image.png";
import DeltaProjectImage from "../images/airline-neutral.png";
import DuplicatesProjectImage from "../images/mrm-hero-img.png";
import CubixHero from "../images/cubix-card.png";

const Card = ({ href, title, description, imageSrc, showComingSoon, imgWidth, imgHeight, index, scale, year }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
        <Box
          borderRadius="20px"
          position="relative"
          overflow="hidden"
          p={{base: "2rem", md: "4rem" }}
          height={{base: '450px', xl: "100%"}}
          border="solid 1px rgba(224,224,224, 1)"
          bg="#eff2f7"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={imageSrc} height={imgHeight} maxW="100%" transform={`scale(${scale})`} />
          {showComingSoon && (
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="rgba(0, 0, 0, 0.5)"
            >
              <Text size="2xl" color="#000">Coming Soon</Text>
            </Box>
          )}
        </Box>
        <Box mt="0.8rem">
          <Heading size="xl" mb={3}>{title}</Heading>
          <Text size="lg">{description}</Text>
        </Box>
    </Link>
  );
};

const Cards = () => (
  <Grid
    maxW="1300px"
    width="100%"
    mx="auto"
    templateRows={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
    templateColumns={{ base: "1fr", md: "2fr 1fr" }}
    gap={4}
  >
    {/* The first card spanning the entire row */}
    <GridItem colSpan={{ base: 1, md: 2 }}>
      <Card
        href="./selected-projects/mendeley-homepage-redesign"
        title="Beyond Reference Management"
        description="Website Redesign / Case Study"
        imageSrc={MendeleyProjectImage}
        showComingSoon={false}
        imgWidth="100%"
        imgHeight="auto"
        index={0} 
        year="2022"
        scale="1.2"
      />
    </GridItem>

    {/* The second card taking the full height of two rows */}
    <GridItem rowSpan={2}>
      <Card
        href="./selected-projects/cubix-design-system"
        title="Cubix Design System"
        description="Multi-brand, themeable design system"
        imageSrc={CubixHero}
        showComingSoon={false}
        imgWidth="100%"
        imgHeight="auto"
        index={1} 
        year="2024"
        scale="1.2"
      />
    </GridItem>

    {/* The third and fourth cards, each taking half of the second column */}
    <GridItem>
      <Card
        href="./selected-projects/airline-neutral-design-system"
        title="Airline Neutral: Fly Delta Airlines"
        description="Multi-brand Design System"
        imageSrc={DeltaProjectImage}
        showComingSoon={false}
        imgWidth="auto"
        imgHeight="80%"
        index={3}
        year="2016"
        scale="1.2"
      />
    </GridItem>

    <GridItem>
      <Card
        href="./selected-projects/mrm-duplicate-management"
        title="Duplicate Management"
        description="Product Design"
        imageSrc={DuplicatesProjectImage}
        showComingSoon={false}
        imgWidth="100%"
        imgHeight="auto"
        index={2}
        year="2023"
        scale="1.2"
      />
    </GridItem>
  </Grid>
);

export default Cards;
