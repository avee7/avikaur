import React from "react"
import { Box, Text, Heading, Image, Flex, VStack, useBreakpointValue } from '@chakra-ui/react'
import HomePageVideo from "../../static/Mendeley-homepage.mp4"
import MendeleyTrust from '../../images/mendeley-trust.png';
import MendeleyEngagement from '../../images/mendeley-engagement.png';
import MendeleyClarity from '../../images/mendeley-clarity.png';


const NewHomePagePreview = () => {
  const isLgOrLarger = useBreakpointValue({ base: false, lg: true });
  return(
    <Box>
      <Flex gap="3rem" pt={{ base: "6rem", md: "10rem" }} width="100%" justifyContent="space-between">
        <Heading size={{ base: 'xl', md: '2xl' }}>The new home page experience</Heading>
      </Flex>
      <Box position="relative" mt={{ base: "2rem", md: "4rem" }}>
        <Box maxW="1100px" bg="transparent" style={{ borderRadius: '8px' }}>
          <video controls width="100%" autoPlay muted loop style={{ borderRadius: '8px' }} mx="auto">
            <source src={HomePageVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
        </Box>
        <Text size="xs" mt="1rem">
            These are pre-launch metrics from qual and quant testing.
          </Text>
        <Box
          position={isLgOrLarger ? "absolute" : "static"}
          top={isLgOrLarger ? { base: '2rem', md: '5rem' } : "auto"}
          right={isLgOrLarger ? { base: '1rem', md: '-4rem' } : "auto"}
          
          p={{base: '1rem', md: '2rem'}}
          borderRadius="8px"
          maxW="300px"
          zIndex={1}
          mt={!isLgOrLarger ? "0.2rem" : "0"} // Add margin-top for small screens
        >
          
          <VStack gap={3} alignItems="flex-start">
          <Box p="1rem" borderRadius="8px" bg="#1a1a1a" border="solid 1px rgba(239,242,247, 0.4)" width="100%">
          <Text size="lg">KEY RESULTS</Text>
            </Box>
            <Box p="1.5rem" borderRadius="8px" bg="#1a1a1a" border="solid 1px rgba(239,242,247, 0.4)">
              <Heading size="sm" mb="4px">Content Engagement</Heading>
              <Flex direction="row" gap={2} alignItems="center">
                <Image src={MendeleyEngagement} maxW="50%" />
                <Text size="md">4.5 / 5</Text>
              </Flex>
            </Box>
            <Box p="1.5rem" borderRadius="8px" bg="#1a1a1a" border="solid 1px rgba(239,242,247, 0.4)">
              <Heading size="sm" mb="4px">Perception of Trust</Heading>
              <Flex direction="row" gap={2} alignItems="center">
                <Image src={MendeleyTrust} maxW="50%" />
                <Text size="md">4.4 / 5</Text>
              </Flex>
            </Box>
            <Box p="1.5rem" borderRadius="8px" bg="#1a1a1a" border="solid 1px rgba(239,242,247, 0.4)">
              <Heading size="sm" mb="4px">Content Clarity</Heading>
              <Flex direction="row" gap={2} alignItems="center">
                <Image src={MendeleyClarity} maxW="50%" />
                <Text size="md">4.5 / 5</Text>
              </Flex>
            </Box>
          </VStack>
         
        </Box>
      </Box>
    </Box>
  
  
  );
};



export default NewHomePagePreview;
