import React, { Component } from 'react'
import styled from 'react-emotion'
import { Link as Pink, animateScroll as scroll } from 'react-scroll'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Title>Current Projects (coming soon!)</Title>
        <ProjectsContainer>
          <Project />
          <Project />
        </ProjectsContainer>
        <Pink
          activeClass="active"
          to="techstack"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Para>Check out the stack!</Para>
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
`

const Title = styled('h1')`
  display: flex;
  text-align: center;
  margin-top: 10vh;
  color: #fff;
`

const ProjectsContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  @media (max-width: 420px);
`

const Project = styled('div')`
  display: flex;
  background-color: #fff;
  width: 250px;
  height: 250px;
  margin: 20px;
  @media (max-width: 420px) {
    width: 150px;
    height: 150px;
  }
`

const Para = styled('p')`
  color: #fff;
`
