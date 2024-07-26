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
    
  
    <motion.div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      position: "absolute",
      top: "40%",
      // left: "20%",
      // opacity: '0.5'
    }}
  >
    <motion.svg width="1500" height="1500" viewBox="0 0 600 600">
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
        cx="300"
        cy="300"
        r="280"
        stroke="url(#grad1)"
        strokeWidth="2"
        fill="none"
        animate={{
          rotate: [0, 360],
          transition: {
            repeat: Infinity,
            duration: 4,
            ease: 'linear',
          },
        }}
      />
      <motion.circle
        cx="300"
        cy="300"
        r="200"
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
      {/* <motion.circle
        cx="300"
        cy="300"
        r="120"
        stroke="url(#grad1)"
        strokeWidth="4"
        fill="none"
        animate={{
          rotate: [0, 360],
          transition: {
            repeat: Infinity,
            duration: 2,
            ease: 'linear',
          },
        }}
      /> */}
    </motion.svg>
  </motion.div>
//   <motion.div
//   style={{
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     background: 'black', // Set background color to make the dots stand out
//   }}
// >
//   <svg width="600" height="600" viewBox="0 0 600 600">
//     <defs>
//       <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" style={{ stopColor: '#f6fff8', stopOpacity: 1 }} />
//         <stop offset="100%" style={{ stopColor: '#466b4e', stopOpacity: 1 }} />
//       </linearGradient>
//     </defs>
    
//     <circle cx="300" cy="300" r="280" stroke="url(#grad1)" strokeWidth="2" fill="none" />
//     <circle cx="300" cy="300" r="200" stroke="url(#grad1)" strokeWidth="2" fill="none" />
//     <circle cx="300" cy="300" r="120" stroke="url(#grad1)" strokeWidth="2" fill="none" />

//     <motion.circle
//       cx="300"
//       cy="20"
//       r="10"
//       fill="#FFFFFF"
//       style={{ filter: 'blur(5px)' }}
//     >
//       <animateMotion
//         dur="8s"
//         repeatCount="indefinite"
//       >
//         <mpath href="#path1" />
//       </animateMotion>
//     </motion.circle>
    
//     <motion.circle
//       cx="300"
//       cy="100"
//       r="10"
//       fill="#FFFFFF"
//       style={{ filter: 'blur(5px)' }}
//     >
//       <animateMotion
//         dur="6s"
//         repeatCount="indefinite"
//       >
//         <mpath href="#path2" />
//       </animateMotion>
//     </motion.circle>
    
//     <motion.circle
//       cx="300"
//       cy="180"
//       r="10"
//       fill="#FFFFFF"
//       style={{ filter: 'blur(5px)' }}
//     >
//       <animateMotion
//         dur="4s"
//         repeatCount="indefinite"
//       >
//         <mpath href="#path3" />
//       </animateMotion>
//     </motion.circle>
    
//     <path id="path1" d="M 300,300 m -280,0 a 280,280 0 1,0 560,0 a 280,280 0 1,0 -560,0" fill="none" />
//     <path id="path2" d="M 300,300 m -200,0 a 200,200 0 1,0 400,0 a 200,200 0 1,0 -400,0" fill="none" />
//     <path id="path3" d="M 300,300 m -120,0 a 120,120 0 1,0 240,0 a 120,120 0 1,0 -240,0" fill="none" />
//   </svg>
// </motion.div>

  )

}

export default HeroAnimation;


