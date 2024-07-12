import React from "react";
import { motion } from "framer-motion";
import { Box } from '@chakra-ui/react';

const MotionSvg = motion.svg;
const MotionLine = motion.line;

function HeroAnimation() {

  return (
    <Box position="absolute" top="0" left="0" height="100%" width="100vw" backgroundColor="transparent" mt={{ base: "-6rem", lg: "-10rem" }}>
      <MotionSvg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', zIndex: 1 }}>
        
      <MotionLine
          x1="0" y1="60" x2="100" y2="-10"
          stroke="#5A5D9F"
          strokeWidth="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4 }}
        />
        {/* Second Line */}
        <MotionLine
          x1="0" y1="70" x2="100" y2="0"
          stroke="#5A5D9F"
          strokeWidth="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4 }}
        />
        {/* Third Line */}
        <MotionLine
          x1="0" y1="80" x2="100" y2="10"
          stroke="#5A5D9F"
          strokeWidth="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4 }}
        />
      </MotionSvg>
      
    
    </Box>
  );
}

export default HeroAnimation;


