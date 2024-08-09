import React from "react"
import { Heading, Box, Text, Flex, VStack, ListItem, UnorderedList, List, Stack } from '@chakra-ui/react'


const MRMIntroduction = () => (

  <Flex gap="6rem" width="100%" justifyContent="space-between" direction={{ base: 'column'}} pt={{base: "6rem", md: "12rem"}} pb={{base: "5rem", md: "10rem"}} my="0">
     <Box>
     <Heading
      size={{ base: '4xl', md: '5xl' }}
      color="#000"
    >
      Smart Duplicate Management
    </Heading>
         
            <Text size="lg"
             mt="1.5rem" 
             
             color="#000"
             >Efficiently Identify, Compare, and Resolve Data Duplicates</Text>


     </Box>
     

    <Flex direction={{ base: "column" }} gap="8rem">
      <Box flex="1">
        <Text size="lg" maxW="585px">
        Mendeley Reference Manager is a SaaS offering by Mendeley that serves over 2.5 million researchers globally, providing a robust B2C platform to organise, manage, and compose research with efficiency.
        </Text>
        <Text size="lg" maxW="585px" pt={{base: "1rem"}}>
        Aiming to elevate the quality of researchers' work, Mendeley's Duplicate Management feature effortlessly identifies, compares, and resolves duplicate references, ensuring a streamlined and efficient research process for all users.
        </Text>

      </Box>
      <Stack alignItems="flex-start"  flexWrap="wrap" width="100%" gap={{base: "2rem", md: "3rem"}} direction={{base: 'column', md:'row'}}>
        
          <Box flex="1">
            <Text size="md" color="#7B7A7E">ROLE</Text>
            <List>
              <ListItem><Text size="lg">UX Designer</Text></ListItem>

            </List>
          </Box>
          <Box flex="1">
            <Text size="md" color="#7B7A7E">COLLABORATORS</Text>
            <UnorderedList styleType="'•  '"> 
              <ListItem><Text size="lg">Senior Product Director</Text></ListItem>
              <ListItem><Text size="lg">Product Managers</Text></ListItem>
              <ListItem><Text size="lg">Design team</Text></ListItem>
              <ListItem><Text size="lg">Developers</Text></ListItem>            
              {/* <ListItem><Text size="lg"></Text></ListItem> */}
            </UnorderedList>
          </Box>
      
        
          <Box flex="1">
            <Text size="md" color="#7B7A7E">TIMELINE</Text>
            <Text size="lg">January - March 2023</Text>
          </Box>
          <Box flex="1">
            <Text size="md" color="#7B7A7E">RESPONSIBILITIES</Text>
            <UnorderedList styleType="'•  '"> 
              <ListItem><Text size="lg">Lead and conduct user research</Text></ListItem>
              <ListItem><Text size="lg">Analyse feedback and generate reports</Text></ListItem>
              <ListItem><Text size="lg">Design user flows and UI</Text></ListItem>
              <ListItem><Text size="lg">Create prototypes</Text></ListItem>
              {/* <ListItem><Text size="lg">Direct iOS and Android teams</Text></ListItem> */}
            </UnorderedList>

          </Box>
        
      </Stack>
    </Flex>


  </Flex>


);

export default MRMIntroduction;
