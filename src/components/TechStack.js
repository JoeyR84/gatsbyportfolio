import React from 'react'
import styled from 'react-emotion'
import { Link, animateScroll as scroll } from 'react-scroll'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const TechStack = () => (
  <StaticQuery
    query={graphql`
      query poopQuery {
        site {
          siteMetadata {
            title
          }
        }
        reactImage: imageSharp(original: { src: { regex: "/react-logo/" } }) {
          sizes(maxWidth: 300) {
            ...GatsbyImageSharpSizes
          }
        }
        gatsbyImage: imageSharp(original: { src: { regex: "/gatsby-icon/" } }) {
          sizes(maxWidth: 300) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Title>I create awesome stuff with...</Title>
        <StackContainer>
          <TechContainer>
            <Service>React + React Native</Service>
            <Desc>
              React is a modern JavaScript library developed by facebook
            </Desc>
            <Image sizes={data.reactImage.sizes} alt="react logo" />
          </TechContainer>
          <TechContainer>
            <Service>Gatsby</Service>
            <Desc>
              Gatsby is a blazing fast static site generate built on React.js
              and GraphQL
            </Desc>
            <Image sizes={data.gatsbyImage.sizes} alt="graphql logo" />
          </TechContainer>
        </StackContainer>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          style={{ color: '#fff' }}
        >
          {' '}
          Contact me!
        </Link>
      </Container>
    )}
  />
)

export default TechStack

const Container = styled('div')`
  background-color: #587cb0;
  display: flex;
  height: 100vh;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Title = styled('h1')`
  text-align: center;
  font-size: 50px;
  color: #fff;
`
const Service = styled('p')`
  display: flex;
  font-size: 30px;
  color: #fff;
  @media (max-width: 450px) {
    font-size: 26px;
  }
`

const Image = styled(Img)`
  width: 80px;
  height: 80px;
`

const TechContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`

const StackContainer = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  justify-content: space-around;
`

const Desc = styled('p')`
  color: #fff;
`

const Pimage = styled('img')`
  max-width: 300px;
`
