import React, { Component } from 'react'
import styled from 'react-emotion'
import Img from 'gatsby-image'

export default class Intro extends Component {
  render() {
    return (
      <Container>
        <LeftContainer>
          <TitleContainer>
            <Title>Hi, I'm Joey.</Title>
            <Desc>I build awesome stuff with JavaScript</Desc>
          </TitleContainer>
        </LeftContainer>
        <RightContainer>
          <Image sizes={this.props.photo.sizes} />
          <Emojis>
            <span role="img" alt="emojis of computer taco and rock climber">
              👨‍💻 🌮 🧗‍♂️
            </span>
          </Emojis>
          <Bio>
            Hi I'm joey and I'm a freelance frontend dev. I help businesses
            succeed with custom websites. I also enjoy rock climbing, tacos, and
            my dogs.
          </Bio>
        </RightContainer>
      </Container>
    )
  }
}

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const LeftContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 100%;
  padding-left: 10vw;
  padding-top: 10vh;
  @media (max-width: 420px) {
    width: 100vw;
    height: 40%;
    padding-top: 10px;
    justify-content: center;
    padding-right: 20px;
  }
`

const RightContainer = styled('div')`
  display: flex;
  flex-direction: column;
  flex-shrink: inherit;
  height: 100%;
  width: 400px;
  background-color: #0e425a;
  align-items: center;
  justify-content: space-around;
  padding-left: 12px;
  padding-right: 12px;
  @media (max-width: 420px) {
    width: 100vw;
    height: 60%;
    justify-content: flex-start;
  }
`

const Bio = styled('p')`
  display: flex;
  color: #fff;
  @media (max-width: 420px) {
    margin-top: 10px;
  }
`
const Emojis = styled('p')`
  display: flex;
  font-size: 40px;
  height: 30px;
  @media (max-width: 420px) {
    margin-top: 40px;
  }
`

const Image = styled(Img)`
  display: flex;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  margin-top: 10px;
  @media (max-width: 420px) {
    margin-top: 30px;
  }
`

const TitleContainer = styled('div')`
  display: flex;
  flex-direction: column;
`

const Title = styled('h1')`
  color: #fff;
`

const Desc = styled('p')`
  color: #fff;
  font-size: 22px;
`
