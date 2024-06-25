import * as React from "react"

import Layout from "../components/layout"
import AboutMe from "../components/about-me"
import useScrollToTop from "../hooks/useScrollToTop";
import { Helmet } from "react-helmet";

const About = () => {
  useScrollToTop();

  return (
    <Layout>
       <Helmet>
        <title>About — Avinash Kaur</title>
      </Helmet>
      <AboutMe />
    </Layout>
  )

}

export default About
