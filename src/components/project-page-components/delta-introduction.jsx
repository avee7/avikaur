import React from "react"
import { Stack, Box, Text, Heading, Image, Container, Flex, VStack, ListItem, List, HStack } from '@chakra-ui/react'


const DeltaIntroduction = () => (

  <Flex gap="3rem" width="100%" justifyContent="space-between" direction={{base: 'column', md: 'row'}}>
    <Flex direction={{ base: "column", lg: "row" }} gap="2rem">
    <Box flex="1">
      <Text size="lg">
      In 2016, Delta Airlines acquired Virgin Atlantic, and the goal was to have Virgin Atlantic adopt Delta's mobile web app, iOS app, and Android app while allowing Virgin Atlantic to incorporate their brand elements, such as color themes, copy, and formats.
      </Text>
    </Box>
    <HStack gap="3rem" alignItems="flex-start" flexWrap="wrap">
      <VStack gap="3rem" alignItems="flex-start">
        <Box>
          <Text size="md" color="#7B7A7E">ROLE</Text>
          <List>
            <ListItem><Text size="lg">UI Consultant</Text></ListItem>
            {/* <ListItem><Text size="lg">UI development</Text></ListItem> */}
          </List>
        </Box>
        <Box>
          <Text size="md" color="#7B7A7E">COLLABORATORS</Text>
          <List>
            <ListItem><Text size="lg">60+ Developers</Text></ListItem>
            <ListItem><Text size="lg">Product Managers</Text></ListItem>
            <ListItem><Text size="lg">External Design Agency</Text></ListItem>
            <ListItem><Text size="lg">QA team</Text></ListItem>
            {/* <ListItem><Text size="lg"></Text></ListItem> */}
          </List>
        </Box>
      </VStack>
      <VStack gap="3rem" alignItems="flex-start">
        <Box>
          <Text size="md" color="#7B7A7E">TIMELINE</Text>
          <Text size="lg">February - October 2016</Text>
        </Box>
        <Box>
          <Text size="md" color="#7B7A7E">RESPONSIBILITIES</Text>
          <List>
            <ListItem><Text size="lg">Develop Design System guidelines</Text></ListItem>
            <ListItem><Text size="lg">Design System Strategy & Governance</Text></ListItem>
            <ListItem><Text size="lg">Lead mobile UI development</Text></ListItem>
            <ListItem><Text size="lg">Direct iOS and Android teams</Text></ListItem>
          </List>
          
        </Box>
      </VStack>
    </HStack>
  </Flex>


  </Flex>


);

export default DeltaIntroduction;
