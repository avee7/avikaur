import React from 'react';
import { Box, Flex, Link, Image, Spacer, Stack, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <Box as="header" p={4}  
      position="sticky"
      top="0"  
      zIndex="sticky"  
      bg="rgba(10, 9, 17, 0.18)" backdropFilter="blur(60px)"
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
  
          {/* <Menu>
            <MenuButton as={Button} px={4} py={2} fontSize="20px" transition="all 0.2s" color="#e0e0e0" borderRadius="md" border="none" bg="transparent" _hover={{ bg: "#1a1a1a" }} _expanded={{ bg: "#1a1a1a" }} _focus={{ boxShadow: "outline" }}>
              Work
            </MenuButton>
            <MenuList bg="rgba(90, 93, 159, 0.18)" backdropFilter="blur(20px)" borderColor="#1a1a1a">
              <MenuItem as={Link} href="/work/mendeleyHomepageRedesign" bg="transparent" fontSize="20px" _hover={{ bg: "", textDecoration: "none", color: "#6C63FF" }}>Project 1</MenuItem>
              <MenuItem as={Link} href="/work/project2" bg="transparent" fontSize="20px" _hover={{ bg: "", textDecoration: "none", color: "#6C63FF" }}>Project 2</MenuItem>
              <MenuItem as={Link} href="/work/project3" bg="transparent" fontSize="20px" _hover={{ bg: "", textDecoration: "none", color: "#6C63FF" }}>Project 3</MenuItem>
            </MenuList>
          </Menu> */}
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
