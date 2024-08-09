import React from "react"
import {
  Stack, Box, Text, Heading, Image, Flex, Container
} from '@chakra-ui/react'

import MRMAccessibility from '../../images/mrm-acc-doc.png';
import MRMFinal from "../../images/mrm-final-design.png"
import UserJourneyMapping from "../../images/mrm-user-journey-mapping.png"
import { MdCheckCircle, MdError } from "react-icons/md";
import Iteration1 from "../../images/mrm-iteration1.png"
import Iteration2 from "../../images/mrm-iteration2.png"
import MRMTestResults from "../../images/mrm-test-results.png"



const MRMProcess = () => {


  return (
    <Box pb={{ base: "7.5rem", md: "15rem" }}>
      <Box bg="#0A0911" width="100%" py={{ base: "4rem", md: "8rem" }} textAlign="center">
        <Container maxW="1100px">
          <Text size="md" color="#fff" textTransform="uppercase" pb={{ base: "0.5rem", md: "1rem" }}>Project Goals</Text>
          <Heading size={{ base: '3xl', lg: '4xl' }} color="#f4f4f4">Offer an intelligent solution to effortlessly compare, identify, and resolve duplicate references, ensuring a streamlined research process.</Heading>


        </Container>


      </Box>

      {/* <Box bg="#F6F6F6">
          <MRMProblem />
          </Box> */}



      <Container maxW="1300px" pt={{ base: "5rem", md: "10rem" }} pb={{ base: "3rem", md: "6rem" }}>

        <Flex direction={{ base: "column", md: "row" }} gap={{ base: "3rem", md: "6rem" }} >
          <Box maxW="300px">
            {/* <Text size="md" color="#7B7A7E" textTransform="uppercase" pb={{ base: "0.5rem", md: "1rem" }}>Defining the plan</Text> */}

            <Heading size={{ base: 'lg', md: 'xl' }}>Insights from previous research</Heading>
            <Text size="lg" pt={{ base: "1rem", md: "2rem" }}>
              Using data from past user research and feedback gathered through ProdPad, we discovered that nearly half of our users prioritise the ability to compare and resolve duplicates. Although some progress was made, the previous design left many users confused and frustrated.
            </Text>

          </Box>
          <Box width="100%" maxW="980px">

            <Image src={UserJourneyMapping} maxW="100%" />

          </Box>



        </Flex>
      </Container>




      <Box bg="#F6F6F6">
        <Container maxW="1300px" pt={{ base: "4rem", md: "8rem" }} pb={{ base: "4rem", md: "8rem" }}>
          <Flex direction="column" gap={{ base: "1rem", md: "2rem" }}>
            <Text size="md" color="#7B7A7E" textTransform="uppercase" >Explorations</Text>

            <Box>
              <Text size={{ base: '4xl', md: '5xl' }} mb={{ base: "0.5rem", md: "1rem" }}>Concept 1</Text>
              <Text size="lg">
                Help users to understand their position in the workflow and identify which metadata has duplicates.
              </Text>
              <Flex mt={{ base: "2.5rem", md: "5rem" }} direction={{ base: "column", md: "row" }} gap={{ base: "2rem", md: "2rem" }} alignItems="flex-start">

                <Box>
                  <Image src={Iteration1} maxW="100%" />
                </Box>
                <Flex maxW="400px" direction="column" gap={{ base: "1rem", md: "2rem" }} pt={{ base: "2.5rem", md: "5rem" }}>

                  <Flex gap="0.5rem" direction="column">
                    <Heading size="lg">
                      Improved User Flow Comprehension
                    </Heading>
                    <Text size="lg">
                      Enhanced visual indicators and step markers to clearly show users their current position in the duplicate management process.
                    </Text>
                  </Flex>
                  <Flex gap="0.5rem" direction="column">
                    <Heading size="lg">
                      Accessibility Enhancement
                    </Heading>
                    <Text size="lg">
                      Used icons and colour to differentiate duplicates, ensuring accessibility for users with visual impairments.
                    </Text>
                  </Flex>
                  <Flex gap="0.5rem" direction="column">
                    <Heading size="lg">
                      Multifaceted Metadata Comparison
                    </Heading>
                    <Text size="lg">
                      Enabled display of discrepancies across multiple metadata fields for a comprehensive comparison view.
                    </Text>
                  </Flex>
                  <Flex gap="0.5rem" direction="column">
                    <Heading size="lg">
                      Action-Oriented CTA
                    </Heading>
                    <Text size="lg">
                      Changed the CTA from “Done” to “Resolve” to better match the user’s task, providing clear action-oriented guidance.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Flex>

        </Container>

      </Box>

      <Box bg="#fff">
        <Container maxW="1300px" pt={{ base: "3rem", md: "6rem" }} pb={{ base: "4rem", md: "8rem" }}>
          <Flex direction="column" gap={{ base: "1rem", md: "2rem" }}>
            <Text size="md" color="#7B7A7E" textTransform="uppercase">Explorations</Text>
            <Box>
              <Text size={{ base: '4xl', md: '5xl' }} mb={{ base: "0.5rem", md: "1rem" }}>Concept 2</Text>
              <Text size="lg">
                Help users to feel a sense of familiarity by using the existing RHS Panel to highlight the metadata differences
              </Text>
              <Flex mt={{ base: "2.5rem", md: "5rem" }} direction={{ base: "column", md: "row" }} gap={{ base: "2rem", md: "4rem" }} alignItems="flex-start">
                <Flex maxW="400px" direction="column" gap={{ base: "1rem", md: "2rem" }} pt={{ base: "2.5rem", md: "5rem" }}>

                  <Flex gap="0.5rem" direction="column">
                    <Heading size="lg">
                      Enhanced navigation
                    </Heading>
                    <Text size="lg">
                      Using clear visual indicators to identify where the duplicate metadata exists.
                    </Text>
                  </Flex>
                  <Flex gap="0.5rem" direction="column">
                    <Heading size="lg">
                      Scalable Metadata Comparison
                    </Heading>
                    <Text size="lg">
                      Provided metadata to compare and select in the RHS section of the modal.
                    </Text>
                  </Flex>
                  <Flex gap="0.5rem" direction="column">
                    <Heading size="lg">
                      Reduce Confusion
                    </Heading>
                    <Text size="lg">
                      Introduced a backdrop to the RHS panel, directing the user's focus to the RHS after selecting options from the comparison overlay.
                    </Text>
                  </Flex>
                  <Flex gap="0.5rem" direction="column">
                    <Heading size="lg">
                      Minimise Redundancy
                    </Heading>
                    <Text size="lg">
                      Implemented a preview-only state for the RHS, disabling editing to eliminate ambiguity.
                    </Text>
                  </Flex>
                </Flex>
                <Box>
                  <Image src={Iteration2} maxW="100%" />
                </Box>

              </Flex>
            </Box>


          </Flex>

        </Container>

      </Box>


      <Box>
        <Box bg="#0A0911" width="100%" py={{ base: "4rem", md: "8rem" }} textAlign="center">
          <Container maxW="1100px">
            <Text size="md" color="#fff" textTransform="uppercase" pb={{ base: "0.5rem", md: "1rem" }}>Usability Testing</Text>
            <Heading size={{ base: '3xl', lg: '4xl' }} color="#f4f4f4">Testing with Users</Heading>
            <Box gap={{base: "0.5rem", md: "1rem"}} justifyContent="center" alignItems="center" mt={{ base: "1rem", md: "2rem" }}>
              <Text size={{ base: 'lg', md: 'xl' }} color="#fff" display="inline-block">Qualitative Testing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· </Text>
              
              <Text size={{ base: 'lg', md: 'xl' }} color="#fff" display="inline-block" pl="1rem">Semi-Structured Remote Interviews&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· </Text>

              
              <Text size={{ base: 'lg', md: 'xl' }} color="#fff" display="inline-block" pl="1rem">6 Users</Text>
            </Box>

          </Container>


        </Box>
      </Box>

      <Box bg="#0A0911">
        <Container maxW="1600px" pb={{ base: "6rem", md: "12rem" }}>

          <Box width="100%" pt={{ base: "0.5rem", md: "1rem" }} mx="auto">
            <Image src={MRMTestResults} maxW="100%" />
          </Box>



        </Container>

      </Box>

      <Box bg="#2C73B3" width="100%" py={{ base: "4rem", md: "8rem" }}>
        <Container maxW="1200px" textAlign="center" width="100%">
          <Heading size={{ base: '3xl', lg: '4xl' }} color="#f4f4f4">A Solution Built for Usability, Accessibility, and Scalability</Heading>
          <Text size={{ base: 'xl', lg: '2xl' }} color="#f4f4f4" mt={{ base: "1rem", md: "2rem" }}>Crafting a User-Centered Approach to Handle Diverse Data at Scale
          </Text>
        </Container>

      </Box>

      <Container maxW="1300px" pb={{ base: "5rem", md: "10rem" }} pt={{ base: "3rem", md: "6rem" }}>
        <Flex direction="column" gap={{ base: "3rem", md: "6rem" }}>

          <Box maxW="660px">
            <Text size="lg">
            After user testing and cross-disciplinary feedback, I designed a solution that prioritises usability and scalability. The new approach handles any volume of duplicate metadata, offering clear navigation and a streamlined process for comparing, selecting, and resolving duplicates. It enables users to easily identify discrepancies and move seamlessly through the comparison process.</Text>


          </Box>
          <Box width="100%" bg="linear-gradient(135deg,#1b3c70 0%,#3679e0 100%)" borderRadius="12px"  >
            <Image src={MRMFinal} maxW="100%"  />
          </Box>

        </Flex>
        <Flex direction="column" gap={{ base: "3rem", md: "6rem" }} mt={{base: "3rem" , md: "6rem"}}>

          <Box maxW="660px">
            <Text size="lg">
            
Accessibility was a top priority in our design efforts. We collaborated closely with the development team to deliver a solution featuring ARIA labels, keyboard navigation, and screen reader support.
            </Text>

          </Box>
          <Box width="100%" borderRadius="12px"  >
            <Image src={MRMAccessibility} maxW="100%"  />
          </Box>

        </Flex>

      </Container>


      <Box bg="#0A0911" width="100%" py={{ base: "4rem", md: "8rem" }}>
        <Container maxW="1300px">
          <Heading size={{ base: '3xl', lg: '4xl' }} color="#f4f4f4">Next Steps</Heading>
          


        </Container>

      </Box>
      <Container maxW="1300px" pt={{ base: "3rem", md: "6rem" }} width="100%">
        <Flex direction={{ base: "column", md: "row" }} flexWrap="wrap" gap={{ base: "2rem", lg: '0' }}>
          <Flex direction="column" flex="1 1 auto" maxW={{ base: '100%', lg: "48%" }} width={{ base: '100%', lg: "48%" }} flexBasis={{ base: '100%', lg: "48%" }} pl="0rem" pr={{ base: '0', lg: "2rem" }}>
            <Heading size={{ base: 'lg', md: 'xl' }}>Moving Towards Implementation</Heading>
            <Text size="lg" pt="2rem">
            The solution is not yet in production. The next steps involve developing and launching it, which will require ongoing feedback and close collaboration with the development team.</Text>

          </Flex>
          <Flex direction="column" flex="1 1 auto" maxW={{ base: '100%', lg: "48%" }} width={{ base: '100%', lg: "48%" }} flexBasis={{ base: '100%', lg: "48%" }} pl={{ base: '0', lg: "2rem" }} pr={{ base: '0', lg: "2rem" }}>
            <Heading size={{ base: 'lg', md: 'xl' }}>Ongoing Testing and Evaluation</Heading>
            <Text size="lg" pt="2rem">
            Plan post-production testing, including post-launch surveys, user interviews, in-depth analysis of Adobe Analytics data, and gathering user feedback through our ProdPad tool.
              </Text>

          </Flex>
          {/* <Flex direction="column" flex="1 1 auto" maxW={{ base: '100%', lg: "calc(100% / 12 * 4)" }} width={{ base: '100%', lg: "calc(100% / 12 * 4)" }} flexBasis={{ base: '100%', lg: "calc(100% / 12 * 4)" }} pl={{ base: '0', lg: "2rem" }} pr="0rem">
            <Heading size={{ base: 'lg', md: 'xl' }}>Evaluate and Refine</Heading>
            <Text size="lg" pt="2rem">
              Evaluate the design system's impact and effectiveness. Track key metrics to assess improvements in efficiency, collaboration, and consistency.
            </Text>

          </Flex> */}
        </Flex>
      </Container>






    </Box>
  )



};

export default MRMProcess;
