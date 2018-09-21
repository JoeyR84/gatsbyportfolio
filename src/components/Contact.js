import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Title>Like what you see? Give me a shout!</Title>
      </Container>
    )
  }
}

const Container = styled('div')`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(#8f4cc4, #992def);
`
const Title = styled('h1')``
