import React from "react";
import Layout from "../components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@chakra-ui/react';
import HeroArea from '../components/hero-area';
import SelectedProjects from '../components/selected-projects';
// import OtherProjects from '../components/other-projects';
import useScrollToTop from "../hooks/useScrollToTop";
import About from "../components/about-me"
import { Helmet } from "react-helmet";
import { motion, useScroll, useTransform } from 'framer-motion';



const Home = () => {
  const { scrollY } = useScroll();

  const ySelectedProjects = useTransform(scrollY, [0, 500], [0, 0]);

  return (
    <Box>
      <Box position="fixed" width="100%" height={{base: "calc(60vh + 64px)", md: "calc(70vh + 64px)"}} zIndex="0" top="0" display="flex" justifyContent="center" alignItems={{base: 'center', lg: "center"}} 
      bgColor="#a6ffba">
        <HeroArea />
      </Box>
      <motion.div style={{ y: ySelectedProjects }}>
        <Box mt={{ base: "60vh", md: "70vh"}} >
          <SelectedProjects />
        </Box>
      </motion.div>
      {/* <OtherProjects /> */}
      <Box bg="#f6f6f6"  zIndex="9" position="relative">
        <About/>
      </Box>
      {/* <Box bg="#a6ffba" zIndex="9" position="relative">
      <CVSection />
      </Box> */}
      
      
    </Box>
  );
};

const IndexPage = () => {
  useScrollToTop();

  return (
    <Layout textColour="dark" fullWidth={false}>
      <Helmet>
        <title>Avinash Kaur — Product Designer</title>
        <meta name="description" content="Experienced product designer specialising in creating user-friendly and scalable digital experiences. Passionate about delivering innovative design solutions that enhance usability and user satisfaction." />
      </Helmet>
      <Home />
    </Layout>
  );
};

export default IndexPage;
