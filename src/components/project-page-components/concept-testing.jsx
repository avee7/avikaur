import React from "react"
import {
  Stack, Box, Text, Heading, Image, Grid, GridItem, Flex, VStack,
  Divider, Container, SimpleGrid
} from '@chakra-ui/react'
import TestMethods from "../../images/mendeley-research-plan.png"
import Heatmap1 from "../../images/mendeley-heatmap1.png"
import Heatmap2 from "../../images/mendeley-heatmap2.png"



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
        <Box pt={{ base: "3rem", md: "6rem" }} pb={{ base: "4rem", md: "8rem" }} bg="#fff">
          <Container maxW="1300px">
            <Flex direction="column">
              <Text size="md" color="#7B7A7E" textTransform="uppercase">Testing Outcome</Text>

              <Heading size={{ base: 'xl', md: '2xl' }} >Highlights </Heading>


            </Flex>


            <Flex mt={{ base: "2rem", md: "4rem" }} direction={{ base: "column" }} gap={{ base: "1rem", md: "1rem" }} justifyContent="space-between">

              <Box bg="rgba(177, 209, 221, 0.7)" p={{ base: "0.625rem", md: "1.25rem" }} borderRadius="8px">
                <Heading size="md">
                  <Box as="span" mr="1rem">
                    &#11088;
                  </Box>
                  What Went Well
                </Heading>
                <Flex justifyContent="space-around" mt="20px" gap="1rem" flexWrap="wrap">
                  <Box
                    bg="#d6ffc1"
                    p="1.25rem"
                    borderRadius="8px"
                    textAlign="center"
                    flex={{ base: "0 0 100%", md: "1 1 30%" }}
                  >
                    <Heading size="md" mb="1rem">Content Clarity</Heading>
                    <Text size="4xl">90%</Text>
                    <Text size="md" mt="0.3rem">Participants found the content clear and easily understood Mendeley's new value proposition.</Text>
                  </Box>
                  <Box
                    bg="#d6ffc1"
                    p="1.25rem"
                    borderRadius="8px"
                    textAlign="center"
                    flex={{ base: "0 0 100%", md: "1 1 30%" }}
                  >
                    <Heading size="md" mb="1rem">Ease of Navigation</Heading>
                    <Text size="4xl">75%</Text>
                    <Text size="md" mt="0.3rem">Participants were able to locate content easily, including primary CTAs and navigation links.</Text>
                  </Box>
                  <Box
                    bg="#d6ffc1"
                    p="1.25rem"
                    borderRadius="8px"
                    textAlign="center"
                    flex={{ base: "0 0 100%", md: "1 1 30%" }}
                  >
                    <Heading size="md" mb="1rem">Content Engagement</Heading>
                    <Text size="4xl">96%</Text>
                    <Text size="md" mt="0.3rem">Participants found the content engaging; images next to the use cases grabbed their attention and enhanced their understanding.</Text>
                  </Box>
                </Flex>

              </Box>

              <Box bg="rgba(177, 209, 221, 0.7)" p={{ base: "0.625rem", md: "1.25rem" }} borderRadius="8px">
                <Heading size="md">
                  <Box as="span" mr="1rem">
                    &#x1F4C8;
                  </Box>
                  What Could Be Improved
                </Heading>
                <Flex justifyContent="space-around" mt="20px" gap="1rem" flexWrap="wrap">
                  <Box
                    bg="#f8eeb6"
                    p="1.25rem"
                    borderRadius="8px"
                    textAlign="center"
                    flex={{ base: "0 0 100%", md: "1 1 calc(25% - 1rem)" }} // Adjust for gap
                  >
                    <Heading size="md" mb="1rem">Lack of Scrolling</Heading>
                    <Text size="4xl">70%</Text>
                    <Text size="md" mt="0.3rem">Participants did not scroll unless prompted, assuming there was no additional content below the fold.</Text>
                  </Box>
                  <Box
                    bg="#f8eeb6"
                    p="1.25rem"
                    borderRadius="8px"
                    textAlign="center"
                    flex={{ base: "0 0 100%", md: "1 1 calc(25% - 1rem)" }} // Adjust for gap
                  >
                    <Heading size="md" mb="1rem">Confusing Labels</Heading>
                    <Text size="4xl">30%</Text>
                    <Text size="md" mt="0.3rem">Participants were confused between 'Support' and 'Solutions' in the header, finding them too similar in purpose.</Text>
                  </Box>
                  <Box
                    bg="#f8eeb6"
                    p="1.25rem"
                    borderRadius="8px"
                    textAlign="center"
                    flex={{ base: "0 0 100%", md: "1 1 calc(25% - 1rem)" }} // Adjust for gap
                  >
                    <Heading size="md" mb="1rem">Unclear Images</Heading>
                    <Text size="4xl">40%</Text>
                    <Text size="md" mt="0.3rem">Participants focused heavily on images and were frustrated by unclear details.</Text>
                  </Box>

                  <Box
                    bg="#f8eeb6"
                    p="1.25rem"
                    borderRadius="8px"
                    textAlign="center"
                    flex={{ base: "0 0 100%", md: "1 1 calc(25% - 1rem)" }} // Adjust for gap
                  >
                    <Heading size="md" mb="1rem">Missed Secondary CTAs</Heading>
                    <Text size="4xl">60%</Text>
                    <Text size="md" mt="0.3rem">Participants missed the secondary CTAs as they were not visually distinguishable.</Text>
                  </Box>

                </Flex>

              </Box>
            </Flex>




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
