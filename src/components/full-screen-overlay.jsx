import React, { useState, useCallback } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, Box, Heading, Text, List, ListItem, Button, VStack, Flex, IconButton } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons from react-icons


function FullScreenOverlay({ isOpen, onClose, heading, subProjects }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Wrap in useCallback to avoid unnecessary re-creations
  const handleClose = useCallback(() => {
    setCurrentProjectIndex(0);  // Reset the index to 0
    onClose();                  // Call the original onClose function passed as prop
  }, [onClose]);

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => Math.min(prevIndex + 1, subProjects.length - 1));
  };

  const project = subProjects?.[currentProjectIndex]; // Safe access using optional chaining

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="full">
      <ModalOverlay />
      <ModalContent m={0} bg="rgba(0,0,0, 0.7)" backdropFilter="blur(15px)" position="relative">
        <Flex direction={{ base: 'column', lg: 'row' }}>

          <Box
            width="100%"
            height={{ base: '40vh', lg: '100vh' }} // Set height accordingly if different
            overflow="hidden"
            bg="#a6ffba"
            bgImage={`url(${project.imgSrc})`}
            bgPosition="center center"
            bgRepeat="no-repeat"
            bgSize={heading === "Prototypes" ? "contain" : "cover"}
          ></Box>

          <Box
            width="100%"
            p={10}>
            <ModalCloseButton
      onClick={handleClose}
      width="72px" // Specifies the width of the button
      height="72px" // Specifies the height of the button
      borderRadius="50%" // Makes the background circle
      backgroundColor="rgba(26,26,26,0.1)"
      color="#fff" // Sets the color of the 'x' icon
      fontSize={{ base: "1.25rem", lg: "1.5rem" }}
      margin={{ base: "1rem 1rem 0 0", lg: "2rem 2rem 0 0" }}
      padding="1.5rem"
      _hover={{
        
        backgroundColor: "rgba(118, 181, 132, 0.2)"
      }}
    />
            <Flex direction="column" height="100%">
              <VStack spacing="3rem" align="start">
                <Box>
                  <Text size="lg" color="#7B7A7E" textTransform="uppercase" mb="1rem">
                    {heading} · {project.year}
                  </Text>

                  <Heading size={{base: "2xl", md: "3xl"}} color="#fff">{project.name || 'No Project Selected'}</Heading>


                </Box>

                <Box>
                  <Text size="lg" maxWidth="40rem" color="#fff">
                    {project.description || 'No description available.'}
                  </Text>
                </Box>

                <Box>
                  <Text size="lg" mb={2} color="#7B7A7E">ROLE</Text>
                  <Text size="lg" color="#fff">{project.role}</Text>

                </Box>

                {project.impact && project.impact.length > 0 && (
                  <Box>
                    <Text size="lg" mb={2} color="#7B7A7E">IMPACT</Text>
                    <List spacing={2}>
                      {project.impact.map((item, index) => (
                        <ListItem key={index}><Text size="lg" color="#fff">{item}</Text></ListItem>
                      ))}
                    </List>
                  </Box>
                )}




              </VStack>

              
            </Flex>
          </Box>
        </Flex>
        
              <IconButton
      position="absolute"
      left="1rem"
      top={{base: "30vh", lg: "45vh" }}
      height= "auto" // Specifies the height of the button
      borderRadius= "50%" // Makes the background circle
      
      border= "solid 2px #fff"
      color= "#fff"
      fontSize= "20px"
      // boxShadow="0px 4px 16px rgba(0, 0, 0, 0.2)" 
      padding= "1.5rem"
      backgroundColor= "rgba(26,26,26,0.15)"
      onClick={handlePrev}
      isDisabled={currentProjectIndex === 0}
      icon={<FaArrowLeft />} // Use left arrow icon
      aria-label="Previous Project"
      _hover={{
        
        backgroundColor: "rgba(118, 181, 132, 0.2)"
      }}
    />
    <IconButton
      position="absolute"
      right="1rem"
      top={{base: "30vh", lg: "45vh" }}
      height= "auto" // Specifies the height of the button
      borderRadius= "50%" // Makes the background circle
      
      border= "solid 2px #fff"
      color= "#fff"
      fontSize= "20px"
      padding= "1.5rem"
      backgroundColor= "rgba(26,26,26,0.15)"
      onClick={handleNext}
      isDisabled={currentProjectIndex === subProjects.length - 1}
      icon={<FaArrowRight />} // Use right arrow icon
      aria-label="Next Project"
      _hover={{
        
        backgroundColor: "rgba(118, 181, 132, 0.2)"
      }}
    />
      </ModalContent>
    </Modal>
  );
}

export default FullScreenOverlay;
