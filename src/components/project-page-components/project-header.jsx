import React from "react"
import { Stack, Box, Text, Heading, Image, Container, Flex, GridItem } from '@chakra-ui/react'


const ProjectHeader = ({ title, subtitle, bg, img, headingColor, headingGradient, imgMaxWidth, imgPadding }) => (
  <Box bg={bg} >
    <Container maxW="1300px" >
      <Flex mx="auto" pt={{base: '8rem', md: "11rem"}} 
      // pb={{base: '12rem', md: "22rem"}} 
      alignItems="center" 
      justifyItems="center" 
      direction="column" 
      width="100%" position="relative">
        {/* <Heading size={{ base: '2xl', md: '3xl' }} textAlign="center">{title}</Heading> */}
        <Heading
          size={{ base: '2xl', md: '3xl' }}
          textAlign="center"
          bgGradient={headingGradient || 'none'}
          bgClip={headingGradient ? 'text' : 'initial'}
          color={headingGradient ? 'transparent' : headingColor}
        >
          {title}
        </Heading>
        <Text size="xl" mt={2} textAlign="center">{subtitle} </Text>
        <Image pt="10rem" src={img} borderRadius="12px 12px 0 0" maxWidth={imgMaxWidth} height="auto" width="100%" 
        padding={imgPadding}
         />

      </Flex>
    </Container>
  </Box>

);

export default ProjectHeader;
