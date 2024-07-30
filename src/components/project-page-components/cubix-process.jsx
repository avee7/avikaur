import React from "react"
import {
  Stack, Box, Text, Heading, Image, Flex, Container
} from '@chakra-ui/react'
import FileStructure from '../../images/cubix-file-structure.jpg';
import ProjectPlan from '../../images/cubix-project-plan.png'
import AalekhPreview from '../../images/aalekh-screens.png';
import CubixFinal from "../../images/cubix-final.png"




const CubixProcess = () => {


  return (
    <Box pb={{ base: "7.5rem", md: "15rem" }}>
      <Box bg="#0A0911" width="100%" py={{ base: "4rem", md: "8rem" }} textAlign="center">
        <Heading size={{ base: '3xl', lg: '4xl' }} color="#f4f4f4">The Journey</Heading>
        <Text size={{ base: 'xl', lg: '2xl' }} color="#f4f4f4" mt={{ base: "1rem", md: "2rem" }}>Planning and process to acheive a themeable multi-brand design system</Text>

      </Box>



      <Container maxW="1300px" pt={{ base: "5rem", md: "10rem" }} pb={{ base: "3rem", md: "6rem" }}>

        <Flex direction="column" gap={{ base: "3rem", md: "6rem" }} >
          <Box maxW="660px">
            <Text size="md" color="#7B7A7E" textTransform="uppercase" pb={{ base: "0.5rem", md: "1rem" }}>Defining the plan</Text>

            <Heading size={{ base: 'lg', md: 'xl' }}>Setting goals and milestones</Heading>
            <Text size="lg" pt={{ base: "1rem", md: "2rem" }}>
              To kick off the project, I collaborated closely with the CEO to outline the timeline and milestones.
              We aimed to develop the design system concurrently with our primary product, Aalekh, setting clear goals and deliverables for each phase.
            </Text>

          </Box>
          <Box width="100%" maxW="980px">
          <Image src={ProjectPlan} maxW="100%" />

          </Box>

          

        </Flex>
      </Container>




      <Box bg="#EFF2F6">
        <Container maxW="1300px" pt={{ base: "4rem", md: "8rem" }} pb={{ base: "4rem", md: "8rem" }}>
          <Flex direction="column" gap={{ base: "1.5rem", md: "3rem" }} bg="#EFF2F6">
            <Text size="md" color="#7B7A7E" textTransform="uppercase">Creating design tokens</Text>

            <Flex direction={{ base: "column", md: "row" }} gap={{ base: "2rem", md: "2rem" }}>
              <Box>
                <Heading size={{ base: 'lg', md: 'xl' }}>Setting the foundations</Heading>
                <Text size="lg" pt={{ base: "1rem", md: "2rem" }}>
                  From the outset, we intended to build a multi-brand design system. I researched and analysed various design systems to inform our approach. Based on this research, I established the foundational elements, including colour, typography, radius, spacing, and elevation, through base and semantic tokens.
                </Text>

              </Box>
              <Box>
                <Heading size={{ base: 'lg', md: 'xl' }}>Creating components</Heading>
                <Text size="lg" pt={{ base: "1rem", md: "2rem" }}>
                  Utilising these foundations, we designed the initial screens for Aalekh. During this process, we extracted reusable components, ensuring consistency and efficiency. After consulting with the engineering team, we embarked on a trial phase for our design system.
                </Text>

              </Box>
            </Flex>
          </Flex>

        </Container>
        <Image src={AalekhPreview} maxW="100%" />
      </Box>


      <Box>
        <Container maxW="1300px" pt={{ base: "4rem", md: "8rem" }} pb={{ base: "4rem", md: "8rem" }}>
          <Flex direction="column" maxW="660px" >
            <Text size="md" color="#7B7A7E" textTransform="uppercase" pb={{ base: "0.5rem", md: "1rem" }}>Getting feedback and iterating</Text>
            <Heading size={{ base: 'lg', md: 'xl' }}>Iterating on the Semantic layer</Heading>
            <Box>
              <Text size="lg" pt={{ base: "1rem", md: "2rem" }}>
                I conducted interviews with designers and the dev team to identify challenges and areas for improvement. Documenting these insights, I evaluated the use of base tokens and made necessary adjustments to enhance the semantic layer.
              </Text>

            </Box>


          </Flex>
        </Container>
      </Box>

      <Box bg="#F2F2F2">
        <Container maxW="1300px" pt={{ base: "4rem", md: "8rem" }} pb={{ base: "4rem", md: "8rem" }}>

          <Flex direction="column" gap={{ base: "1.5rem", md: "3rem" }} alignItems="center">



            <Box maxW="660px">
              <Heading size={{ base: 'lg', md: 'xl' }} color="#0A0911 ">Scaling for Future Brands and Products</Heading>


              <Text size="lg" color="#0A0911" pt={{ base: "1rem", md: "2rem" }}>
                As we began working on a new product, I refined our Figma file structure to support multiple brands and their respective modes. This involved creating a scalable system that could accommodate future brands and ensuring a coherent user experience across products.
              </Text>
            </Box>
          </Flex>

          <Box width="100%" maxW="1000px" mt={{ base: "0.5rem", md: "1rem" }}  mx="auto">
            <Image src={FileStructure} maxW="100%" />
          </Box>


        </Container>

      </Box>

      <Box bg="#2C73B3" width="100%" py={{ base: "4rem", md: "8rem" }}>
        <Container maxW="1300px" textAlign="center" width="100%">
        <Heading size={{ base: '3xl', lg: '4xl' }} color="#f4f4f4">A system is born</Heading>
        <Text size={{ base: 'xl', lg: '2xl' }}  color="#f4f4f4" mt={{ base: "1rem", md: "2rem" }}>“A design system isn’t a project. It’s a product serving products.”
          <br />
          – Brad Frost</Text>
          </Container>

      </Box>

      <Container maxW="1300px" pb={{ base: "5rem", md: "10rem" }} pt={{ base: "3rem", md: "6rem" }}>
        <Flex direction="column" gap={{ base: "3rem", md: "6rem" }}>

          <Box maxW="660px">
            <Text size="lg">
              After rigorous testing and continuous feedback, our design system began to take shape. We started documenting the system comprehensively, allowing for seamless adoption and implementation by the development team. This close collaboration enabled rapid progress and swift integration of changes.
            </Text>


          </Box>
          <Box width="100%" >
            <Image src={CubixFinal} maxW="100%" borderRadius="12px" border="solid 1px rgba(60,61,59,0.2)"/>
          </Box>

        </Flex>

      </Container>


      <Box bg="#0A0911" width="100%" py={{ base: "4rem", md: "8rem" }} textAlign="center">
        <Container maxW="1300px">
        <Heading size={{ base: '3xl', lg: '4xl' }} color="#f4f4f4">Next Steps</Heading>
        <Text size={{ base: 'xl', lg: '2xl' }}  color="#f4f4f4" mt={{ base: "1rem", md: "2rem" }}>“Design systems are never complete; they are always in a state of evolution.”
          <br />– Alla Kholmatova</Text>


        </Container>
       
      </Box>
      <Container maxW="1300px" pt={{base: "3rem", md: "6rem" }} width="100%">
      <Flex direction={{ base: "column", md: "row" }} flexWrap="wrap" gap={{base: "2rem", lg: '0'}}>
              <Flex direction="column" flex="1 1 auto" maxW={{base: '100%', lg: "calc(100% / 12 * 4)"}} width={{base: '100%', lg: "calc(100% / 12 * 4)"}} flexBasis={{base: '100%', lg: "calc(100% / 12 * 4)"}} pl="0rem" pr={{base: '0', lg: "2rem"}}>
                <Heading size={{ base: 'lg', md: 'xl' }}>Encourage Iterative Improvement</Heading>
                <Text size="lg" pt="2rem">
                Design systems require ongoing maintenance and improvement. Continuously collect feedback from all teams and users to identify areas for refinement. Encourage teams to provide suggestions, fostering a culture of continuous improvement.</Text>

              </Flex>
              <Flex direction="column" flex="1 1 auto" maxW={{base: '100%', lg: "calc(100% / 12 * 4)"}} width={{base: '100%', lg: "calc(100% / 12 * 4)"}} flexBasis={{base: '100%', lg: "calc(100% / 12 * 4)"}} pl={{base: '0', lg: "2rem"}} pr={{base: '0', lg: "2rem"}}>
                <Heading size={{ base: 'lg', md: 'xl' }}>Promote Adoption</Heading>
                <Text size="lg" pt="2rem">
                Promote collaboration and adoption of the design system among teams. Encourage the use of components and adherence to guidelines. Provide ongoing support, resources, and communication channels to promote adoption of the design system.</Text>

              </Flex>
              <Flex direction="column" flex="1 1 auto" maxW={{base: '100%', lg: "calc(100% / 12 * 4)"}} width={{base: '100%', lg: "calc(100% / 12 * 4)"}} flexBasis={{base: '100%', lg: "calc(100% / 12 * 4)"}} pl={{base: '0', lg: "2rem"}} pr="0rem">
                <Heading size={{ base: 'lg', md: 'xl' }}>Evaluate and Refine</Heading>
                <Text size="lg" pt="2rem">
                Evaluate the design system's impact and effectiveness. Track key metrics to assess improvements in efficiency, collaboration, and consistency. 
                </Text>

              </Flex>
            </Flex>
      </Container>






    </Box>
  )



};

export default CubixProcess;
