import React from "react"
import { Box, Container } from '@chakra-ui/react';
import Layout from "../../components/layout";
import ProjectPageHeader from "../../components/project-page-components/project-header";
import CubixHero from "../../images/cubix-hero.png"
import CubixIntroduction from "../../components/project-page-components/cubix-introduction";
import CubixPreview from "../../components/project-page-components/cubix-preview";
import AirlineProcess from "../../components/project-page-components/airline-process";
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
          subtitle="A Multi-Brand Design System"
          bg="#5690c2"
          img={CubixHero}
          headingColor="#f4f4f4"
          imgMaxWidth={{base: '100%', xl: '100%'}}
          imgPadding={{base: '2rem 0', md: '2rem 0 4rem'}}
           />

      </Box>

      <Box borderRadius="12px 12px 0 0" bg="#0A0911" position="relative" zIndex="4">
        <Container maxW="1300px" mt="6rem">

          <CubixIntroduction />
          <CubixPreview />
          
          <AirlineProcess />
          <KeyLearnings />
        </Container>
        
      </Box>

    </Layout >

  )

};

export default Cubix;