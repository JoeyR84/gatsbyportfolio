import React, { Component } from 'react'
import styled from 'react-emotion'
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'

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
            </TitleContainer>
            <List>
              <Item
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
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
          <Intro />
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
  background-image: linear-gradient(#2b35bf, #1e28bc);
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
`

const Title = styled('p')`
  display: flex;
  color: #fff;
  font-size: 24px;
  width: 50vw;
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
