import React from "react";
import { Box, Text, Heading, Container, HStack, Flex, Link } from "@chakra-ui/react";

const Footer = () => (
  <Box bg="#eee" w="100%" zIndex="9" position="relative">
    <Container maxW="1300px" pt="4rem" pb="2rem" color="#000">
      <Flex
        direction={{ base: 'column', md: 'row' }} // Change direction based on screen size
        justifyContent={{ base: 'flex-start', md: 'space-between' }} // Add space between items on larger screens
        alignItems={{ base: 'flex-start', md: 'flex-start' }} // Adjust alignment based on screen size
        gap={{ base: '2rem', md: '0' }} // Add gap for better spacing on small screens
      >
        <HStack
          alignItems="flex-start"
          justifyContent="space-between"
          height="100%"
          gap="2rem"
          pb={{ base: "2rem", md: "5rem" }}
          width={{ base: '100%', md: 'auto' }} // Adjust width based on screen size
        >
          
            
         
            <Link href="mailto:avikaur.design3@gmail.com">Email</Link>
            <Link fontSize="lg" href="https://www.linkedin.com/in/avinash-kaur3/" isExternal>Linkedin</Link>
              <Link fontSize="lg" href="https://adplist.org/mentors/avinash-kaur" isExternal>ADPList</Link>
              <Link fontSize="lg" href="https://twitter.com/avee_design" isExternal>X/Twitter</Link>
           
         
        </HStack>

        
      </Flex>

      <Box width="100%" pt={{ base: '5rem', md: '1rem' }}>
        <Text fontSize="sm">© 2024 Avinash Kaur. All Rights Reserved</Text>
      </Box>
    </Container>
  </Box>
);

export default Footer;

