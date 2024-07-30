import React from 'react';
import { Box, Heading, Text, Image, Link, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MendeleyProjectImage from "../images/mendeley-project-image.png";
import DeltaProjectImage from "../images/airline-neutral.png";
import DuplicatesProjectImage from "../images/duplicates-image.png";
import CubixHero from "../images/cubix-card.png"

const Card = ({ href, title, description, imageSrc, showComingSoon, imgWidth, imgHeight, index, scale, year }) => {
  const cardVariants = {
    // offscreen: {
    //   y: 50,
    //   opacity: 0
    // },
    // onscreen: {
    //   y: 0,
    //   opacity: 1,
    //   transition: {
    //     type: "easeinout",
    //     duration: 0.8,
    //     delay: index === 0 || index === 1 ? 1.6 : 0 , // Add delay for the first card
    //   }
    // },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const comingSoonVariants = {
    initial: {
      opacity: 0
    },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    }
  };

  return (
    <Link href={href} style={{ textDecoration: 'none' }} maxW={{base: "none", md: "48%", xl: "47%"}}  mb="5rem">
      <motion.div
        // initial="offscreen"
        // whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        whileHover={!showComingSoon ? "hover" : null}
      >
        <Box
          borderRadius="20px"
          position="relative"
          overflow="hidden"
          p={{base: "2rem", md: "4rem" }}
          height={{base: '450px', xl: "600px"}}
          border="solid 1px rgba(224,224,224, 1)"
          bg="#eff2f7"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={imageSrc} height={imgHeight} maxW="100%" transform={`scale(${scale})`} />
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
              <Text size="2xl" color="#000">Coming Soon</Text>
            </motion.div>
          )}
        </Box>
        <Box mt="0.8rem">
          <Heading size="xl" mb={3}>{title}</Heading>
          <Text size="lg">{description}</Text>
          
        </Box>
      </motion.div>
    </Link>
  );
};

const Cards = () => (
  <Flex
    wrap="wrap"
    maxW="1300px"
    width="100%"
    mx="auto"
    justifyContent="space-between"
  >
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
      scale="1.5"
    />
    <Card
      href="./selected-projects/cubix-design-system/"
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
    {/* <Card
      href="/"
      title="Airline Neutral: Fly Delta Airlines"
      description="Multi-brand Design System"
      imageSrc={DeltaProjectImage}
      showComingSoon={true}
      imgWidth="100%"
      imgHeight="auto"
      index={3}
      year="2016"
      scale="1.2"
    /> */}
    <Card
      href="/"
      title="Duplicates Management"
      description="Product Design"
      imageSrc={DuplicatesProjectImage}
      showComingSoon={true}
      imgWidth="100%"
      imgHeight="auto"
      index={2}
      year="2023"
      scale="1.5"
    />
    
  </Flex>
);

export default Cards;
