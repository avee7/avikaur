import React from "react"
import Layout from "../components/layout";
import Home from "../components/home";
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../@chakra-ui/gatsby-plugin/theme'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Home />
    </Layout>
  </ChakraProvider>
);

export default IndexPage;