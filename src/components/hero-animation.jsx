import React from "react";
import { motion } from "framer-motion";
import { Box } from '@chakra-ui/react';

const MotionSvg = motion.svg;
const MotionLine = motion.line;
const gradients = [
  // '#f6fff8',
  'rgba(246, 255, 248, 0)',
  'rgba(246, 255, 248, 0)',
  'rgba(246, 255, 248, 0)',
  // '#e3ffea',
  // '#d6ffdf',
  '#c3ffd1',
  '#b8ffc8',
  '#a6ffba',
  '#97e8a9',
  '#76b584',
  // '#5b8c66',
  // '#466b4e',
];

function HeroAnimation() {
  return (



    // </Box>
    // <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex="-1">

    //     <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">

    //   <circle cx="150" cy="150" r="5" fill="rgba(209, 207, 255, 0.2)">
    //     <animate attributeName="cy" values="150;300;150" dur="5s" repeatCount="indefinite" />
    //     <animate attributeName="cx" values="150;400;150" dur="7s" repeatCount="indefinite" />
    //   </circle>
    //   <rect x="50" y="50" width="4" height="4" fill="rgba(209, 207, 255, 0.1)">
    //     <animate attributeName="x" values="50;300;50" dur="6s" repeatCount="indefinite" />
    //     <animate attributeName="y" values="50;200;50" dur="8s" repeatCount="indefinite" />
    //   </rect>
    //   <circle cx="600" cy="400" r="3" fill="rgba(209, 207, 255, 0.3)">
    //     <animate attributeName="cy" values="400;150;400" dur="7s" repeatCount="indefinite" />
    //     <animate attributeName="cx" values="600;300;600" dur="5s" repeatCount="indefinite" />
    //   </circle>
    //   <rect x="500" y="500" width="6" height="6" fill="rgba(209, 207, 255, 0.1)">
    //     <animate attributeName="x" values="500;700;500" dur="8s" repeatCount="indefinite" />
    //     <animate attributeName="y" values="500;300;500" dur="6s" repeatCount="indefinite" />
    //   </rect>
    //   <circle cx="250" cy="450" r="5" fill="rgba(209, 207, 255, 0.2)">
    //     <animate attributeName="cy" values="450;350;450" dur="4s" repeatCount="indefinite" />
    //     <animate attributeName="cx" values="250;450;250" dur="6s" repeatCount="indefinite" />
    //   </circle>
    //   <rect x="700" y="100" width="5" height="5" fill="rgba(209, 207, 255, 0.2)">
    //     <animate attributeName="x" values="700;400;700" dur="5s" repeatCount="indefinite" />
    //     <animate attributeName="y" values="100;400;100" dur="7s" repeatCount="indefinite" />
    //   </rect>
    // </svg>

    // </Box>


   <Box position="absolute" left="0" top="0" height= '80vh' width="100%">
    <motion.div
      style={{
        position: "absolute",
        top: "-50%",
        left: "50%",
        transform: 'translateX(-50%)'
      }}
    >

      <motion.svg width="1600" height="1600" viewBox="0 0 1600 1600">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            {gradients.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (gradients.length - 1)) * 100}%`}
                style={{ stopColor: color, stopOpacity: 1 }}
              />
            ))}
          </linearGradient>
        </defs>

        <motion.circle
          cx="800"
          cy="800"
          r="600"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          animate={{
            rotate: [360, 0],
            transition: {
              repeat: Infinity,
              duration: 4,
              ease: 'linear',
            },
          }}
        />


      </motion.svg>
    </motion.div>
    <motion.div
      style={{
        position: "absolute",
        top: "-10%",
        left: "50%",
        transform: 'translateX(-50%)'
      }}
    >
      <motion.svg width="1200" height="1200" viewBox="0 0 1200 1200">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            {gradients.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (gradients.length - 1)) * 100}%`}
                style={{ stopColor: color, stopOpacity: 1 }}
              />
            ))}
          </linearGradient>
        </defs>

        <motion.circle
          cx="600"
          cy="600"
          r="500"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          animate={{
            rotate: [360, 0],
            transition: {
              repeat: Infinity,
              duration: 4,
              ease: 'linear',
            },
          }}
        />


      </motion.svg>

    </motion.div>

   </Box>
    



  )

}

export default HeroAnimation;


