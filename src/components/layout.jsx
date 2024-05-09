// src/components/layout.js
import React from "react"
import { Box } from "@chakra-ui/react"
import Header from "./header"
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../@chakra-ui/gatsby-plugin/theme'; 

import Footer from "./footer"

const Layout = ({ children }) => (
  <ChakraProvider theme={theme}>
      <Box bg={"#0A0911"}>
      <Header/>
      {children}
      <Footer/>
      </Box>
    </ChakraProvider>
);

export default Layout;