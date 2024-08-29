import React from "react"
import { Box, Container } from '@chakra-ui/react';
import Layout from "../../components/layout";
import ProjectPageHeader from "../../components/project-page-components/project-header";
import CubixHero from "../../images/cubix-hero1.png"
import CubixIntroduction from "../../components/project-page-components/cubix-introduction";
import CubixPreview from "../../components/project-page-components/cubix-preview";
import CubixChallenge from "../../components/project-page-components/cubix-challenge";
import CubixProcess from "../../components/project-page-components/cubix-process";



import useScrollToTop from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";


const Cubix = () => {
  useScrollToTop();

  return (
    <Layout textColour="dark">
      <Helmet>
        <title>Cubix Design System — Avinash Kaur</title>
      </Helmet>
      <Box overflow="hidden" position="relative" mt="-78px">
        <ProjectPageHeader
          bg="#2C74B3"
          img={CubixHero}
          headingColor="#f4f4f4"
          marginTop={{base: "0", md: "22rem"}}
           />

      </Box>

      <Box borderRadius="12px 12px 0 0" bg="#fff" position="relative" zIndex="4" marginTop={{base: "70vh", md: "100vh"}}>
        <Container maxW="1300px">

          <CubixIntroduction />
        </Container>
          <Box bg="#0A0911" >
            <CubixPreview />
          </Box>

          <Box bg="#EFF2F6">
          <CubixChallenge />
          </Box>
          
          <Box bg="#fff">
            <CubixProcess />
          </Box>
         
        
        
      </Box>

    </Layout >

  )

};

export default Cubix;