// src/components/layout.js
import React from "react"
import { Box } from "@chakra-ui/react"
import Header from "./header"
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../@chakra-ui/gatsby-plugin/theme'; 
// import AdobeFonts from "./AdobeFonts";

import Footer from "./footer"

const Layout = ({ children, headerBg, textColour, fullWidth }) => (
  <ChakraProvider theme={theme}>
      <Box bg={"#fff"}>
      {/* <AdobeFonts /> */}
      <Header headerBg={headerBg} textColour={textColour} fullWidth={fullWidth}/>
      {children}
      <Footer/>
      </Box>
    </ChakraProvider>
);

export default Layout;