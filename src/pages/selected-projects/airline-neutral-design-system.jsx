import React from "react"
import { Box, Container } from '@chakra-ui/react';
import Layout from "../../components/layout";
import ProjectPageHeader from "../../components/project-page-components/project-header";
import AirlineNeutralImg from "../../images/airline-neutral.png"
import DeltaIntroduction from "../../components/project-page-components/delta-introduction";
import AirlinePreview from "../../components/project-page-components/airline-preview";
import AirlineProcess from "../../components/project-page-components/airline-process";
import KeyLearnings from "../../components/project-page-components/airline-key-learnings";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";


const AirlineNeutral = () => {
  useScrollToTop();

  return (
    <Layout textColour="dark" fullWidth={true}>
      <Helmet>
        <title>Airline Neutral Design System — Avinash Kaur</title>
      </Helmet>
      <Box overflow="hidden" position="relative" mt="-78px">
        <ProjectPageHeader
          title="Airline Neutral Design System"
          subtitle="A Multi-Brand Design System for Delta and Virgin Atlantic Airlines."
          bg="linear-gradient(45deg, #013368 25%, #9B1631 80%, #940F1E 100%)"

          img={AirlineNeutralImg}
          fullImage={true}
          marginTop={{base: "5rem", md: "7rem"}}
          imgWidth="600px"
          
           />

      </Box>



      
      <Box borderRadius="12px 12px 0 0" bg="#fff" mt="-12px" position="relative" zIndex="4" marginTop={{base: "70vh", md: "100vh"}}>
        <Container maxW="1300px" mt={{base: "3rem", md: "6rem"}}>

          <DeltaIntroduction />
          
          </Container>
          <AirlinePreview />
          
          <AirlineProcess />
          <KeyLearnings />
        
        
      </Box>

    </Layout >

  )

};

export default AirlineNeutral;