import React, { Component } from 'react'
import styled from 'react-emotion'
import * as Scroll from 'react-scroll'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'

export default class Nav extends Component {
  render() {
    return (
      <List>
        <Item onClick={this.props.onAboutClick}>About</Item>
        <Item onClick={this.props.onClick}>Services</Item>
        <Item onClick={this.props.onClick}>Contact</Item>
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
