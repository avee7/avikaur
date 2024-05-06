import React from "react"
import { Box, Container } from '@chakra-ui/react';
import Layout from "../../components/layout";
import ProjectPageHeader from "../../components/project-page-components/project-header";
import HomePage from "../../images/mendeley-new-homepage.jpg"
import HomepageIntroduction from "../../components/project-page-components/mendeley-introduction";
import NewHomePagePreview from "../../components/project-page-components/new-home-page-preview";
import InceptionAndProcess from "../../components/project-page-components/inception-and-process";
import ConceptTesting from "../../components/project-page-components/concept-testing";
import SolutionPhase from "../../components/project-page-components/solution-phase";
import KeyLearnings from "../../components/project-page-components/key-learnings";



const MendeleyHomePageRedesign = () => (

  <Layout>
    <Box overflow="hidden" position="relative" mt="-78px">
      <ProjectPageHeader
        title="Beyond Reference Management"
        subtitle="Elevating Mendeley's Homepage for today’s researchers."
        bg="linear-gradient(135deg, #007398, #99C7D5)"
        img={HomePage} />

    </Box>

    <Box borderRadius="12px 12px 0 0" bg="#0A0911" mt="-12px" position="relative" zIndex="4">
      <Container maxW="1300px" mt="4rem">

        <HomepageIntroduction />
        <NewHomePagePreview />
        <InceptionAndProcess />
        <ConceptTesting />
      </Container>
      <Box bg="rgba(90, 93, 159, 0.1)">

        <SolutionPhase />

      </Box>
      <Container maxW="1300px">
        <KeyLearnings />
      </Container>

    </Box>

  </Layout >






);

export default MendeleyHomePageRedesign;