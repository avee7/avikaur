import React from "react";
import Layout from "../components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@chakra-ui/react';
import HeroArea from '../components/hero-area';
import SelectedProjects from '../components/selected-projects';
import OtherProjects from '../components/other-projects';
import CVSection from '../components/cv-section';
import HeroAnimation from '../components/hero-animation';
import useScrollToTop from "../hooks/useScrollToTop";
import About from "../components/about-me"
import { Helmet } from "react-helmet";
import { motion, useScroll, useTransform } from 'framer-motion';
// const MotionBox = motion(Box);


const Home = () => {
  const { scrollY } = useScroll();

  const ySelectedProjects = useTransform(scrollY, [0, 500], [0, 0]);

  return (
    <Box>
      <Box position="fixed" width="100%" height="calc(60vh + 64px)" zIndex="0" top="0" display="flex" justifyContent="center" alignItems={{base: 'center', lg: "center"}} 
      bgColor="#a6ffba">
        <HeroAnimation />
        <HeroArea />
      </Box>
      <motion.div style={{ y: ySelectedProjects }}>
        <Box mt={{ base: "60vh"}} >
          <SelectedProjects />
        </Box>
      </motion.div>
      <OtherProjects />
      <Box bg="#a6ffba"  zIndex="9" position="relative">
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
    <Layout textColour="dark">
      <Helmet>
        <title>Avinash Kaur — Product Designer</title>
        <meta name="description" content="Experienced product designer specialising in creating user-friendly and scalable digital experiences. Passionate about delivering innovative design solutions that enhance usability and user satisfaction." />
      </Helmet>
      <Home />
    </Layout>
  );
};

export default IndexPage;
