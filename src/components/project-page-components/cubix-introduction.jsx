import React from "react"
import { Heading, Box, Text, Flex, VStack, ListItem, UnorderedList, List, Stack } from '@chakra-ui/react'


const CubixIntroduction = () => (

  <Flex gap="6rem" width="100%" justifyContent="space-between" direction={{ base: 'column'}} pt={{base: "6rem", md: "12rem"}} pb={{base: "5rem", md: "10rem"}} my="0">
     <Box>
     <Heading
      size={{ base: '4xl', md: '5xl' }}
      color="#000"
    >
      CubiX Design System
    </Heading>
         
            <Text size="lg"
             mt="1.5rem" 
             
             color="#000"
             >A themeable design system built for multiple brands</Text>


     </Box>
     

    <Flex direction={{ base: "column" }} gap="8rem">
      <Box flex="1">
        <Text size="lg" maxW="585px">
        The CubiX Design System was envisioned to create a versatile, multi-brand design system that empowers clients to build their products quickly and easily while maintaining the flexibility to incorporate their own branding. Our mission was to deliver a bootstrap design framework that not only facilitates rapid development but also adapts seamlessly to various brand identities.
        </Text>

      </Box>
      <Stack alignItems="flex-start"  flexWrap="wrap" width="100%" gap={{base: "2rem", md: "3rem"}} direction={{base: 'column', md:'row'}}>
        
          <Box flex="1">
            <Text size="md" color="#7B7A7E">ROLE</Text>
            <List>
              <ListItem><Text size="lg">Founding Designer</Text></ListItem>

            </List>
          </Box>
          <Box flex="1">
            <Text size="md" color="#7B7A7E">COLLABORATORS</Text>
            <UnorderedList styleType="'•  '"> 
              <ListItem><Text size="lg">CEO</Text></ListItem>
              <ListItem><Text size="lg">Developers</Text></ListItem>
              
              <ListItem><Text size="lg">Junior Product Designers</Text></ListItem>
              {/* <ListItem><Text size="lg"></Text></ListItem> */}
            </UnorderedList>
          </Box>
      
        
          <Box flex="1">
            <Text size="md" color="#7B7A7E">TIMELINE</Text>
            <Text size="lg">March - June 2024</Text>
          </Box>
          <Box flex="1">
            <Text size="md" color="#7B7A7E">RESPONSIBILITIES</Text>
            <UnorderedList styleType="'•  '"> 
              <ListItem><Text size="lg">Create a multi-brand design system from the ground up</Text></ListItem>
              <ListItem><Text size="lg">Setup design tokens framework</Text></ListItem>
              <ListItem><Text size="lg">Mentor junior product designers</Text></ListItem>
              {/* <ListItem><Text size="lg">Direct iOS and Android teams</Text></ListItem> */}
            </UnorderedList>

          </Box>
        
      </Stack>
    </Flex>


  </Flex>


);

export default CubixIntroduction;
