import React, { useState } from 'react';
import { Box, Image, IconButton, Flex, Container, Heading } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import MdUIImg from "../images/mdui-img1.png";
import GroupsImg from "../images/groups-img1.png";
import HabitAppImg from "../images/buildmyhabit.png";
import MCiteImg from "../images/mcite-img1.png";

const images = [
  { src: HabitAppImg, tilt: 2 }, // Example tilt for third image
  { src: MCiteImg, tilt: -2 },    // Example tilt for second image
  { src: GroupsImg, tilt: 3 },  // Example tilt for first image
  
  // { src: MdUIImg, tilt: -1 },     // Example tilt for fourth image
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesPerView = 2; // Number of images to show at once
  const slideWidth = 50; // Adjust this to control the slide distance (in vw or any other unit)

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < images.length - imagesPerView) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Box bg="#0A0911" zIndex="9" position="relative" pt={{ base: "8rem", lg: "10rem" }} pb={{ base: "8rem", lg: "12rem" }}>
      <Container maxW="1300px">
        <Heading size={{ base: '4xl', md: '5xl' }} mb={{ base: "3rem", md: "6rem" }} width="100%" mx="auto" color="#f4f4f4" textAlign="center">Other Projects</Heading>
      </Container>
      
      <Flex justifyContent="center" alignItems="center" position="relative" px="2rem" maxW="99vw" overflow="hidden" mx="auto" height="624px">
        <IconButton
          aria-label="Previous Slide"
          icon={<ArrowBackIcon />}
          onClick={prevSlide}
          position="absolute"
          left="0"
          zIndex="10"
          color= '#fff'
          bg= "rgba(26,26,26,0.8)"
          borderRadius= "50%"
          border= "1px solid #fff"
          _hover= {{ bg: "rgba(118, 181, 132, 0.2)" }}
           boxSize="3rem"
          disabled={currentIndex === 0}
        />
        
        <Flex
          transition="transform 0.5s ease-in-out"
          transform={`translateX(-${currentIndex * slideWidth}vw)`}
          justifyContent="flex-start"
          alignItems="center"
          minW="100%"
          gap={{base: "1rem", md: "2rem"}}
        >
          {images.map((image, index) => (
            <Box 
              key={index} 
              flex="0 0 50%" 
              px="1rem" 
              transform={`rotate(${image.tilt}deg)`} // Apply tilt here
              transition="transform 0.3s ease"
            >
              <Image
                src={image.src}
                // height="600px"
                maxW="100%"
                // objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
        
        <IconButton
          aria-label="Next Slide"
          icon={<ArrowForwardIcon />}
          onClick={nextSlide}
          position="absolute"
          right="0"
          color= '#fff'
          bg= "rgba(26,26,26,0.8)"
          borderRadius= "50%"
          border= "1px solid #fff"
          _hover= {{ bg: "rgba(118, 181, 132, 0.2)" }}
          zIndex="10"
          boxSize="3rem"
          disabled={currentIndex >= images.length - imagesPerView}
        />
      </Flex>
    </Box>
  );
};

export default Carousel;


