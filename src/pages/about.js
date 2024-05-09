import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutMe from "../components/about-me"

const About = () => (
  <Layout>
    <AboutMe />
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default About
