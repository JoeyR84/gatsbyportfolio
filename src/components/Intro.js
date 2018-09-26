import React, { Component } from 'react'
import styled from 'react-emotion'

import Header from './header'

export default class Intro extends Component {
  render() {
    return (
      <Container>
        <LeftContainer>
          <Title>Hi, I'm Joey. I'm a frontend JavaScript Developer.</Title>
          <CoverPhoto />
        </LeftContainer>
        <RightContainer>
          <Photo />
          <Bio>
            Hi im joey and I do lots of stuff. i have a dog and some other stuff
            too. I dont feel like writing about myself right now. Hi im joey and
            I do lots of stuff. i have a dog and some other stuff too. I dont
            feel like writing about myself right now.
          </Bio>
        </RightContainer>
      </Container>
    )
  }
}

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const LeftContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 70vw;
  height: 100%;
  padding-right: 30px;
  padding-left: 30px;
`

const RightContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30vw;
  border: 1px solid #000;
  align-items: center;
  justify-content: flex-start;
  padding-left: 12px;
  padding-right: 12px;
`

const Bio = styled('p')`
  color: #fff;
  margin-top: 30px;
`

const Photo = styled('div')`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: #000;
  margin-top: 30px;
`

const CoverPhoto = styled('div')`
  display: flex;
  height: 250px;
  width: 250px;
  border-radius: 120px;
  background-color: #000;
`

const Title = styled('p')`
  font-size: 40px;
  max-width: 600px;
  color: #fff;
  width: 60%;
`
