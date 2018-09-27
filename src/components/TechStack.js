import React from 'react'
import styled from 'react-emotion'
import { Link, animateScroll as scroll } from 'react-scroll'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import apolloImg from '../images/logo-apollo.svg'

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
        graphqlImage: imageSharp(
          original: { src: { regex: "/graphql-logo/" } }
        ) {
          sizes(maxWidth: 300) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Title>I create awesome stuff with...</Title>
        <Service>React + React Native</Service>
        <Image sizes={data.reactImage.sizes} alt="react logo" />
        <Service>GraphQL + Apollo</Service>
        <Image sizes={data.graphqlImage.sizes} alt="graphql logo" />
        <Pimage src={apolloImg} alt="apollo logo" />
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
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
  height: 100vh;
  background-color: #587cb0;
  display: flex;
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

const Pimage = styled('img')`
  max-width: 300px;
`
