import React from "react"
import { Grid, GridItem, Heading, Image, Container, Text, Flex } from '@chakra-ui/react';
import DSImage from "../images/DSImages.svg";
import ProductDesignImage from "../images/projectImage.svg";
import PrototypesImage from "../images/prototypeimg.svg";



const OtherProjects = () => (
    <Container maxW="1300px" pb="10rem">
      <Heading size="xl" mb={14}>Other Projects</Heading>

      <Grid
        h='556px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} overflow="hidden" bg="rgba(90, 93, 159,0.18)" borderRadius="20px" borderWidth="1px" borderColor="#5A5D9F">
          <Flex height="100%" alignItems="center" justifyContent="center" position="relative" >
            <Heading size="lg" zIndex="1">Design Systems</Heading>
            <Image src={DSImage} zIndex="0" position="absolute" bottom="0rem" left="0" width="100%"/>
          </Flex>
          
        </GridItem>
        <GridItem colSpan={1}  overflow="hidden"  bg="rgba(90, 93, 159,0.18)" borderRadius="20px" borderWidth="1px" borderColor="#5A5D9F">
          <Flex position="relative" height="100%" alignItems="center" justifyContent="center">
            <Heading size="lg" zIndex="1">Product Design</Heading>
            <Image src={ProductDesignImage} zIndex="0" position="absolute" bottom="0rem" left="0" width="100%"/>
          </Flex>
          
        </GridItem>
        <GridItem colSpan={1} position="relative" overflow="hidden" bg="rgba(90, 93, 159,0.18)" borderRadius="20px" borderWidth="1px" borderColor="#5A5D9F">
          <Flex position="relative" height="100%" alignItems="center" justifyContent="center">
            <Heading size="lg" zIndex="1">Prototypes</Heading>
            <Image src={PrototypesImage} zIndex="0" position="absolute" bottom="0rem" left="0" width="100%"/>
          </Flex>
          
        </GridItem>
        
      </Grid>
            
    </Container>
    

);

export default OtherProjects;