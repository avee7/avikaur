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
import logo from '../images/logo.png';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="rgba(10, 9, 17, 0.8)" boxShadow="sm" position="sticky" top="0"
    zIndex="sticky" 
    width="100%">
      <Container maxW="1300px" 
    width="100%"
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box as={Link} href='/' width="10rem" mt="2">
            <Image src={logo} alt="logo" maxW="100%" />
          </Box>

          <Flex alignItems={'center'}>
            <Box display={{ base: 'none', md: 'flex' }}>
              <Button as={Link} href="/" variant="ghost" size='lg' px={4} py={2} transition="all 0.2s" color="#e0e0e0" borderRadius="md" _hover={{ bg: "#2a2a2a", textDecoration: 'none' }}>Home</Button>
              <Button as={Link} href="/about" variant="ghost" size='lg' px={4} py={2} transition="all 0.2s" color="#e0e0e0" borderRadius="md" _hover={{ bg: "#2a2a2a", textDecoration: 'none' }}>About</Button>
              <Button as={Link} href="/contact" variant="ghost" size='lg' px={4} py={2} transition="all 0.2s" color="#e0e0e0" borderRadius="md" _hover={{ bg: "#2a2a2a", textDecoration: 'none' }}>Contact</Button>
            </Box>

            {/* Hamburger Icon on the right for mobile view */}
            <IconButton
              icon={<HamburgerIcon />}
              aria-label={'Open Menu'}
              size={'lg'}
              // mr={2}
              // height="40px"
              display={{ md: 'none' }}
              onClick={onOpen}
              color="#e0e0e0"
              transition="all 0.2s"
              // borderColor="#7B7A7E"
              variant="ghost"
              borderRadius="md"
              _hover={{ bg: "#2A2A2A", textDecoration: 'none' }}
            />
          </Flex>
        </Flex>

        {/* Mobile menu as an overlay */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}  >
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
        </Drawer>
      </Container>
    </Box>
  );
};

export default Navbar;