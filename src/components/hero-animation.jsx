import React from "react";
import { motion } from "framer-motion";
import { Box } from '@chakra-ui/react';

const MotionSvg = motion.svg;
const MotionLine = motion.line;

function HeroAnimation() {

  return (
    // <Box position="absolute" top="0" left="0" height="100%" width="100vw" backgroundColor="transparent" mt={{ base: "-6rem", lg: "-10rem" }}>
    //   <MotionSvg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', zIndex: 1 }}>
        
    //   <MotionLine
    //       x1="0" y1="60" x2="100" y2="-10"
    //       stroke="#5A5D9F"
    //       strokeWidth="0.1"
    //       initial={{ pathLength: 0 }}
    //       animate={{ pathLength: 1 }}
    //       transition={{ duration: 0.4 }}
    //     />
    //     {/* Second Line */}
    //     <MotionLine
    //       x1="0" y1="70" x2="100" y2="0"
    //       stroke="#5A5D9F"
    //       strokeWidth="0.1"
    //       initial={{ pathLength: 0 }}
    //       animate={{ pathLength: 1 }}
    //       transition={{ duration: 0.4 }}
    //     />
    //     {/* Third Line */}
    //     <MotionLine
    //       x1="0" y1="80" x2="100" y2="10"
    //       stroke="#5A5D9F"
    //       strokeWidth="0.1"
    //       initial={{ pathLength: 0 }}
    //       animate={{ pathLength: 1 }}
    //       transition={{ duration: 0.4 }}
    //     />
    //   </MotionSvg>
      
    
    // </Box>
    <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex="-1">
        
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
     
      <circle cx="150" cy="150" r="5" fill="rgba(209, 207, 255, 0.2)">
        <animate attributeName="cy" values="150;300;150" dur="5s" repeatCount="indefinite" />
        <animate attributeName="cx" values="150;400;150" dur="7s" repeatCount="indefinite" />
      </circle>
      <rect x="50" y="50" width="4" height="4" fill="rgba(209, 207, 255, 0.1)">
        <animate attributeName="x" values="50;300;50" dur="6s" repeatCount="indefinite" />
        <animate attributeName="y" values="50;200;50" dur="8s" repeatCount="indefinite" />
      </rect>
      <circle cx="600" cy="400" r="3" fill="rgba(209, 207, 255, 0.3)">
        <animate attributeName="cy" values="400;150;400" dur="7s" repeatCount="indefinite" />
        <animate attributeName="cx" values="600;300;600" dur="5s" repeatCount="indefinite" />
      </circle>
      <rect x="500" y="500" width="6" height="6" fill="rgba(209, 207, 255, 0.1)">
        <animate attributeName="x" values="500;700;500" dur="8s" repeatCount="indefinite" />
        <animate attributeName="y" values="500;300;500" dur="6s" repeatCount="indefinite" />
      </rect>
      <circle cx="250" cy="450" r="5" fill="rgba(209, 207, 255, 0.2)">
        <animate attributeName="cy" values="450;350;450" dur="4s" repeatCount="indefinite" />
        <animate attributeName="cx" values="250;450;250" dur="6s" repeatCount="indefinite" />
      </circle>
      <rect x="700" y="100" width="5" height="5" fill="rgba(209, 207, 255, 0.2)">
        <animate attributeName="x" values="700;400;700" dur="5s" repeatCount="indefinite" />
        <animate attributeName="y" values="100;400;100" dur="7s" repeatCount="indefinite" />
      </rect>
    </svg>

    </Box>

  );
}

export default HeroAnimation;


