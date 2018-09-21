import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'
import Intro from '../components/Intro'
import Header from '../components/header'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <IntroContainer>
      <Header />
      <Intro />
    </IntroContainer>
    <About />
    <Services />
    <Contact />
  </Layout>
)

export default IndexPage

const IntroContainer = styled('div')`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(#ecd3ff, #c292e8);
`
