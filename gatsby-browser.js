/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
// gatsby-browser.js and gatsby-ssr.js
import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./src/@chakra-ui/gatsby-plugin/theme"


export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>
    {element}
  </ChakraProvider>
);

export const onRouteUpdate = ({ prevLocation }) => {
  if (prevLocation) {
    window.scrollTo(0, 0);
  }
};

// export const onRenderBody = ({ setHeadComponents }) => {
//   setHeadComponents([
//     <link
//       key="adobe-fonts"
//       rel="stylesheet"
//       href="https://use.typekit.net/zcl4usb.css"
//     />,
//   ]);
// };
