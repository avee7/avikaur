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
    <Layout textColour="dark">
      <Helmet>
        <title>Mendeley Home Page — Avinash Kaur</title>
      </Helmet>
      <Box overflow="hidden" position="relative" mt="-78px">
        <ProjectPageHeader
          bg="#B8E2E8"
          img={HomePage}
          headingColor="#e0e0e0" 
          marginTop="0"
           />

      </Box>

     

      <Box borderRadius="12px 12px 0 0" bg="#fff" position="relative" zIndex="4" marginTop={{base: "70vh", md: "100vh"}}>
        <Container maxW="1300px">

        <HomepageIntroduction />
        </Container>
          <Box bg="#0A0911" >
          <NewHomePagePreview />
          
          </Box>

          <Box bg="#F6F6F6">
          <ConceptTesting />
          </Box>
          
          <Box bg="#fff">
          <InceptionAndProcess />
          </Box>
          <SolutionPhase />
          <Box bg="#0A0911">
          <MFinalSolution />
          
        </Box>
        <Box>
        <KeyLearnings />
        </Box>
        
        
      </Box>

    </Layout >

  )

};

export default MendeleyHomePageRedesign;