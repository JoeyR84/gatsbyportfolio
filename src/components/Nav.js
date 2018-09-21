import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Nav extends Component {
  render() {
    return (
      <List>
        <Item>About</Item>
        <Item>Services</Item>
        <Item>Contact</Item>
      </List>
    )
  }
}

const List = styled('div')`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Item = styled('div')`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
`
