import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Nav from './Nav'

const Header = ({ siteTitle }) => (
  <Container>
    <Logo />
    <Title>Joey Ricketts</Title>
    <Nav />
  </Container>
)

export default Header

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`
const Title = styled('h1')`
  margin-left: 3%;
`

const Logo = styled('div')`
  display: flex;
  background-color: #000;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-left: 2%;
`
