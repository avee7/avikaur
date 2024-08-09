import React from "react"
import { Box, Container } from '@chakra-ui/react';
import Layout from "../../components/layout";
import ProjectPageHeader from "../../components/project-page-components/project-header";
import MRMHero from "../../images/mrm-hero-img.png"
import MRMIntroduction from "../../components/project-page-components/mrm-introduction";
import MRMPreview from "../../components/project-page-components/mrm-preview";
import MRMProblem from "../../components/project-page-components/mrm-problem";
import MRMProcess from "../../components/project-page-components/mrm-process";



import useScrollToTop from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";


const MRMDuplicationMgmt = () => {
  useScrollToTop();

  return (
    <Layout textColour="dark">
      <Helmet>
        <title>MRM Duplication Management— Avinash Kaur</title>
      </Helmet>
      <Box overflow="hidden" position="relative" mt="-78px">
        <ProjectPageHeader
          bg="linear-gradient(45deg,#1b3c70 0%,#3679e0 70%, #EAF3FB 100%)"
          img={MRMHero}
          headingColor="#f4f4f4"
          marginTop={{base: "0", md: "3rem"}}
          fullImage={true}
          imgWidth="1300px"
           />

      </Box>

      <Box borderRadius="12px 12px 0 0" bg="#fff" position="relative" zIndex="4" marginTop={{base: "70vh", md: "100vh"}}>
        <Container maxW="1300px">

          <MRMIntroduction />
        </Container>
          {/* <Box bg="#0A0911" >
            <MRMPreview />
          </Box> */}

          <Box bg="#F6F6F6">
          <MRMProblem />
          </Box>
          
          <Box bg="#fff">
            <MRMProcess />
          </Box>
         
        
        
      </Box>

    </Layout >

  )

};

export default MRMDuplicationMgmt;