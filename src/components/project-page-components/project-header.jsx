import React from "react"
import { Stack, Box, Text, Heading, Image, Container, Flex, GridItem } from '@chakra-ui/react'


const ProjectHeader = ({ title, subtitle, bg, img }) => (
  <Box bg={bg} >
    <Container maxW="1300px" >
      <Flex mx="auto" pt={{base: '8rem', md: "11rem"}} pb={{base: '12rem', md: "22rem"}} alignItems="center" justifyItems="center" direction="column" width="100%" position="relative">
        <Heading size={{ base: '2xl', md: '3xl' }} textAlign="center">{title}</Heading>
        <Text size="xl" mt={2} textAlign="center">{subtitle} </Text>
        <Image src={img} borderRadius="12px 12px 0 0" width="800px" height="auto" position="absolute" left="50%" transform="translateX(-50%)" bottom="0" boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2)" />

      </Flex>
    </Container>
  </Box>

);

export default ProjectHeader;
