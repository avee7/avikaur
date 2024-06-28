import React from 'react';
import { VStack, Box, Heading, Text, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CardObjectsImage from "../images/card-bg-shapes.svg";
import MendeleyProjectImage from "../images/mendeley-macbook.png";
import DeltaProjectImage from "../images/airline-neutral.svg";
import DuplicatesProjectImage from "../images/duplicates-image.png";
import { useBreakpointValue } from '@chakra-ui/react';

const Card = ({ href, title, description, imageSrc, positionAdjust, showComingSoon, imgWidth, bgImagePosition }) => {
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
  const responsiveWidth = useBreakpointValue(imgWidth);

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
          border="solid 1px #5A5D9F"
          background={`url(${CardObjectsImage})`}
          bgPosition={`${bgImagePosition?.top} ${bgImagePosition?.left}`}
          bgRepeat="repeat"
          bgSize="cover"
        >
          <Heading size="lg" mb={3}>{title}</Heading>
          <Text size="xl">{description}</Text>
          
          <Image src={imageSrc} position="absolute" {...responsiveWidth} {...responsivePosition} />
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
        base: { top: 'auto', right: '0', bottom: '1rem' },
        md: { top: '5rem', right: '-12rem' },
        lg: { top: '2rem', right: '-10rem' },
        xl: { top: '-5rem', right: '-10rem' },
      }}
      showComingSoon={false}
      imgWidth={{
        base: { width: '100%' },
        md: { width: '80%' },
        lg: { width: '68%' },
      }}
      bgImagePosition={{ top: '20px', left: '30px' }}
    />
    <Card
      href="./selected-projects/airline-neutral-design-system/"
      title="Airline Neutral: Fly Delta Airlines"
      description="Multi-brand Design System"
      imageSrc={DeltaProjectImage}
      positionAdjust={{
        base: { top: '11rem', right: '0' },
        md: { top: '4rem', right: '-10rem' },
        lg: { top: '4rem', right: '-20rem' }
      }}
      showComingSoon={false}
      imgWidth="100%"
      bgImagePosition={{ top: '-70px', left: '-1036px' }}
    />
    <Card
      href="/"
      title="Duplicates Management"
      description="Product Design"
      imageSrc={DuplicatesProjectImage}
      positionAdjust={{
        base: { top: 'auto', right: '0', bottom: '1rem'},
        md: { top: '6rem', right: '-15rem' },
        lg: { top: '1rem', right: '-25rem' }
      }}
      showComingSoon={true}
      imgWidth="100%"
      bgImagePosition={{ top: '100px', left: '50px' }}
    />
  </VStack>
);

export default Cards;

