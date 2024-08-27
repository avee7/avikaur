import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Link,
  Container
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import darkLogo from '../images/avee-logo.png';
import lightLogo from '../images/avee-logo-light.png';

const Header = ({ headerBg = "transparent", textColour }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logo = textColour === 'dark' ? darkLogo : lightLogo;
  const fontColour = textColour === 'dark' ? '#0A0911' : '#f4f4f4';

  return (
    <Box
      bg={headerBg}
      position="sticky"
      top="0"
      zIndex="sticky"
      width="100%"
      backdropFilter="blur(8px)"
    >
      <Container px={{base: "1rem", xl: "3rem"}} width="100%" maxW="none">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} pt="1rem">
          <Box as={Link} href='/'>
            <Image src={logo} alt="logo" maxW="100%" />
          </Box>

          <Flex alignItems={'center'}>
            <Box>
              <Button as={Link} href="/" variant="ghost" size='lg' px={4} py={2} transition="all 0.2s" color={fontColour} borderRadius="md" _hover={{ bg: "rgba(10, 9, 17, 0.1)", textDecoration: 'none' }}>Home</Button>
              </Box>

          </Flex>
        </Flex>

        
      </Container>
    </Box>
  );
};

export default Header;
