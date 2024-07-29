import React from "react"
import { Box, Container } from '@chakra-ui/react';
import Layout from "../../components/layout";
import ProjectPageHeader from "../../components/project-page-components/project-header";
import CubixHero from "../../images/cubix-hero.png"
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
          // bg="linear-gradient(135deg, #2C74B3 0%, #12A594 100%)"
          bg="#2C74B3"
          img={CubixHero}
          headingColor="#f4f4f4"
          imgMaxWidth={{base: '100%', xl: '100%'}}
           />

      </Box>

      <Box borderRadius="12px 12px 0 0" bg="#fff" position="relative" zIndex="4" marginTop={{base: '100vh'}}>
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