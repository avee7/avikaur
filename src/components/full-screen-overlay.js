import React, { useState, useCallback } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, Box, Heading, Text, Button, VStack, Flex, Spacer } from '@chakra-ui/react';

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
          <Box width="40%" overflow="hidden">
            {/* Optional image here */}
          </Box>
          <Box width="60%" p={10}>
            <ModalCloseButton onClick={handleClose} />
            <Flex direction="column" height="100%">
              <VStack spacing={4} align="start">
                <Text size="lg" color="#7B7A7E" textTransform="uppercase">{heading} · {project.year}</Text>
                
                <Heading size="xl">{project?.name || 'No Project Selected'}</Heading>
                <Text size="xl" maxW="40rem">{project?.description || 'No description available.'}</Text>
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
