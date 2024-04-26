// src/components/layout.js
import React from "react"
import { Box } from "@chakra-ui/react"
import Header from "./Header"

import Footer from "./footer"

const Layout = ({ children }) => (
  <Box bg={"#0A0911"}>
    <Header/>
    {children}
    <Footer/>
  </Box>
);

export default Layout;