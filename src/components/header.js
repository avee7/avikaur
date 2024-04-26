import React from 'react';
import { Box, Flex, Link, Image, Spacer, Stack, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" bg={"#0A0911"} p={4}>
      <Flex align="center" justify="space-between" maxW="1140px" mx="auto">
        <Stack padding="4px" direction="row" justify="center" align="center" spacing="0px">
          <Text fontFamily="Poppins" fontWeight="semibold" fontSize="24px" color="#FFFFFF">
              Avinash Kaur
          </Text>
        </Stack>
        {/* <Image src="images/logo.png" alt="Logo" h="30px" /> */}
        <Stack direction="row" justify="flex-start" align="flex-start" spacing="16px">
          <Link href="/" fontWeight="bold" color="#FFFFFF">Home</Link>
          <Link href="/about" fontWeight="bold" color="#FFFFFF">About</Link>
          <Link href="/contact" fontWeight="bold" color="#FFFFFF">Contact</Link>
        </Stack>
      </Flex>

    </Box>
  );
};

export default Header;
