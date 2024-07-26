import React from "react";
import { motion } from "framer-motion";
import { Box } from '@chakra-ui/react';
import HeroBg from "../images/hero-bg.png"

const MotionSvg = motion.svg;
const MotionLine = motion.line;
const gradients = [
  // '#f6fff8',
  'rgba(246, 255, 248, 0)',
  // 'rgba(246, 255, 248, 0)',
  // 'rgba(246, 255, 248, 0)',
  // '#e3ffea',
  // '#d6ffdf',
  // '#c3ffd1',
  '#b8ffc8',
  '#a6ffba',
  '#97e8a9',
  '#76b584',
  // '#5b8c66',
  // '#466b4e',
];

function HeroAnimation() {
  return (

    <Box>


      <Box position="absolute" display={{base: "none", lg: "block"}} left="0" top="0" height='80vh' width="100%">

        <motion.div
          style={{
            position: "absolute",
            top: "-35%",
            left: "0",
            // transform: 'translateX(-50%)'
          }}
        >

          <motion.svg width="2000" height="2000" viewBox="0 0 2000 2000">
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
              r="800"
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


          </motion.svg>
        </motion.div>


      </Box>
      <Box position="absolute" left="0" top="0" height='80vh' width="100%">

        <motion.div
          style={{
            position: "absolute",
            top: "-35%",
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
              r="400"
              stroke="url(#grad1)"
              strokeWidth="2"
              fill="none"
              animate={{
                rotate: [0, 360],
                transition: {
                  repeat: Infinity,
                  duration: 4,
                  ease: 'linear',
                  // delay: 0.5
                },
              }}
            />


          </motion.svg>

        </motion.div>

      </Box>

      <Box position="absolute" left="0" top="0" height="100%" width="100%" bgImage={`url(${HeroBg})`}
        bgSize={{base: "250% auto", sm:"cover"}}
        bgRepeat="no-repeat"
        bgPosition={{ base: "20% 25%", xl: "center center" }}></Box>
    </Box>


  )

}

export default HeroAnimation;


