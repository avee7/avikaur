
import React from 'react';
import { Text, Link, VStack, Heading, Container } from '@chakra-ui/react';

import Layout from "../components/layout"

const Contact = () => (
  <Layout>
     <Container p={5} maxW="800px" mx="auto" py={{base: "4rem", lg: "8rem"}} height={`calc(100vh - (80px + 8rem))`}>
      <VStack spacing={4} justifyContent="flex-start">
        <Heading size="lg" mb={4}>Feel Free to Drop Me an Email!</Heading>
        
        <Text>
          If you have any questions or just want to connect, don't hesitate to reach out.
        </Text>
        
        <Link href="mailto:your-email@example.com" isExternal>
          your-email@example.com
        </Link>

        <Link href="https://www.linkedin.com/in/your-profile" isExternal>
          Visit my LinkedIn
        </Link>

        <Link href="https://www.adplist.org/mentors/your-profile" isExternal>
          Check out my ADPList Profile
        </Link>
      </VStack>
    </Container>
    
  </Layout>
)



export default Contact

