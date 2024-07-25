import React from "react"
import { Box, Container } from '@chakra-ui/react';
import Layout from "../../components/layout";
import ProjectPageHeader from "../../components/project-page-components/project-header";
import CubixHero from "../../images/cubix-hero1.png"
import CubixIntroduction from "../../components/project-page-components/cubix-introduction";
import CubixPreview from "../../components/project-page-components/cubix-preview";
import CubixChallenge from "../../components/project-page-components/cubix-challenge";
import CubixProcess from "../../components/project-page-components/cubix-process";
import KeyLearnings from "../../components/project-page-components/airline-key-learnings";

import useScrollToTop from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";


const Cubix = () => {
  useScrollToTop();

  return (
    <Layout>
      <Helmet>
        <title>Cubix Design System — Avinash Kaur</title>
      </Helmet>
      <Box overflow="hidden" position="relative" mt="-78px">
        <ProjectPageHeader
          title="CubiX Design System"
          subtitle="A themeable design system built for multiple brands."
          bg="linear-gradient(155deg, #061527 0%,  #061527 25%, #2c74b3 70%,  rgba(0,0,0,0) 100%)"
          // bg="#E0F7FA"
          img={CubixHero}
          headingColor="#f4f4f4"
          imgMaxWidth={{base: '100%', xl: '100%'}}
          imgPadding={{base: '4rem 0', md: '5rem 0 6rem'}}
           />

      </Box>

      <Box borderRadius="12px 12px 0 0" bg="#0A0911" position="relative" zIndex="4">
        <Container maxW="1300px">

          <CubixIntroduction />
        </Container>
          <Box bg="#1a1a1a" >
            <CubixPreview />
          </Box>

          <Box bg="#2C74B3">
          <CubixChallenge />
          </Box>
          
          <Box bg="">
            <CubixProcess />
          </Box>
          {/* <KeyLearnings /> */}
        
        
      </Box>

    </Layout >

  )

};

export default Cubix;