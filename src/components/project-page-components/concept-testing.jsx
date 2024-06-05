import React from "react"
import {
  Stack, Box, Text, Heading, Image, Grid, GridItem, Flex, VStack,
  Divider, Container, SimpleGrid
} from '@chakra-ui/react'



const ConceptTesting = () => {
  const DataCard = ({ title, methods, users, tools }) => (
    <Box
      p={6}
      // borderWidth="1px"
      // borderColor="rgba(90, 93, 159, 0.25)"
      borderRadius="lg"
      overflow="hidden"
      bg="#1a1a1a"
      color="#e0e0e0"
      mb={4}
    >
      <Heading size="md" mb={2}>{title}</Heading>
      <Text size="md" color="#7B7A7E" textTransform="uppercase" mt={6}>Methods</Text>
      <Text>{methods}</Text>
      <Text size="md" color="#7B7A7E" textTransform="uppercase" mt={2}>Users</Text>
      <Text>{users}</Text>
      <Text size="md" color="#7B7A7E" textTransform="uppercase" mt={2}>Tools</Text>
      <Text>{tools}</Text>
    </Box>
  );

  return (
    <Box mt={{ base: "6rem", lg: "8rem" }}>
      <Flex direction="column" gap={2} maxW="1020px">
        <Text size="md" color="#7B7A7E" textTransform="uppercase">Concept testing</Text>
        <Heading size={{ base: 'lg', md: 'xl' }}>Testing the Waters</Heading>
        <Box>
          <Text size="lg" pt={2}>
            I translated conceptual ideas into tangible prototypes and validated them through comprehensive
            user research. The objectives were to assess the clarity of Mendeley's value proposition,
            evaluate trust in the brand and user engagement with the product,
            determine the understandability of the content, and
            analyse the discoverability and findability of the content.
            
            </Text>
            <Text size="lg" pt={2}>
            To better understand the user needs, I used a hybrid approach comprising of qual and quant methods.
            </Text>

          <Box mt="2rem">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <DataCard
                title="Qualitative"
                methods="Remote user interviews, Semi-Structured"
                users="6 users"
                tools="Zoom, Confluence"
              />
              <DataCard
                title="Quantitative"
                methods="First click test, 5-second test"
                users="20 responses"
                tools="Ballpark"
              />
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>

    </Box>
  )



};

export default ConceptTesting;
