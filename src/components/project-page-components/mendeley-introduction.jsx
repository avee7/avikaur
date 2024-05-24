import React from "react"
import { Stack, Box, Text, Heading, Image, Container, Flex, VStack, ListItem, List } from '@chakra-ui/react'


const MendeleyIntroduction = () => (
  
    <Flex gap="3rem" width="100%" justifyContent="space-between">
      <Box flex="1" pl="2rem">
        <Text size="lg">The strategic redesign of Mendeley.com, was led with the aim to modernise
          the interface and effectively communicate its value proposition to researchers worldwide. Key objectives included enhancing user experience, updating branding elements, and optimising content delivery.</Text>
      </Box>
      <VStack gap="3rem" alignItems="flex-start">
        <Box>
          <Text size="md" color="#7B7A7E">ROLE</Text>
          <Text size="lg">Research, UX and UI</Text>
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
          <Text size="lg">July 2022 - December 2022</Text>
        </Box>
        {/* <Box>
              <Text>COLLABORATORS</Text>
              <ul>
                <li>Developers</li>
                <li>Marketing lead</li>
                <li>Product Management Senior Director</li>
                <li>Analytics team</li>
                <li>Project Managers</li>
              </ul>
            </Box> */}

      </VStack>


    </Flex>
  

);

export default MendeleyIntroduction;
