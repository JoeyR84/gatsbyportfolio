import React, { Component } from 'react'
import styled from 'react-emotion'

import Header from './header'

export default class Intro extends Component {
  render() {
    return (
      <Container>
        <Quote>I HELP BUSINESSES SUCCEED WITH AWESOME WEBSITES</Quote>
        <CoverPhoto />
      </Container>
    )
  }
}

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

const CoverPhoto = styled('div')`
  display: flex;
  height: 250px;
  width: 250px;
  border-radius: 30px;
  background-color: #000;
`

const Quote = styled('p')`
  display: flex;
  font-size: 5vh;
  text-align: center;
  max-width: 600px;
  margin-top: 10vh;
`
