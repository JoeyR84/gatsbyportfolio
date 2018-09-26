import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link as Pink, animateScroll as scroll } from 'react-scroll'

import { Link } from 'gatsby'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Title>Joey Ricketts</Title>
        <Emojis>
          Passionate Coder{' '}
          <span role="img" alt="guy on computer emoji">
            👨‍💻
          </span>
        </Emojis>
        <Emojis>
          Outdoor Enthusianst{' '}
          <span role="img" alt="rock climber emoji">
            🧗‍♂️
          </span>
        </Emojis>
        <Emojis>
          Taco connoisseur{' '}
          <span role="img" alt="taco emoji">
            🌮
          </span>
        </Emojis>
        <Pink
          activeClass="active"
          to="techstack"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Para> See what I can do for YOU!</Para>
        </Pink>
      </Container>
    )
  }
}

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(#1e28bc, #1019a3);
`

const Title = styled('h1')`
  font-size: 50px;
  text-align: center;
  margin-top: 10vh;
  color: #fff;
`

const Emojis = styled('p')`
  font-size: 30px;
  color: #fff;
`

const Para = styled('p')`
  color: #fff;
`
