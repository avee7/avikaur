import React from "react"
import { Stack, Box, Text, Heading, Image, Container, Flex, VStack, ListItem, List, HStack, UnorderedList } from '@chakra-ui/react'


const DeltaIntroduction = () => (

  <Flex gap="6rem" width="100%" justifyContent="space-between" direction={{ base: 'column'}} pt={{base: "6rem", md: "12rem"}} pb={{base: "5rem", md: "10rem"}} my="0">
     <Box>
     <Heading
      size={{ base: '4xl', md: '5xl' }}
      color="#000"
    >
      Airline Neutral Design System
    </Heading>
         
            <Text size="lg"
             mt="1.5rem" 
             
             color="#000"
             >Airline-agnostic design system for Fly Delta</Text>


     </Box>
     

    <Flex direction={{ base: "column" }} gap="8rem">
      <Box flex="1">
        <Text size="lg" maxW="585px">
        Fly Delta is Delta Airlines' comprehensive suite of digital tools, including their mobile web, iOS, and Android apps. Following Delta Airlines' acquisition of Virgin Atlantic in 2012, a project was initiated in 2016 to develop new apps specifically for Virgin Atlantic.
</Text>
        <Text size="lg" maxW="585px" pt={{base: "1rem"}}>
        The vision was to build an airline-agnostic system that would allow for easy integration of any airline's branding into the Delta app, enabling quick rollouts for future airline partners.
        </Text>

      </Box>
      <Stack alignItems="flex-start"  flexWrap="wrap" width="100%" gap={{base: "2rem", md: "3rem"}} direction={{base: 'column', md:'row'}}>
        
          <Box flex="1">
            <Text size="md" color="#7B7A7E">ROLE</Text>
            <List>
              <ListItem><Text size="lg">UI Consultant</Text></ListItem>

            </List>
          </Box>
          <Box flex="1">
            <Text size="md" color="#7B7A7E">COLLABORATORS</Text>
            <UnorderedList styleType="'•  '"> 
              <ListItem><Text size="lg">Product Managers</Text></ListItem>
              <ListItem><Text size="lg">60+ Developers</Text></ListItem>
              <ListItem><Text size="lg">External Design Agency</Text></ListItem>
              <ListItem><Text size="lg">QA Team</Text></ListItem>            
              {/* <ListItem><Text size="lg"></Text></ListItem> */}
            </UnorderedList>
          </Box>
      
        
          <Box flex="1">
            <Text size="md" color="#7B7A7E">TIMELINE</Text>
            <Text size="lg">February - October 2016</Text>
          </Box>
          <Box flex="1">
            <Text size="md" color="#7B7A7E">RESPONSIBILITIES</Text>
            <UnorderedList styleType="'•  '"> 
              <ListItem><Text size="lg">Develop Design System guidelines</Text></ListItem>
              <ListItem><Text size="lg">Define Design System Strategy & Governance</Text></ListItem>
              <ListItem><Text size="lg">Lead mobile UI development</Text></ListItem>
              <ListItem><Text size="lg">Direct iOS and Android teams</Text></ListItem>
              {/* <ListItem><Text size="lg">Direct iOS and Android teams</Text></ListItem> */}
            </UnorderedList>

          </Box>
        
      </Stack>
    </Flex>


  </Flex>


);

export default DeltaIntroduction;
