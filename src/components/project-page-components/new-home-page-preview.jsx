import React from "react"
import { Box, Text, Heading, Image, Flex, Stack, useBreakpointValue, Container } from '@chakra-ui/react'
import MendeleyTrust from '../../images/mendeley-trust.png';
import MendeleyEngagement from '../../images/mendeley-engagement.png';
import MendeleyClarity from '../../images/mendeley-clarity.png';
import MendeleyPreview from '../../images/mendeley-preview.jpg'


const NewHomePagePreview = () => {
  const isLgOrLarger = useBreakpointValue({ base: false, lg: true });
  return(
    <Container maxW="1300px" width="100%">
      <Flex gap={{base: "2rem", md: "4rem"}} pt={{ base: "6rem", md: "10rem" }} width="100%" justifyContent="space-between" direction="column">
        <Heading size={{ base: '3xl', md: '4xl' }} color="#f4f4f4">The new home page experience</Heading>
        
        <Box>
        <Text size="lg" color="#f4f4f4" mb={{base: "1rem", md: "2rem"}}>KEY RESULTS</Text>
           
           <Stack gap={3} alignItems="flex-start" direction={{base: "column", md: "row"}}>
             
               <Box p="1.5rem" borderRadius="8px" border="solid 1px rgba(239,242,247, 0.2)" flex="1 1 auto" maxW={{base: '100%', lg: "calc(100% / 12 * 4)"}} width={{base: '100%', lg: "calc(100% / 12 * 4)"}} flexBasis={{base: '100%', lg: "calc(100% / 12 * 4)"}}>
                 <Heading size="md" mb="4px" color="#f4f4f4">Content Engagement</Heading>
                 <Flex direction="row" gap={2} alignItems="center">
                   <Image src={MendeleyEngagement} maxW="50%" />
                   <Text size="md" color="#f4f4f4">4.5 / 5</Text>
                 </Flex>
               </Box>
               <Box p="1.5rem" borderRadius="8px" border="solid 1px rgba(239,242,247, 0.2)" flex="1 1 auto" maxW={{base: '100%', lg: "calc(100% / 12 * 4)"}} width={{base: '100%', lg: "calc(100% / 12 * 4)"}} flexBasis={{base: '100%', lg: "calc(100% / 12 * 4)"}}>
                 <Heading size="md" mb="4px" color="#f4f4f4">Perception of Trust</Heading>
                 <Flex direction="row" gap={2} alignItems="center">
                   <Image src={MendeleyTrust} maxW="50%" />
                   <Text size="md" color="#f4f4f4">4.4 / 5</Text>
                 </Flex>
               </Box>
               <Box p="1.5rem" borderRadius="8px"  border="solid 1px rgba(239,242,247, 0.2)" flex="1 1 auto" maxW={{base: '100%', lg: "calc(100% / 12 * 4)"}} width={{base: '100%', lg: "calc(100% / 12 * 4)"}} flexBasis={{base: '100%', lg: "calc(100% / 12 * 4)"}}>
                 <Heading size="md" mb="4px" color="#f4f4f4">Content Clarity</Heading>
                 <Flex direction="row" gap={2} alignItems="center">
                   <Image src={MendeleyClarity} maxW="50%" />
                   <Text size="md" color="#f4f4f4">4.5 / 5</Text>
                 </Flex>
               </Box>
             </Stack>
             <Text size="md" mt="1rem" color="#7B7A7E">
            These are pre-launch metrics from qual and quant testing.
          </Text>
        </Box>
          
      </Flex>
      <Box position="relative" pt={{ base: "3rem", md: "6rem" }} pb={{ base: "5rem", md: "10rem" }}>
        <Box maxW="100%" bg="transparent" style={{ borderRadius: '8px' }}>
          <Image src={MendeleyPreview} border="solid 1px rgba(60,61,59,0.9)" borderRadius="12px"/>          
          {/* <video controls width="100%" autoPlay muted loop style={{ borderRadius: '8px' }} mx="auto">
            <source src={HomePageVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           */}
        </Box>
       
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
          
         
         
        </Box>
      </Box>
    </Container>
  
  
  );
};



export default NewHomePagePreview;
