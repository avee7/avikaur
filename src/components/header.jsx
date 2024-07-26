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
import darkLogo from '../images/avee-logo-dark.png';
import lightLogo from '../images/avee-logo-light.png';

const Header = ({ headerBg = "transparent", textColour }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logo = textColour === 'dark' ? darkLogo : lightLogo;
  const fontColour = textColour === 'dark' ? '#0A0911' : '#f4f4f4';

  return (
    <Box
      bg={headerBg}
      // boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="sticky"
      width="100vw"
      backdropFilter="blur(8px)"
    >
      <Container px={{base: "1rem", xl: "3rem"}} width="100%" maxW="none">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box as={Link} href='/' width="6rem">
            <Image src={logo} alt="logo" maxW="100%" />
          </Box>

          <Flex alignItems={'center'}>
            <Box>
              <Button as={Link} href="/" variant="ghost" size='lg' px={4} py={2} transition="all 0.2s" color={fontColour} borderRadius="md" _hover={{ bg: "rgba(10, 9, 17, 0.1)", textDecoration: 'none' }}>Home</Button>
              {/* <Button as={Link} href="/about" variant="ghost" size='lg' px={4} py={2} transition="all 0.2s" color={fontColour} borderRadius="md" _hover={{ bg: "rgba(10, 9, 17, 0.6)", textDecoration: 'none' }}>About</Button> */}
              {/* <Button as={Link} href="/contact" variant="ghost" size='lg' px={4} py={2} transition="all 0.2s" color={fontColour} borderRadius="md" _hover={{ bg: "rgba(10, 9, 17, 0.6)", textDecoration: 'none' }}>Contact</Button> */}
            </Box>

            {/* <IconButton
              icon={<HamburgerIcon />}
              aria-label={'Open Menu'}
              size={'lg'}
              display={{ md: 'none' }}
              onClick={onOpen}
              color="#e0e0e0"
              transition="all 0.2s"
              variant="ghost"
              borderRadius="md"
              _hover={{ bg: "#2A2A2A", textDecoration: 'none' }}
            /> */}
          </Flex>
        </Flex>

        {/* <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="rgba(10, 9, 17, 0.8)" boxShadow="sm">
            <DrawerCloseButton />
            <DrawerBody>
              <Stack pt={12} spacing={4}>
                <Button as={Link} transition="all 0.2s" color="#e0e0e0" borderRadius="md" _hover={{ bg: "#2A2A2A", textDecoration: 'none' }} href="/" variant="ghost" onClick={onClose}>Home</Button>
                <Button as={Link} transition="all 0.2s" color="#e0e0e0" borderRadius="md" _hover={{ bg: "#2A2A2A", textDecoration: 'none' }} href="/about" variant="ghost" onClick={onClose}>About</Button>
                <Button as={Link} transition="all 0.2s" color="#e0e0e0" borderRadius="md" _hover={{ bg: "#2A2A2A", textDecoration: 'none' }} href="/contact" variant="ghost" onClick={onClose}>Contact</Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer> */}
      </Container>
    </Box>
  );
};

export default Header;
