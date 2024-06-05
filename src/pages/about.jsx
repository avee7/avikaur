import * as React from "react"

import Layout from "../components/layout"
import AboutMe from "../components/about-me"
import useScrollToTop from "../hooks/useScrollToTop";

const About = () => {
  useScrollToTop();

  return (
    <Layout>
      <AboutMe />
    </Layout>
  )

}

export default About
