import React, { useState } from "react";
import { Grid, GridItem, Heading, Image, Container, Flex, useDisclosure, Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { motion } from "framer-motion";

import DSImage from "../images/DSImages.svg";
import ProductDesignImage from "../images/projectImage.svg";
import PrototypesImage from "../images/prototypeimg.svg";
import isoshealthImg from "../images/isoshealth-img.webp"
import CubiXImg from "../images/cubix-img.png"
import MdUIImg from "../images/mdui-img.png"
import GroupsImg from "../images/groups-img.png"
import MCiteImg from "../images/mcite-img.webp"
import NavioImg from "../images/big-wheel.gif"

import FullScreenOverlay from './full-screen-overlay'; // Ensure the path is correct


const MotionFlex = motion(Flex);

const OtherProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

    // Define items data
  const items = [
    {
      id: 1,
      imageSrc: DSImage,
      heading: "Design Systems",
      subProjects: [
        { name: "CubiX Design System", year: "2024", imgSrc: CubiXImg, role: "UX Designer (Product Design and Design System))", impact: [
          "Streamlining Design Processes",
          "Anticipated Efficiency Gains",
          "Continuous Improvement"
        ], description: "We're in the process of building a multi-brand platform designed to streamline and improve our product development. This initiative introduces foundational styles and scalable components to ensure uniformity and efficiency throughout CubixCraft’s diverse product lineup. It’s a key step toward making our development processes more cohesive and responsive to market demands." },
        { name: "Isoshealth Pattern Library", year: "2017", imgSrc: isoshealthImg, role: "UX Designer, UI developer (solo project)", impact: [
          "Established foundational styles",
          "Unified UI components",
          "Streamlined developer workflows",
          "Enhanced design consistency"
        ], description: "A dynamic living pattern library, inspired by Storybook and developed in ReactJS, designed to unify the user experience across client and practitioner platforms." },
        { name: "MDUI Design System", year: "2021", imgSrc: MdUIImg, role: "UX Designer", impact: [
          "Enhanced Interface Consistency across 6 Mendeley products",
          "Streamlined User Interactions",
          "Improved User Satisfaction"
        ], description: "In a collaborative effort at Mendeley, we unified the user experience across six distinct products through design ideation workshops involving multiple UX teams. I played a key role in developing a cohesive visual language, which effectively eliminated inconsistencies and enhanced the usability of our entire product suite." }
      ],
    },
    {
      id: 2,
      imageSrc: ProductDesignImage,
      heading: "Product Design",
      subProjects: [
        { name: "Groups", year: "2020", imgSrc: GroupsImg, role: "UX Designer", impact: [
          "Positive User Testing Feedback",
          "Improved Collaboration amongst Researchers",
          "Increased User Engagement and Satisfaction"
        ], description: "I led the design of the 'Groups' feature for the Mendeley Reference Manager, significantly improving the process of forming and managing groups. These enhancements have significantly improved how users collaborate and manage their research activities on the platform" },
        { name: "Browse References", year: "2020", imgSrc: MCiteImg, role: "UX Designer", impact: [
          "Enhanced Usability",
          "Boosted Plugin Utility",
          "Maintained Clarity and Ease of Use",
          "Positive User Feedback"
        ], description: "I led the integration of the 'Browse References' feature from the Mendeley Reference Manager into the Mendeley Cite plugin for Microsoft Word. This project aimed to enhance usability within a compact interface, carefully maintaining clarity and ease of use despite the inherent space constraints." },
        { name: "Navio", year: "2018", imgSrc: NavioImg, role: "UI Designer", impact: [], description: "In Macmillan Education, I designed engaging gaming experiences for pre-primary students, focusing on creating new activities that transform learning into an enjoyable journey. This initiative was aimed at enhancing educational engagement through interactive and fun learning methods." }
      ],
    },
    {
      id: 3,
      imageSrc: PrototypesImage,
      heading: "Prototypes",
      subProjects: [
        { name: "AjabShahar", year: "2015", imgSrc: "", role: "UI developer (solo project)",  impact: [], description: "At Thoughtworks, for the 'AjabShahar' project, I crafted HTML, CSS, and JavaScript prototypes to secure client approval, focusing on delivering the immersive experience the client desired. My work featured complex interactions such as parallax effects and advanced CSS3 animations, demonstrating the innovative capabilities of our designs and effectively engaging our clients." },
        { name: "Mendeley Prototypes", year: "2019-2023", imgSrc: "", role: "UX Designer",  impact: [], description: "During my tenure at Mendeley, I developed numerous prototypes using HTML, CSS, and Azure, transforming initial ideas into visual representations that accelerated decision-making processes. This work not only facilitated quicker validations but also significantly enhanced our project development lifecycle." }
      ],
    },
  ];


  const handleClick = (item) => {
    if (item.id !== 3) {
      setSelectedItem(item);
      onOpen();
    }
  };

  const gridTemplateColumns = useBreakpointValue({ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' });

  return (
    <Container pb={{ base: "5rem",  lg: "10rem"}} bg={"#0A0911"} zIndex="9" position="relative" maxW="none">
      <Heading size='xl' mb={{base: "2rem", md: "3.5rem"}} maxW="1300px" width="100%" mx="auto">Other Projects</Heading>
      

      <Grid
        h='556px'
        maxW="1300px" width="100%" mx="auto"
        templateRows={{ base: 'auto', md: 'repeat(2, 1fr)' }}
        templateColumns={gridTemplateColumns}
        gap={4}
      >
        {items.map(item => (
          <GridItem 
            key={item.id} 
            rowSpan={{ base: 1, md: item.id === 1 ? 2 : 1 }}
            colSpan={{ base: 2, md: 1 }} // Stack on smaller screens
            onClick={() => handleClick(item)}
            overflow="hidden" 
            bg="rgba(90, 93, 159,0.18)" 
            borderRadius="20px" 
            borderWidth="1px" 
            borderColor="#5A5D9F"
            role="group" // Add group role for hover effect
          >
            <MotionFlex
              height="100%"
              alignItems="center"
              justifyContent="center"
              position="relative"
              whileHover={{ scale: 1.1 }}
            >
              <Image src={item.imageSrc} zIndex="0" position="absolute" bottom="0rem" left="0" width="100%"/>
              <Heading size="lg" 
              zIndex="1" 
              textShadow="0 4px 6px rgba(0, 0, 0, 0.5)"
               >{item.heading}</Heading>
              {item.id === 3 && (
                <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="rgba(0, 0, 0, 0.5)" display="flex" alignItems="flex-end" justifyContent="center"
                  opacity="0"
                  _groupHover={{ opacity: 1 }} 
                >
                  <Text size="lg" pb="1rem">Coming Soon</Text>
                </Box>
              )}
            </MotionFlex>
          </GridItem>
        ))}
      </Grid>

      {selectedItem && (
        <FullScreenOverlay
          isOpen={isOpen}
          onClose={onClose}
          heading={selectedItem.heading}
          subProjects={selectedItem.subProjects}
        />
      )}
    </Container>
  );
};

export default OtherProjects;
