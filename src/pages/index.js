import React, { Component } from 'react'
import styled from 'react-emotion'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from 'react-scroll'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Intro from '../components/Intro'
import About from '../components/About'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments)
    })
  }
  scrollToTop() {
    scroll.scrollToTop()
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }
  render() {
    return (
      <Layout>
        <IntroContainer>
          <Container>
            <TitleContainer>
              <Logo />
              <Title>Joey Ricketts</Title>
              <Links>
                <An href="https://www.linkedin.com/in/joeyricketts/">
                  <Image sizes={this.props.data.linkedin.sizes} />
                </An>
                <An href="https://github.com/JoeyR84">
                  <Image sizes={this.props.data.github.sizes} />
                </An>
                <An href="https://www.instagram.com/climb_or_code/">
                  <Image sizes={this.props.data.instagram.sizes} />
                </An>
              </Links>
            </TitleContainer>
            <List>
              <Item
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Item>
              <Item
                activeClass="active"
                to="techstack"
                spy={true}
                smooth={true}
                duration={500}
              >
                Tech Stack
              </Item>
              <Item
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Item>
            </List>
          </Container>
          <Intro photo={this.props.data.faceImage} />
        </IntroContainer>
        <Element name="about">
          <About />
        </Element>
        <Element name="techstack">
          <TechStack />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </Layout>
    )
  }
}

const IntroContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #587cb0;
  @media (max-width: 420px) {
    height: 180vh;
  }
`
const Container = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

const TitleContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled('p')`
  display: flex;
  color: #fff;
  font-size: 24px;
  width: 150px;
  margin-left: 12px;
  margin-top: 30px;
`

const Logo = styled('div')`
  display: flex;
  background-color: #000;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-left: 2%;
`

const Links = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const An = styled('a')`
  display: flex;
  margin-right: 10px;
`

const Image = styled(Img)`
  display: flex;
  width: 25px;
  height: 25px;
`

const List = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 12px;
`

const Item = styled(Link)`
  display: flex;
  margin-left: 5vw;
  font-size: 18px;
  font-weight: 300;
  color: #fff;
`

export const imageQuery = graphql`
  query imageQuery {
    faceImage: imageSharp(original: { src: { regex: "/face/" } }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    linkedin: imageSharp(original: { src: { regex: "/linkedin/" } }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    github: imageSharp(original: { src: { regex: "/github/" } }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    instagram: imageSharp(original: { src: { regex: "/instagram/" } }) {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
