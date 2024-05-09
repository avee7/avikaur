import React, { useState, useCallback } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, Box, Heading, Text, List, ListItem, Button, VStack, Flex, Spacer, Image } from '@chakra-ui/react';

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
      <ModalContent m={0} bg="rgba(10,19,17,0.1)" backdropFilter="blur(15px)">
        <Box display="flex" height="100vh">
          
          <Box
            width="40%"
            height="100vh" // Set height accordingly if different
            overflow="hidden"
            bg="rgba(145, 128, 255, 0.5)"
            // bg="#7B7A7E"
            bgImage={`url(${project.imgSrc})`}
            bgPosition={heading === "Prototypes" ? "center center" : "-5rem center"}
            bgRepeat="no-repeat"
            bgSize={heading === "Prototypes" ? "contain" : "cover"}
          ></Box>
        
          <Box width="60%" p={10}>
            <ModalCloseButton
              onClick={handleClose}
              size="lg" // This sets the size to a larger preset, if available. Chakra UI doesn't use size for ModalCloseButton by default, so this might not affect it.
              sx={{
                width: "40px", // Specifies the width of the button
                height: "40px", // Specifies the height of the button
                borderRadius: "50%", // Makes the background circle
                backgroundColor: "transparent", // Sets a semi-transparent white background
                border: "solid 2px #6C63FF",
                color: "#6C63FF", // Sets the color of the 'x' icon
                fontSize: "20px", // Enlarges the 'x' icon
                margin: "2rem 2rem 0 0",
                padding: "1.5rem",
                _hover: {
                  backgroundColor: "#1a1a1a" // Changes background on hover for better interaction visibility
                }
              }}
            />
            <Flex direction="column" height="100%">
              <VStack spacing={10} align="start">
                <Box>
                  <Text size="lg" color="#7B7A7E" textTransform="uppercase" mb="1rem">
                    {heading} · {project.year}
                  </Text>

                  <Heading size="2xl">{project.name || 'No Project Selected'}</Heading>


                </Box>

                <Box>
                  <Text size="md" maxWidth="40rem">
                    {project.description || 'No description available.'}
                  </Text>
                </Box>

                <Box>
                  <Text size="lg" mb={2} color="#7B7A7E">ROLE</Text>
                  <Text size="md">{project.role}</Text>

                </Box>

                {project.impact && project.impact.length > 0 && (
  <Box>
    <Text size="lg" mb={2} color="#7B7A7E">IMPACT</Text>
    <List spacing={2}>
      {project.impact.map((item, index) => (
        <ListItem key={index}><Text size="md">{item}</Text></ListItem>
      ))}
    </List>
  </Box>
)}




              </VStack>
              <Spacer />
              <Box>
                <Button mr={4} onClick={handlePrev} isDisabled={currentProjectIndex === 0}>Previous Project</Button>
                <Button onClick={handleNext} isDisabled={currentProjectIndex === subProjects.length - 1}>Next Project</Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
}

export default FullScreenOverlay;
