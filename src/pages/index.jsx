import React from "react"
import Layout from "../components/layout";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@chakra-ui/react'
import  HeroArea  from '../components/hero-area';
import SelectedProjects from '../components/selected-projects';
import OtherProjects from '../components/other-projects'
import CVSection from '../components/cv-section';
import HeroAnimation from '../components/hero-animation';
import useScrollToTop from "../hooks/useScrollToTop";

const Home = () => (
  <Box>
   <Box position="absolute" width="100%" height="100vh" zIndex="0" mt="-8rem">
     <HeroAnimation />     
   </Box>
   <HeroArea />
   <SelectedProjects />
   <OtherProjects />
   <CVSection />
  </Box>
 )

 
 const IndexPage = () => {
  useScrollToTop();

  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default IndexPage;