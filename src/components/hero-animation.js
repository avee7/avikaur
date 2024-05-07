import React from "react";
import { motion } from "framer-motion";
import { Box } from '@chakra-ui/react';

const MotionSvg = motion.svg;
const MotionLine = motion.line;
const MotionBox = motion(Box);

function HeroAnimation() {
  const ballSize = 24;  // Ball size in pixels

  return (
    <Box position="relative" height="100%" width="100vw" backgroundColor="transparent" mt="-10rem">
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
      {/* <MotionBox
        width={`${ballSize}px`}
        height={`${ballSize}px`}
        borderRadius="50%"
        backgroundColor="red"
        position="absolute"
        zIndex={2}
        initial={{
          x: `calc(0% - ${ballSize / 2}px)`,  // Subtract half the size to center on path
          y: `calc(100% - ${ballSize / 2}px)`
        }}
        animate={{
          x: `calc(50% - ${ballSize / 2}px)`,
          y: `calc(0% - ${ballSize / 2}px)`
        }}
        transition={{
          delay: 0.2,
          duration: 3,
          ease: "linear"
        }} */}
    
    </Box>
  );
}

export default HeroAnimation;





// import React from "react";
// import { motion } from "framer-motion";
// import { Box } from '@chakra-ui/react';

// const MotionBox = motion(Box);

// function HeroAnimation() {
//   // Defining the paths for the balls and the lines
//   const paths = [
//     { startY: '85vh', endY: '10vh' },
//     { startY: '65vh', endY: '30vh' },
//     { startY: '45vh', endY: '50vh' }
//   ];

//   const balls = [
//     { size: 48, color: 'red', duration: 18, path: paths[0] },
//     { size: 32, color: 'blue', duration: 12, path: paths[1] },
//     { size: 24, color: 'green', duration: 6, path: paths[2] }
//   ];

//   return (
//     <Box position="relative" height="100vh" width="100vw">
//       <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', zIndex: 1 }}>
//         {paths.map((path, index) => (
//           <line key={index} x1="0" y1="100" x2="100" y2="0" stroke="lightgray" strokeWidth="2"
//             style={{ transform: `translateY(${path.startY})` }} />
//         ))}
//       </svg>
//       {balls.map((ball, index) => (
//         <MotionBox
//           key={index}
//           width={`${ball.size}px`}
//           height={`${ball.size}px`}
//           borderRadius="50%"
//           backgroundColor={ball.color}
//           position="absolute"
//           zIndex={2} // Ensure balls are above the lines
//           initial={{ x: '0%', y: ball.path.startY }} // Match initial y with path start
//           animate={{
//             x: ['0vw', '100vw'], // From left to right
//             y: [ball.path.startY, ball.path.endY] // Match the animation with the line path
//           }}
//           transition={{
//             duration: ball.duration,
//             repeat: Infinity,
//             repeatType: "loop",
//             ease: "linear"
//           }}
//         />
//       ))}
//     </Box>
//   );
// }

// export default HeroAnimation;
