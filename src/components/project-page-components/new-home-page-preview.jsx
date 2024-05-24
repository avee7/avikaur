import React from "react"
import { Stack, Box, Text, Heading, Image, Container, Flex, VStack, ListItem, List } from '@chakra-ui/react'
import HomePageVideo from "../../static/Mendeley-homepage.mp4"
import MendeleyTrust from '../../images/mendeley-trust.png';
import MendeleyEngagement from '../../images/mendeley-engagement.png';
import MendeleyClarity from '../../images/mendeley-clarity.png';


const NewHomePagePreview = () => (
  <Box>
     <Flex gap="3rem" pt={{ base: "6rem",  md: "10rem"}} width="100%" justifyContent="space-between">
          <Heading size={{base: 'xl', md: '2xl'}}>The new home page experience</Heading>
        </Flex>
        <Flex mt={{ base: "2rem",  md: "4rem"}} gap={8} direction={{base: 'column', md: 'row'}}>
          <Box width="full" maxW="900px" mx="auto">
            <video controls width="100%">
              <source src={HomePageVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Box>
            <Text size="lg" mb="1rem">KEY RESULTS</Text>
            <VStack gap={3} alignItems="flex-start">
              <Box p="1.5rem" borderRadius="8px" bg="#1a1a1a">
                <Heading size="sm" mb="4px">Content Engagement</Heading>
                <Flex direction="row" gap={2} alignItems="center">
                  <Image src={MendeleyEngagement} maxW="50%" />
                  <Text size="md">4.5 / 5</Text>
                </Flex>
              </Box>
              <Box p="1.5rem" borderRadius="8px" bg="#1a1a1a">
                <Heading size="sm" mb="4px">Perception of Trust</Heading>
                <Flex direction="row" gap={2} alignItems="center">
                  <Image src={MendeleyTrust} maxW="50%" />
                  <Text size="md">4.4 / 5</Text>
                </Flex>
              </Box>
              <Box p="1.5rem" borderRadius="8px" bg="#1a1a1a">
                <Heading size="sm" mb="4px">Content Clarity</Heading>
                <Flex direction="row" gap={2} alignItems="center">
                  <Image src={MendeleyClarity} maxW="50%" />
                  <Text size="md">4.5 / 5</Text>
                </Flex>
              </Box>
            </VStack>
            <Text size="xs" mt={2}>
              These are pre-launch metrics from qual and quant testing. Post-launch metrics are pending as the site will be launched in late 2024
            </Text>




          </Box>


        </Flex>
  </Box>
 
 
);

export default NewHomePagePreview;
