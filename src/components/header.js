import React from 'react';
import { Box, Flex, Link, Image, Spacer, Stack, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <Box as="header" p={4}  
      position="sticky"
      top="0"  
      zIndex="sticky"  
      bg="rgba(10, 9, 17, 0.8)" 
      // backdropFilter="blur(60px)"
      boxShadow="sm"  // Optional shadow for better visibility over the content below
      width="full" 
    >
      <Flex align="center" justify="space-between" maxW="1300px" mx="auto">
        <Box as={Link} href='/' width="10rem">
          <Image src={logo} alt="logo" maxW="100%"  / >
        </Box>
        
        <Stack direction="row" justify="flex-start" align="center" spacing="20px">
          <Link href="/" size='xl' px={4} py={2} transition="all 0.2s" color="#e0e0e0" borderRadius="md" _hover={{ bg: "#1a1a1a", textDecoration: 'none' }}>
            Home</Link>
  
          <Link href="/about" size='xl' px={4} py={2} transition="all 0.2s" color="#e0e0e0" borderRadius="md" _hover={{ bg: "#1a1a1a", textDecoration: 'none' }}>
          About</Link>
          <Link href="/contact" size='xl' px={4} py={2} transition="all 0.2s" color="#e0e0e0" borderRadius="md" _hover={{ bg: "#1a1a1a", textDecoration: 'none' }}>
          Contact</Link>
        </Stack>
      </Flex>

    </Box>
  );
};

export default Header;
