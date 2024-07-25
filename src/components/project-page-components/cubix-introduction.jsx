import React from "react"
import { Box, Text, Flex, VStack, ListItem, UnorderedList, List, Stack } from '@chakra-ui/react'


const CubixIntroduction = () => (

  <Flex gap="3rem" width="100%" justifyContent="space-between" direction={{ base: 'column', md: 'row' }} my={{base: "4rem", md: "8rem"}}>
    <Flex direction={{ base: "column" }} gap="8rem">
      <Box flex="1">
        <Text size="lg" maxW="585px">
          The CubiX Design System is dedicated to creating a versatile multi-brand design system for its products.
          It aims at offering a bootstrap design for clients, enabling them to build their products quickly and easily while allowing for the flexibility to integrate their own branding.
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
