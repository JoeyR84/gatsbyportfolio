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
            Hi I'm joey and I'm a frontend dev. Solving new problems with
            cutting edge technologies really gets me excited. I'm forever a
            student, willing and eager to soak up knowledge. I also enjoy rock
            climbing, tacos, and my dogs.
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
`

const RightContainer = styled('div')`
  display: flex;
  flex-direction: column;
  flex-shrink: inherit;
  height: 100%;
  width: 300px;
  background-color: #0e425a;
  align-items: center;
  justify-content: space-around;
  padding-left: 12px;
  padding-right: 12px;
`

const Bio = styled('p')`
  display: flex;
  color: #fff;
`
const Emojis = styled('p')`
  display: flex;
  font-size: 40px;
  height: 30px;
`

const Image = styled(Img)`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 10px;
`

// const CoverPhoto = styled('div')`
//   display: flex;
//   height: 250px;
//   width: 250px;
//   border-radius: 120px;
//   background-color: #000;
// `

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
