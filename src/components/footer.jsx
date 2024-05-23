// import React from "react";
// import { Box, Text, Heading, Container, VStack, Flex, Link } from "@chakra-ui/react";

// const Footer = () => (
//   <Box bg="rgba(90, 93, 159, 0.18)" w="100%">
//     <Container maxW="1300px" pt="4rem" pb="2rem" color="#e0e0e0">
//       <Flex 
//         direction={{ base: 'column', md: 'row' }} // Change direction based on screen size
//         justifyContent="space-between"
//         alignItems={{ base: 'flex-start', md: 'center' }} // Adjust alignment based on screen size
//         gap={{ base: '2rem', md: '0' }} // Add gap for better spacing on small screens
//       >
//         <VStack 
//           alignItems="flex-start" 
//           justifyContent="space-between" 
//           height="100%" 
//           width={{ base: '100%', md: 'auto' }} // Adjust width based on screen size
//         >
//           <Box pb={{ base: "2rem", md: "5rem" }}>
//             <Heading 
//               size={{ base: 'lg', md: 'xl' }} 
//               background="linear-gradient(263deg, #bba6ff 0%, #6c63ff 100%)" 
//               backgroundClip="text"
//             >
//               Would like to talk?
//             </Heading>
//             <Text pt='1rem' fontSize={{ base: 'lg', md: 'xl' }}>
//               Happy to grab a coffee and chat :)
//             </Text>
//             <Text pt="2rem" fontSize={{ base: 'lg', md: 'xl' }}>
//               avikaur.design@gmail.com
//             </Text>
//           </Box>
//           <Box width="100%">
//             <Text fontSize="sm">© 2024 Avinash Kaur. All Rights Reserved</Text>
//           </Box>
//         </VStack>

//         <VStack 
//           alignItems="flex-start" 
//           gap="1.5rem" 
//           height="100%" 
//           width={{ base: '100%', md: 'auto' }} // Adjust width based on screen size
//         >
//           <Link fontSize="lg" href="/">Home</Link>
//           <Link fontSize="lg" href="/about">About</Link>
//           <Link fontSize="lg" href="/contact">Contact</Link>
//         </VStack>

//         <VStack 
//           pr={{ base: '0', md: "2rem" }} // Adjust padding based on screen size
//           alignItems="flex-start" 
//           justifyContent="flex-start" 
//           gap="1.5rem" 
//           height="100%" 
//           width={{ base: '100%', md: 'auto' }} // Adjust width based on screen size
//         >
//           <Link fontSize="lg" href="https://www.linkedin.com/in/avinash-kaur9/" isExternal>Linkedin</Link>
//           <Link fontSize="lg" href="https://adplist.org/mentors/avinash-kaur" isExternal>ADPList</Link>
//           <Link fontSize="lg" href="https://twitter.com/avee_design" isExternal>X/Twitter</Link>
//         </VStack>
//       </Flex>
//     </Container>
//   </Box>
// );

// export default Footer;
import React from "react";
import { Box, Text, Heading, Container, VStack, Flex, Link } from "@chakra-ui/react";

const Footer = () => (
  <Box bg="rgba(90, 93, 159, 0.18)" w="100%">
    <Container maxW="1300px" pt="4rem" pb="2rem" color="#e0e0e0">
      <Flex 
        direction={{ base: 'column', md: 'row' }} // Change direction based on screen size
        justifyContent={{ base: 'flex-start', md: 'space-between' }} // Add space between items on larger screens
        alignItems={{ base: 'flex-start', md: 'flex-start' }} // Adjust alignment based on screen size
        gap={{ base: '2rem', md: '0' }} // Add gap for better spacing on small screens
      >
        <VStack 
          alignItems="flex-start" 
          justifyContent="space-between" 
          height="100%" 
          width={{ base: '100%', md: 'auto' }} // Adjust width based on screen size
        >
          <Box pb={{ base: "2rem", md: "5rem" }}>
            <Heading 
              size={{ base: 'lg', md: 'xl' }} 
              background="linear-gradient(263deg, #bba6ff 0%, #6c63ff 100%)" 
              backgroundClip="text"
            >
              Would like to talk?
            </Heading>
            <Text pt='1rem' fontSize={{ base: 'lg', md: 'xl' }}>
              Happy to grab a coffee and chat :)
            </Text>
            <Text pt="2rem" fontSize={{ base: 'lg', md: 'xl' }}>
              avikaur.design@gmail.com
            </Text>
          </Box>
        </VStack>

        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          gap={{ base: '1.5rem', md: '4rem' }} // Adjust gap between link groups
          flexWrap={{ base: 'wrap', md: 'nowrap' }} // Wrap on smaller screens only
          width={{ base: '100%', md: 'auto' }} // Adjust width based on screen size
          justifyContent={{ base: 'space-between', md: 'flex-end' }} // Align to the end on larger screens
          alignItems={{ base: 'flex-start', md: 'center' }} // Align items on larger screens
        >
          <Flex direction="row" gap={{ base: '1.5rem', md: '2rem' }}>
            <VStack alignItems="flex-start" gap="1.5rem" width={{ base: '100%', md: 'auto' }}>
              <Link fontSize="lg" href="/">Home</Link>
              <Link fontSize="lg" href="/about">About</Link>
              <Link fontSize="lg" href="/contact">Contact</Link>
            </VStack>
            <VStack alignItems="flex-start" gap="1.5rem" width={{ base: '100%', md: 'auto' }}>
              <Link fontSize="lg" href="https://www.linkedin.com/in/avinash-kaur9/" isExternal>Linkedin</Link>
              <Link fontSize="lg" href="https://adplist.org/mentors/avinash-kaur" isExternal>ADPList</Link>
              <Link fontSize="lg" href="https://twitter.com/avee_design" isExternal>X/Twitter</Link>
            </VStack>
          </Flex>
        </Flex>
      </Flex>

      <Box width="100%" pt={{ base: '5rem', md: '1rem' }}>
        <Text fontSize="sm">© 2024 Avinash Kaur. All Rights Reserved</Text>
      </Box>
    </Container>
  </Box>
);

export default Footer;

