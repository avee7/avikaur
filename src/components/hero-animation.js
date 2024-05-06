import React from "react";
import { motion } from "framer-motion";
import { Box } from '@chakra-ui/react';







const MotionBox = motion(Box);

function HeroAnimation() {
//   // Adjusted so all balls are parallel with even vertical spacing
//   const balls = [
//     { size: 24, color: 'green', duration: 15, startX: '0', endX: '20vh', startY: '30vh', endY: '-40vh' },
//     // { size: 48, color: 'blue', duration: 25, startY: '50vh', endY: '-20%' },
//     // { size: 32, color: 'red', duration: 20, startY: '70vh', endY: '0' },

    
    
//   ];

//   return (
//     <Box position="absolute" height="100vh" width="100vw" bg="transparent" zIndex="0">
     
//       {balls.map((ball, index) => (
//         <MotionBox
//           key={index}
//           width={`${ball.size}px`}
//           height={`${ball.size}px`}
//           borderRadius="50%"
//           backgroundColor={ball.color}
//           boxShadow="0 0 15px rgba(0,0,0,0.2)"
//           position="absolute"
//           zIndex="2" // Ensure balls are above any other background elements
//           initial={{ x: ball.startX, y: ball.startY }} // Start positions
//           animate={{
//             x: [ball.startX, ball.endY], // From left to right
//             y: [ball.startY, ball.endY] // Ensure they move parallel
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
}

export default HeroAnimation;
