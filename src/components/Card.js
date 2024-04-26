import React from 'react'
import { Icon, Box, Circle, Stack, Text } from '@chakra-ui/react'

export const Card = () => (
  <Icon>
    <Box>
      <Box>
        <Box
          borderRadius="20px"
          width="1024px"
          height="442px"
          maxWidth="100%"
          background="linear-gradient(134deg, #6c63ff99 0%, #8374ff91 20%, #9180ff8c 40%, #9180ff8a 60%, #b6a5f48f 80%, #e0e0e09e 100%)"
        />
        <Circle size="26px" background="rgba(145, 128, 255, 0.2)" />
        <Circle size="134px" background="rgba(145, 128, 255, 0.2)" />
        <Circle size="75px" background="rgba(108, 99, 255, 0.2)" />
        <span className="unsupported" />
        <span className="unsupported" />
        <span className="unsupported" />
        <span className="unsupported" />
        <span className="unsupported" />
        <Circle size="202px" background="rgba(108, 99, 255, 0.4)" />
      </Box>
      <Stack justify="flex-start" align="flex-start">
        <Text
          fontFamily="Poppins"
          fontWeight="semibold"
          fontSize="32px"
          color="#E0E0E0"
        >
          Airline Neutral - Fly Delta Airlines
        </Text>
        <Text
          fontFamily="Poppins"
          fontWeight="regular"
          fontSize="20px"
          color="#E0E0E0"
        >
          Multi-Brand Design System
        </Text>
      </Stack>
    </Box>
  </Icon>
)