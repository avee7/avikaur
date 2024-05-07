import React, { useState } from "react";
import { Grid, GridItem, Heading, Image, Container, Flex, useDisclosure } from '@chakra-ui/react';
import { motion } from "framer-motion";

import DSImage from "../images/DSImages.svg";
import ProductDesignImage from "../images/projectImage.svg";
import PrototypesImage from "../images/prototypeimg.svg";

import FullScreenOverlay from './full-screen-overlay'; // Ensure the path is correct

// Motion wrapper for Flex
const MotionFlex = motion(Flex);

const OtherProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null); // Define state for selected item

  // Define items data
  const items = [
    {
      id: 1,
      imageSrc: DSImage,
      heading: "Design Systems",
      subProjects: [
        { name: "Isoshealth Pattern Library", year: "2017", description: "As the sole designer on the team, I took the responsibility for establishing and unifying foundational styles and UI components within Sketch. Drawing inspiration from ReactJS Storybook, I created a dynamic living pattern library using ReactJS. This approach empowered developers to efficiently construct user interfaces, resulting in significant time and effort savings." },
        { name: "CubiX Design System", year: "2024", description: "I am leading the development of the Cubix Design System project, a multi-brand platform designed to unify and enhance our product development efforts. My role encompasses the planning and execution of foundational styles and scalable components, aimed at ensuring consistency and efficiency across CubixCraft's diverse suite of digital products." },
        { name: "MDUI Design System", year: "2021", description: "I played a pivotal role in developing a unified visual language for Mendeley, successfully eliminating inconsistencies across six distinct products. This initiative streamlined interfaces and significantly improved the user experience across our product suite." }
      ],
    },
    {
      id: 2,
      imageSrc: ProductDesignImage,
      heading: "Product Design",
      subProjects: [
        { name: "Groups", year: "2020", description: "I led the design of the 'Groups' feature for the Mendeley Reference Manager, greatly enhancing the user experience in group formation and management. This innovation was met with enthusiastic feedback during user testing, particularly for its user-friendly interface and streamlined interaction capabilities. These enhancements have significantly improved how users collaborate and manage their research activities on the platform, marking a major advancement in user engagement and satisfaction." },
        { name: "Browse References", year: "2020", description: "I led the integration of the 'Browse References' feature from Mendeley Reference Manager into the Mendeley Cite plugin for Microsoft Word, enhancing usability in a compact interface. Despite space constraints, the design maintained clarity and ease of use, receiving positive feedback for its effectiveness and significantly boosting the utility of the Mendeley Cite plugin." },
        { name: "Navio", year: "2018", description: "In Macmillan Education, I designed engaging gaming experiences for pre-primary students, focusing on creating new activities that transform learning into an enjoyable journey. This initiative was aimed at enhancing educational engagement through interactive and fun learning methods." }
      ],
    },
    {
      id: 3,
      imageSrc: PrototypesImage,
      heading: "Prototypes",
      subProjects: [
        { name: "AjabShahar", year: "2015", description: "At Thoughtworks, for the 'AjabShahar' project, I crafted HTML, CSS, and JavaScript prototypes to secure client approval, focusing on delivering the immersive experience the client desired. My work featured complex interactions such as parallax effects and advanced CSS3 animations, demonstrating the innovative capabilities of our designs and effectively engaging our clients." },
        { name: "Mendeley Prototypes", year: "2019-2023", description: "During my tenure at Mendeley, I developed numerous prototypes using HTML, CSS, and Azure, transforming initial ideas into visual representations that accelerated decision-making processes. This work not only facilitated quicker validations but also significantly enhanced our project development lifecycle." }
      ],
    },
  ];

  const handleClick = (item) => {
    setSelectedItem(item);
    onOpen(); // Opens the modal
  };

  return (
    <Container maxW="1300px" pb="10rem">
      <Heading size="xl" mb={14}>Other Projects</Heading>

      <Grid
        h='556px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={4}
      >
        {items.map(item => (
          <GridItem key={item.id} rowSpan={item.id === 1 ? 2 : 1} onClick={() => handleClick(item)} overflow="hidden" bg="rgba(90, 93, 159,0.18)" borderRadius="20px" borderWidth="1px" borderColor="#5A5D9F">
            <MotionFlex
              height="100%"
              alignItems="center"
              justifyContent="center"
              position="relative"
              whileHover={{ scale: 1.1 }}
            >
              <Image src={item.imageSrc} zIndex="0" position="absolute" bottom="0rem" left="0" width="100%"/>
              <Heading size="lg" zIndex="1">{item.heading}</Heading>
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
