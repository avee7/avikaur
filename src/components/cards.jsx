import React from 'react';
import { VStack, Box, Heading, Text, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CardObjectsImage from "../images/card-bg-shapes.svg";
import MendeleyProjectImage from "../images/mendley-macbook.webp";
import DeltaProjectImage from "../images/airline-neutral.svg";
import DuplicatesProjectImage from "../images/duplicates-image.png";
import { useBreakpointValue } from '@chakra-ui/react';

const Card = ({ href, title, description, imageSrc, positionAdjust, showComingSoon, imgWidth }) => {
  // Animation variants for the card visibility and hover
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "easeinout",
        // bounce: 0.4,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(108, 99, 255, 0.18)", // More pronounced shadow on hover
      transition: { duration: 0.3 }
    }
  };

  // "Coming Soon" overlay variants
  const comingSoonVariants = {
    initial: {
      opacity: 0
    },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const responsivePosition = useBreakpointValue(positionAdjust);

  return (
    <Link href={href} style={{ textDecoration: 'none' }} width="100%">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        whileHover={!showComingSoon ? "hover" : null}
      >
        <Box
          borderRadius="20px"
          position="relative"
          overflow="hidden"
          p={10}
          height="442px"
          background="linear-gradient(134deg, #6c63ff99 0%, #8374ff91 20%, #9180ff8c 40%, #9180ff8a 60%, #b6a5f48f 80%, #e0e0e09e 100%)"
        >
          <Heading size="lg" mb={3}>{title}</Heading>
          <Text size="xl">{description}</Text>
          <Image src={CardObjectsImage} position="absolute" top="0" left="0" backgroundRepeat="repeat" />
          <Image src={imageSrc} position="absolute" width={imgWidth} {...responsivePosition} />
          {showComingSoon && (
            <motion.div
              variants={comingSoonVariants}
              initial="initial"
              whileHover="hover"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <Text size="xl">Coming Soon</Text>
            </motion.div>
          )}
        </Box>
      </motion.div>
    </Link>
  );
};

const Cards = () => (
  <VStack gap={14} width="full">
    <Card
      href="./selected-projects/mendeley-homepage-redesign"
      title="Beyond Reference Management"
      description="Website Redesign / Case Study"
      imageSrc={MendeleyProjectImage}
      positionAdjust={{
        base: { top: '14rem', right: '0.5rem' },
        md: { top: '4rem', right: '-10rem' },
        lg: { top: '-4rem', right: '-10rem' },
      }}
      showComingSoon={false}
      imgWidth="66%"
    />
    <Card
      href="/"
      title="Airline Neutral: Fly Delta Airlines"
      description="Multi-brand Design System"
      imageSrc={DeltaProjectImage}
      positionAdjust={{
        base: { top: '11rem', right: '0' },
        md: { top: '4rem', right: '-10rem' },
        lg: { top: '4rem', right: '-20rem' }
      }}
      showComingSoon={true}
      imgWidth="100%"
    />
    <Card
      href="/"
      title="Duplicates Management"
      description="Product Design"
      imageSrc={DuplicatesProjectImage}
      positionAdjust={{
        base: { top: '12rem', right: '0' },
        md: { top: '4rem', right: '-26rem' },
        lg: { top: '3rem', right: '-33rem' }
      }}
      showComingSoon={true}
      imgWidth="100%"
    />
  </VStack>
);

export default Cards;

