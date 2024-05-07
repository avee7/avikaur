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
  <Box position="absolute" width="100%" height="90vh">
    
  </Box>

  <HeroArea />

  
  <SelectedProjects />
  <OtherProjects />
  <CVSection />

 </Box>
  
 


)