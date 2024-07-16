import React from "react"
import { Box, Text, Flex, VStack, ListItem, List, HStack } from '@chakra-ui/react'


const CubixIntroduction = () => (

  <Flex gap="3rem" width="100%" justifyContent="space-between" direction={{base: 'column', md: 'row'}}>
    <Flex direction={{ base: "column", lg: "row" }} gap="3rem">
    <Box flex="1">
      <Text size="lg">
      Fly Delta is Delta Airlines' comprehensive suite of digital tools, including their mobile web, iOS, 
      and Android apps. Following Delta Airlines' acquisition of Virgin Atlantic in 2012, a project was initiated in 2016 to develop new apps specifically for Virgin Atlantic.
      </Text>
      <Text size="lg" mt="1rem">
      The vision was to build an airline-agnostic system that would allow for easy integration of any airline's branding into the Delta app, enabling quick rollouts for future airline partners.
      </Text>
      </Box>
    <HStack gap="3rem" alignItems="flex-start" maxWidth="600px">
      <VStack gap="3rem" alignItems="flex-start">
        <Box>
          <Text size="md" color="#7B7A7E">ROLE</Text>
          <List>
            <ListItem><Text size="lg">Founding Designer</Text></ListItem>
           
          </List>
        </Box>
        <Box>
          <Text size="md" color="#7B7A7E">COLLABORATORS</Text>
          <List>
            <ListItem><Text size="lg">CEO</Text></ListItem>
            <ListItem><Text size="lg">Developers</Text></ListItem>
            <ListItem><Text size="lg"></Text></ListItem>
            <ListItem><Text size="lg">Junior Product Designers</Text></ListItem>
            {/* <ListItem><Text size="lg"></Text></ListItem> */}
          </List>
        </Box>
      </VStack>
      <VStack gap="3rem" alignItems="flex-start">
        <Box>
          <Text size="md" color="#7B7A7E">TIMELINE</Text>
          <Text size="lg">March - June 2024</Text>
        </Box>
        <Box>
          <Text size="md" color="#7B7A7E">RESPONSIBILITIES</Text>
          <List>
            <ListItem><Text size="lg">Develop Multi-brand Design System plan & guidelines</Text></ListItem>
            <ListItem><Text size="lg">Setup design tokens framework</Text></ListItem>
            <ListItem><Text size="lg">Mentor junior product designers</Text></ListItem>
            {/* <ListItem><Text size="lg">Direct iOS and Android teams</Text></ListItem> */}
          </List>
          
        </Box>
      </VStack>
    </HStack>
  </Flex>


  </Flex>


);

export default CubixIntroduction;
