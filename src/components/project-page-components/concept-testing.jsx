import React from "react"
import {
  Stack, Box, Text, Heading, Image, Grid, GridItem, Flex, VStack,
  Divider, Container, SimpleGrid
} from '@chakra-ui/react'
import TestMethods from "../../images/mendeley-research-plan.png"
import Heatmap1 from "../../images/mendeley-heatmap1.png"
import Heatmap2 from "../../images/mendeley-heatmap2.png"
import UserReport1 from "../../images/mendeley-what-went-well.png"



const ConceptTesting = () => {

  return (
    <Box >

      <Box bg="#0A0911" width="100%" py={{ base: "4rem", md: "8rem" }}>
        <Container maxW="1300px">
          <Text size="md" color="#7B7A7E" textTransform="uppercase">Concept testing</Text>
          <Heading size={{ base: '3xl', md: '4xl' }} color="#f4f4f4">Testing the Waters</Heading>
        </Container>
      </Box>

      <Container maxW="1300px" pb={{ base: "4rem", md: "8rem" }} pt={{ base: "4rem", md: "8rem" }}>

        <Flex direction={{ base: "column", lg: "row" }} alignItems="center" flexWrap="wrap">


          <Box flex="1 1 auto" maxW={{ base: '100%', lg: "40%" }} width={{ base: '100%', lg: "40%" }} flexBasis={{ base: '100%', lg: "40%" }} pr={{ base: "0", lg: "4%" }} pb={{ base: "4%", lg: "0" }}>
            <Text size="lg">
              I translated conceptual ideas into tangible prototypes and validated them through comprehensive
              user research comprising of qual and quant methods.

            </Text>
            <Text size="lg" pt={{ base: "1rem" }}>
              The objectives were to assess the clarity of Mendeley's value proposition,
              evaluate trust in the brand and user engagement with the product, and
              analyse the discoverability and findability of the content.

            </Text>
          </Box>
          <Box flex="1 1 auto" maxW={{ base: '100%', lg: "60%" }} width={{ base: '100%', lg: "60%" }} flexBasis={{ base: '100%', lg: "60%" }}>
            <Image src={TestMethods} maxW="100%" />


          </Box>

        </Flex>


      </Container>

      <Box bg="#F6F6F6" width="100%" >
        <Container maxW="1300px" pb={{ base: "4rem", md: "8rem" }} pt={{ base: "4rem", md: "8rem" }}>
          <Box maxW="660px" >

            <Heading size={{ base: 'lg', md: 'xl' }}>Understanding discoverability and findability</Heading>
            <Text size="lg" pt={{ base: "1rem", md: "2rem" }}>
              Using the first-click test, I discovered that nearly 30% of users struggled to find what they were looking for.
            </Text>

          </Box>
          <Flex gap={{ base: "1rem", md: "2rem" }} pt={{ base: "3rem", md: "6rem" }}>
            <Box>
              <Image src={Heatmap1} maxW="100%" borderRadius="12px" border="solid 1px rgba(60,61,59,0.2)" />
            </Box>
            <Box>
              <Image src={Heatmap2} maxW="100%" borderRadius="12px" border="solid 1px rgba(60,61,59,0.2)" />
            </Box>

          </Flex>



        </Container>
        <Box py={{ base: "3rem", md: "6rem" }} bg="#0A0911">
          <Container maxW="1300px">
            <Flex alignItems="center" gap="1rem">
              <Heading size={{ base: '2xl', md: '3xl' }} color="#f4f4f4">What went well </Heading>
              <Box float="left" fontSize="2.4rem" mr="1rem">&#11088;</Box>
            </Flex>

            <Box>
              <Image src={UserReport1} maxW="100%" />
            </Box>


            {/* <Flex direction={{base: "column" , md:"row"}} gap="1rem" pt={{ base: "1rem", md: "2rem" }} >
              <Box border="solid 1px rgba(60,61,59,0.8)" borderRadius="8px" p="1rem " 
              flex="1 1 auto" 
              maxW={{base: '100%', md: "50%", lg: "33.3%"}} 
              width={{base: '100%',  md: "50%", lg: "33.3%"}} 
              flexBasis={{base: '100%',  md: "50%", lg: "33.3%"}} 
              display="flex"
              gap="2rem"
              alignItems="center">
                <Heading size="2xl" color="#f4f4f4">90%</Heading>
                <Text size="lg" color="#f4f4f4">Users found the content clear and understood the new value proposition of Mendeley.</Text>
              </Box>
              <Box border="solid 1px rgba(60,61,59,0.8)" borderRadius="8px" p="1rem " 
              flex="1 1 auto" 
              maxW={{base: '100%', md: "50%", lg: "33.3%"}} 
              width={{base: '100%',  md: "50%", lg: "33.3%"}} 
              flexBasis={{base: '100%',  md: "50%", lg: "33.3%"}} 
              display="flex"
              gap="2rem"
              alignItems="center">
                <Heading size="2xl" color="#f4f4f4">75%</Heading>
              <Text size="lg" color="#f4f4f4">Users were able to find content easily including primary CTAs and some navigation links.</Text>
              </Box>
              <Box border="solid 1px rgba(60,61,59,0.8)" borderRadius="8px" p="1rem " 
              flex="1 1 auto" 
              maxW={{base: '100%', md: "50%", lg: "33.3%"}} 
              width={{base: '100%',  md: "50%", lg: "33.3%"}} 
              flexBasis={{base: '100%',  md: "50%", lg: "33.3%"}} 
              display="flex"
              gap="2rem"
              alignItems="center">
                <Heading size="2xl" color="#f4f4f4">96%</Heading>
              <Text size="lg" color="#f4f4f4">Users found the content engaging and mentioned images next to the use cases grabbed their attention, aided their understanding of the content, and made the page more engaging. </Text>
              </Box>
            </Flex> */}
          </Container>


        </Box>
        {/* <Box pt={{ base: "3rem", md: "6rem" }} bg="#0A0911" pb={{ base: "4rem", md: "8rem" }} >
          <Container maxW="1300px">
            <Flex alignItems="center" gap="1rem">
              <Heading size={{ base: '2xl', md: '3xl' }} color="#f4f4f4">What could be improved</Heading>
              <Box float="left" fontSize="3rem" mr="1rem">&#128295;</Box>
            </Flex>


            <Flex direction={{ base: "column", md: "row" }} gap="1rem" pt={{ base: "1rem", md: "2rem" }} >
              <Box border="solid 1px rgba(60,61,59,0.8)" borderRadius="8px" p="1rem "
                flex="1 1 auto"
                maxW={{ base: '100%', md: "50%", lg: "33.3%" }}
                width={{ base: '100%', md: "50%", lg: "33.3%" }}
                flexBasis={{ base: '100%', md: "50%", lg: "33.3%" }}
                display="flex"
                gap="2rem"
                alignItems="center">
                <Heading size="2xl" color="#f4f4f4">90%</Heading>
                <Text size="lg" color="#f4f4f4">Users found the content clear and understood the new value proposition of Mendeley.</Text>
              </Box>
              <Box border="solid 1px rgba(60,61,59,0.8)" borderRadius="8px" p="1rem "
                flex="1 1 auto"
                maxW={{ base: '100%', md: "50%", lg: "33.3%" }}
                width={{ base: '100%', md: "50%", lg: "33.3%" }}
                flexBasis={{ base: '100%', md: "50%", lg: "33.3%" }}
                display="flex"
                gap="2rem"
                alignItems="center">
                <Heading size="2xl" color="#f4f4f4">75%</Heading>
                <Text size="lg" color="#f4f4f4">Users were able to find content easily including primary CTAs and some navigation links.</Text>
              </Box>
              <Box border="solid 1px rgba(60,61,59,0.8)" borderRadius="8px" p="1rem "
                flex="1 1 auto"
                maxW={{ base: '100%', md: "50%", lg: "33.3%" }}
                width={{ base: '100%', md: "50%", lg: "33.3%" }}
                flexBasis={{ base: '100%', md: "50%", lg: "33.3%" }}
                display="flex"
                gap="2rem"
                alignItems="center">
                <Heading size="2xl" color="#f4f4f4">96%</Heading>
                <Text size="lg" color="#f4f4f4">Users found the content engaging and mentioned images next to the use cases grabbed their attention, aided their understanding of the content, and made the page more engaging. </Text>
              </Box>
            </Flex>
          </Container>


        </Box> */}

      </Box>





    </Box>

  )



};

export default ConceptTesting;
