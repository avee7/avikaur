import React from "react";
import { Stack, Box, Text, Heading, Image, Container, Flex, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ProjectHeader = ({ title, subtitle, bg, img, headingColor, headingGradient, imgMaxWidth, imgPadding }) => {
  return (
    <Box bg={bg}>
      <Container maxW="1300px">
        <Flex
          mx="auto"
          p={{ base: '8rem 0 3rem', md: '10rem 0 4rem' }}
          alignItems="center"
          justifyItems="center"
          direction="column"
          width="100%"
          position="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              size={{ base: '2xl', md: '3xl' }}
              textAlign="center"
              bgGradient={headingGradient || 'none'}
              bgClip={headingGradient ? 'text' : 'initial'}
              color={headingGradient ? 'transparent' : headingColor}
            >
              {title}
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Text size="xl"
             mt="1.5rem" 
             textAlign="center"
             color={headingColor ? headingColor : '#e0e0e0'}
             >{subtitle}</Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6  }} 
          >
            <Image
              src={img}
              borderRadius="12px 12px 0 0"
              maxWidth={imgMaxWidth}
              height="auto"
              width="100%"
              mx="auto"
              padding={imgPadding}
            />
          </motion.div>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProjectHeader;
