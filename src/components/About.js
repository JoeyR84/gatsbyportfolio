import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Title>Frontend JavaScript Developer</Title>
        <Emojis>Passionate Coder 👨‍💻 </Emojis>
        <Emojis>Outdoor Enthusianst 🧗‍♂️</Emojis>
        <Emojis>Taco conosuer 🌮 </Emojis>
        <Link>Read Full Bio</Link>
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
  background-image: linear-gradient(#c292e8, #a571ce);
`

const Title = styled('h1')`
  font-size: 50px;
  text-align: center;
  margin-top: 10vh;
`

const Emojis = styled('p')`
  font-size: 30px;
`

const Para = styled('p')``
