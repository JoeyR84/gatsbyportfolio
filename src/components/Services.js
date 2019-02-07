import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link as Pink, animateScroll as scroll } from 'react-scroll'

export default class Services extends Component {
  render() {
    return (
      <Container>
        <Header>Services</Header>
        <ProjectsContainer>
          <ServiceContainer>
            <Title>Business Sites</Title>
            <Project />
          </ServiceContainer>
          <ServiceContainer>
            <Title>Restaurants/Trucks</Title>
            <Project />
          </ServiceContainer>
          <ServiceContainer>
            <Title>Portfolios/Galleries</Title>
            <Project />
          </ServiceContainer>
        </ProjectsContainer>
        <Pink
          activeClass="active"
          to="techstack"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Para>
            Check out the stack!
            <span role="img" alt="emojis of computer taco and rock climber">
              👇
            </span>
          </Para>
        </Pink>
      </Container>
    )
  }
}

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background-color: #587cb0;
  width: 100%;
  @media (max-width: 700px) {
    padding-top: 50px;
  }
`

const Header = styled('h1')`
  display: flex;
  text-align: center;
  color: #fff;
`

const Title = styled('h3')`
  color: #fff;
  @media (max-width: 475px) {
    max-width: 150px;
    font-size: 18px;
  }
`

const ProjectsContainer = styled('div')`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    padding: 30px;
    justify-content: center;
    align-items: center;
  }
`

const Project = styled('div')`
  display: flex;
  background-color: #fff;
  width: 150px;
  height: 150px;
  margin: 20px;
  @media (max-width: 420px) {
    width: 100px;
    height: 100px;
  }
`

const ServiceContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  @media (max-width: 475px) {
    width: 35vw;
    margin: 5px;
  }
`

const Para = styled('p')`
  color: #fff;
  font-size: 22px;
`
