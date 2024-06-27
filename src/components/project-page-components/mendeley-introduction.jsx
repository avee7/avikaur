import React from "react"
import { Stack, Box, Text, Heading, Image, Container, Flex, VStack, ListItem, List, HStack } from '@chakra-ui/react'


const MendeleyIntroduction = () => (

  <Flex gap="3rem" width="100%" justifyContent="space-between" direction={{base: 'column', md: 'row'}}>
    <Flex direction={{ base: "column", lg: "row" }} gap="2rem">
    <Box flex="1">
      <Text size="lg">
      Mendeley streamlines your research with a comprehensive suite that manages references, enhances knowledge, and facilitates collaboration, simplifying the journey from writing to publication.

      </Text>
      <Text size="lg" mt="1rem">
        The strategic redesign of mendeley.com, was led with the aim to modernise
        the interface and effectively communicate its value proposition to researchers worldwide.
        Key objectives included enhancing user experience, updating branding elements, and optimising content delivery.
      </Text>
    </Box>
    <HStack gap="3rem" alignItems="flex-start" flexWrap="wrap">
      <VStack gap="3rem" alignItems="flex-start">
        <Box>
          <Text size="md" color="#7B7A7E">ROLE</Text>
          <List>
            <ListItem><Text size="lg">Research</Text></ListItem>
            <ListItem><Text size="lg">UX and UI Design</Text></ListItem>
          </List>
        </Box>
        <Box>
          <Text size="md" color="#7B7A7E">COLLABORATORS</Text>
          <List>
            <ListItem><Text size="lg">Developers</Text></ListItem>
            <ListItem><Text size="lg">Marketing lead</Text></ListItem>
            <ListItem><Text size="lg">Product Senior Director</Text></ListItem>
            <ListItem><Text size="lg">Product Managers</Text></ListItem>
            <ListItem><Text size="lg">Analytics team</Text></ListItem>
          </List>
        </Box>
      </VStack>
      <VStack gap="3rem" alignItems="flex-start">
        <Box>
          <Text size="md" color="#7B7A7E">TIMELINE</Text>
          <Text size="lg">July - December 2022</Text>
        </Box>
      </VStack>
    </HStack>
  </Flex>


  </Flex>


);

export default MendeleyIntroduction;
