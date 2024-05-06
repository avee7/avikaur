import React from 'react'
import { Box } from '@chakra-ui/react'
import { motion } from "framer-motion";
import  HeroArea  from './hero-area';
import SelectedProjects from './selected-projects';
import OtherProjects from './other-projects'
import CVSection from './cv-section';
import HeroAnimation from './hero-animation';




const MotionCircle = motion(Box);



export const Home = () => (
 <Box>
  {/* <HeroAnimation /> */}
  <HeroArea />

  
  <SelectedProjects />
  <OtherProjects />
  <CVSection />

 </Box>
  
 


)