
import React from 'react';
import { Text, Link, VStack, Heading, Container, Box, Flex, Image} from '@chakra-ui/react';

import Layout from "../components/layout"
import LinkedinLogo from "../images/linkedin.png"
import ADPLogo from "../images/adp.png"

const Contact = () => (
  <Layout>
    <Container p={5} maxW="1300px" mx="auto" py={{ base: "4rem", lg: "8rem" }} height={`calc(100vh - (80px + 8rem))`}>
      <VStack spacing={4} alignItems="flex-start" width={{ base: "100%", lg: "40rem" }}>
        <Heading size="xl" mb={4}>Let's connect!</Heading>

        <Heading size="lg">
          If you have any questions or just want to connect, feel free to reach out.
        </Heading>

        <Flex align="center">
          <Box fontSize="2rem" mr="1rem" float="left">&#128231;</Box>
          <Link size="lg" href="mailto:avikaur.design@gmail.com" isExternal>
            avikaur.design@gmail.com
          </Link>
        </Flex>

        <Flex align="center">
          <Image src={LinkedinLogo} width="32px" mr="1rem"  />
          <Link size="lg" href="https://www.linkedin.com/in/avinash-kaur9/" isExternal>
            Visit my LinkedIn
          </Link>
        </Flex>

        <Flex align="center">
        <Image src={ADPLogo} width="32px" mr="1rem"  />
          <Link size="lg" href="https://adplist.org/mentors/avinash-kaur" isExternal>
            Check out my ADPList Profile
          </Link>
        </Flex>







      </VStack>
    </Container>

  </Layout>
)



export default Contact

