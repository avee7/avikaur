import React from "react";
import { Stack, Box, Text, Heading, Image, Container, Flex, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ProjectHeader = ({ title, subtitle, bg, img, headingColor, headingGradient, imgMaxWidth, imgPadding }) => {
  return (
    <Box bg={bg}>
      <Container maxW="1300px">
        <Flex
          mx="auto"
          pt={{ base: '8rem', md: '11rem' }}
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
            <Text fontSize="xl" mt={2} textAlign="center">{subtitle}</Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6  }} 
          >
            <Image
              pt="10rem"
              src={img}
              borderRadius="12px 12px 0 0"
              maxWidth={imgMaxWidth}
              height="auto"
              width="100%"
              padding={imgPadding}
            />
          </motion.div>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProjectHeader;
