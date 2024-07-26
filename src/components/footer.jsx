import React from "react";
import { Box, Text, Heading, Container, HStack, Flex, Link } from "@chakra-ui/react";

const Footer = () => (
  <Box bg="#0A0911" w="100%" zIndex="9" position="relative">
    <Container maxW="1300px" pt={{base: "4rem", md:"8rem"}}  pb={{base: "2rem", md:"4rem"}} color="#000">
      <Flex
        direction={{ base: 'column' }} // Change direction based on screen size
        justifyContent={{ base: 'flex-start', md: 'space-between' }} // Add space between items on larger screens
        alignItems={{ base: 'flex-start', md: 'flex-start' }} // Adjust alignment based on screen size
        gap={{ base: '2rem', md: '0' }} // Add gap for better spacing on small screens
      >
        <Heading size={{base: "3xl", md:"4xl"}} pb={{base: "2rem", md:"4rem"}} color="#f4f4f4">Let's connect.</Heading>
        <HStack
          alignItems="flex-start"
          justifyContent="space-between"
          height="100%"
          gap="2rem"
          pb={{ base: "2rem", md: "5rem" }}
          width={{ base: '100%', md: 'auto' }} // Adjust width based on screen size
        >
          
            
         
            <Link textDecoration="underline" href="mailto:avikaur.design3@gmail.com" color="#a6ffba">Email</Link>
            <Link textDecoration="underline" color="#a6ffba" fontSize="lg" href="https://www.linkedin.com/in/avinash-kaur3/" isExternal>Linkedin</Link>
              <Link textDecoration="underline" color="#a6ffba" fontSize="lg" href="https://adplist.org/mentors/avinash-kaur" isExternal>ADPList</Link>
              <Link textDecoration="underline" color="#a6ffba" fontSize="lg" href="https://twitter.com/avee_design" isExternal>X/Twitter</Link>
           
         
        </HStack>

        
      </Flex>

      {/* <Box width="100%" pt={{ base: '5rem', md: '1rem' }}>
        <Text fontSize="sm" color="#f4f4f4">© 2024 Avinash Kaur. All Rights Reserved</Text>
      </Box> */}
    </Container>
  </Box>
);

export default Footer;

