import React from "react";
import { Stack, Box, Text, Heading, Image, Container, Flex, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ProjectHeader = ({ title, subtitle, bg, img, marginTop }) => {
  return (
    <Box bg={bg} position="fixed" top="0" left="0" height={{base: "70vh", md: "100vh"}} width="100%">
      <Container maxW="1300px" m={{base: "0", md: "0 auto"}} width="100vw">
        <Flex
          mx="auto"
          p={{ base: '3rem 0', md: '4rem 0' }}
          alignItems="center"
          justifyContent="center"
          direction="column"
          width="100%"
          position="relative"
          height={{base: "70vh", md: "100vh"}}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6  }} 
          >
            <Image
              src={img}
              borderRadius="12px 12px 0 0"
              maxWidth="100%"
              height="auto"
              width="auto"
              mx="auto"
              mt={marginTop}
            />
          </motion.div>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProjectHeader;
