import React from 'react';
import {
  Box,
  Flex,
  Button,
  Image,
  Link,
  Container
} from '@chakra-ui/react';
import logo from '../images/av-logo.png';

const Header = ({ headerBg = "transparent", textColour, fullWidth }) => {
  const fontColour = textColour === 'dark' ? '#0A0911' : '#f4f4f4';
  const headerFullWidth = fullWidth ? true : false;

  return (
    <Box
      bg={headerBg}
      position={headerFullWidth ? "sticky" : "relative"}
      top="0"
      zIndex="sticky"
      width="100%"
    >
      <Container 
        px={headerFullWidth ? { base: "2rem", xl: "3rem" } : { base: "2rem", xl: "1rem" }} 
        width="100%" 
        maxW={headerFullWidth ? "none" : "1300px"}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} pt="1rem">
          <Box as={Link} href='/' width="3rem">
            <Image src={logo} alt="logo" maxW="100%" />
          </Box>

          <Flex alignItems={'center'}>
            <Box>
              <Button 
                as={Link} 
                href="/" 
                variant="ghost" 
                size='lg' 
                px={4} 
                py={2} 
                transition="all 0.2s" 
                color={fontColour} 
                borderRadius="md" 
                _hover={{ bg: "rgba(10, 9, 17, 0.1)", textDecoration: 'none' }}
              >
                Home
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
