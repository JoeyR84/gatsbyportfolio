import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Services extends Component {
  render() {
    return (
      <Container>
        <Title>I will make you...</Title>
        <Service>a business website. 💸</Service>
        <Service>an eCommerce website. 🛒</Service>
        <Service>cross-platform mobile apps. 📱</Service>
      </Container>
    )
  }
}

const Container = styled('div')`
  height: 100vh;
  background-image: linear-gradient(#a571ce, #8f4cc4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Title = styled('h1')`
  text-align: center;
`
const Service = styled('h1')`
  display: flex;
  @media (max-width: 450px) {
    font-size: 26px;
  }
`
