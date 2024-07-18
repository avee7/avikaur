import React from "react"
import { Box, Container } from '@chakra-ui/react';
import Layout from "../../components/layout";
import ProjectPageHeader from "../../components/project-page-components/project-header";
import AirlineNeutralImg from "../../images/delta-vs.png"
import DeltaIntroduction from "../../components/project-page-components/delta-introduction";
import AirlinePreview from "../../components/project-page-components/airline-preview";
import AirlineProcess from "../../components/project-page-components/airline-process";
import KeyLearnings from "../../components/project-page-components/airline-key-learnings";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";


const AirlineNeutral = () => {
  useScrollToTop();

  return (
    <Layout>
      <Helmet>
        <title>Airline Neutral Design System — Avinash Kaur</title>
      </Helmet>
      <Box overflow="hidden" position="relative" mt="-78px">
        <ProjectPageHeader
          title="Airline Neutral Design System"
          subtitle="A Multi-Brand Design System for Delta and Virgin Atlantic Airlines."
          // bg="linear-gradient(-135deg, rgba(147,28,48,0.2) 0%,  #0A0911 100% )"
          bg="#000"
          img={AirlineNeutralImg}
          headingGradient="linear(to-r, #013368 25%, #9B1631 50%, #940F1E 75%, #660099 100%)"
          imgMaxWidth="600px"
          imgPadding={{base: '2rem 0', md: '5rem 0 4rem'}}
           />

      </Box>

      <Box borderRadius="12px 12px 0 0" bg="#0A0911" mt="-12px" position="relative" zIndex="4">
        <Container maxW="1300px" mt={{base: "3rem", md: "6rem"}}>

          <DeltaIntroduction />
          <AirlinePreview />
          
          <AirlineProcess />
          <KeyLearnings />
        </Container>
        
      </Box>

    </Layout >

  )

};

export default AirlineNeutral;