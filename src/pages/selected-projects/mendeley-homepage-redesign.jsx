import React from "react"
import { Box, Container } from '@chakra-ui/react';
import Layout from "../../components/layout";
import ProjectPageHeader from "../../components/project-page-components/project-header";
import HomePage from "../../images/mendeley-hero.png"
import HomepageIntroduction from "../../components/project-page-components/mendeley-introduction";
import NewHomePagePreview from "../../components/project-page-components/new-home-page-preview";
import InceptionAndProcess from "../../components/project-page-components/inception-and-process";
import ConceptTesting from "../../components/project-page-components/concept-testing";
import SolutionPhase from "../../components/project-page-components/solution-phase";
import KeyLearnings from "../../components/project-page-components/key-learnings";
import MFinalSolution from "../../components/project-page-components/mendeley-final-solution"
import useScrollToTop from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";


const MendeleyHomePageRedesign = () => {
  useScrollToTop();

  return (
    <Layout>
      <Helmet>
        <title>Mendeley Home Page — Avinash Kaur</title>
      </Helmet>
      <Box overflow="hidden" position="relative" mt="-78px">
        <ProjectPageHeader
          title="Beyond Reference Management"
          subtitle="Elevating Mendeley's Homepage for today’s researchers."
          bg="linear-gradient(135deg, #007398, #99C7D5)"
          img={HomePage}
          headingColor="#e0e0e0" 
          imgMaxWidth="1000px"
          imgPadding={{base: '1rem 0 0', md: '2rem 0 0'}} />

      </Box>

      <Box borderRadius="12px 12px 0 0" bg="#0A0911" mt="-12px" position="relative" zIndex="4">
        <Container maxW="1300px" mt={{base: "3rem", md: "6rem"}}>

          <HomepageIntroduction />
          <NewHomePagePreview />
          <InceptionAndProcess />
          <ConceptTesting />
        </Container>
        <Box bg="rgba(90, 93, 159, 0.1)">

          <SolutionPhase />

        </Box>
        <Container maxW="1300px">
          <MFinalSolution />
          <KeyLearnings />
        </Container>

      </Box>

    </Layout >

  )

};

export default MendeleyHomePageRedesign;