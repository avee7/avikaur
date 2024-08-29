import React from "react"
import { Stack, Box, Text, Heading, Image, Container, Flex, VStack, ListItem, List, HStack, UnorderedList } from '@chakra-ui/react'


const MendeleyIntroduction = () => (

  

  <Flex gap="6rem" width="100%" justifyContent="space-between" direction={{ base: 'column' }} pt={{ base: "6rem", md: "12rem" }} pb={{ base: "5rem", md: "10rem" }} my="0">
    <Box>
      <Heading
        size={{ base: '4xl', md: '5xl' }}
        color="#000"
      >
        Beyond Reference Management
      </Heading>

      <Text size="lg"
        mt="1.5rem"
        color="#000"
      >Elevating Mendeley's Homepage for today’s researchers.</Text>


    </Box>


    <Flex direction={{ base: "column" }} gap="8rem">
      <Box maxW="660px">
        <Text size="lg">
          Mendeley streamlines your research with a comprehensive suite that manages references, enhances knowledge, and facilitates collaboration, simplifying the journey from writing to publication.

        </Text>
        <Text size="lg" mt="1rem">
          The strategic redesign of mendeley.com, was led with the aim to modernise
          the interface and effectively communicate its value proposition to researchers worldwide.
          Key objectives included enhancing user experience, updating branding elements, and optimising content delivery.
        </Text>

      </Box>
      <Stack alignItems="flex-start" flexWrap="wrap" width="100%" gap={{ base: "2rem", md: "3rem" }} direction={{ base: 'column', md: 'row' }}>

        <Box flex="1">
          <Text size="md" color="#7B7A7E">ROLE</Text>
          <List>
            <ListItem><Text size="lg">UX Designer</Text></ListItem>

          </List>
        </Box>
        <Box flex="1">
          <Text size="md" color="#7B7A7E">COLLABORATORS</Text>
          <UnorderedList styleType="'•  '">
            <ListItem><Text size="lg">Developers</Text></ListItem>
            
            <ListItem><Text size="lg">Marketing Lead</Text></ListItem>
            <ListItem><Text size="lg">Senior Product Director</Text></ListItem>

            <ListItem><Text size="lg">Product Managers</Text></ListItem>
            <ListItem><Text size="lg">Analytics team</Text></ListItem>
            {/* <ListItem><Text size="lg"></Text></ListItem> */}
          </UnorderedList>
        </Box>


        <Box flex="1">
          <Text size="md" color="#7B7A7E">TIMELINE</Text>
          <Text size="lg">July - December 2022</Text>
        </Box>
        <Box flex="1">
          <Text size="md" color="#7B7A7E">RESPONSIBILITIES</Text>
          <UnorderedList styleType="'•  '">
            <ListItem><Text size="lg">Planning</Text></ListItem>
            <ListItem><Text size="lg">User Research</Text></ListItem>
            <ListItem><Text size="lg">Design workshops</Text></ListItem>
            <ListItem><Text size="lg">Interaction Design</Text></ListItem>
            <ListItem><Text size="lg">Visual Design</Text></ListItem>
            <ListItem><Text size="lg">Prototyping</Text></ListItem>
            
          </UnorderedList>

        </Box>

      </Stack>
    </Flex>


  </Flex>


);

export default MendeleyIntroduction;
