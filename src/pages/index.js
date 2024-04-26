import React from "react"
import { Home } from "../components/Home";
import Layout from "../components/Layout";
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../@chakra-ui/gatsby-plugin/theme'; 

const IndexPage = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Home />
    </Layout>
  </ChakraProvider>
);

export default IndexPage;