import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Title>Contact</Title>
        <Desc>
          I am currently taking on new clients. Contact me to hire me, with any
          questions, or just to say hello! I look forward to hearing from you :
          ){' '}
        </Desc>
        <FormContainer>
          <Form name="contact" method="POST" netlify>
            <p>
              <Label>
                <Input type="text" name="name" placeholder="Joe Doe" />
              </Label>
            </p>
            <p>
              <Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                />
              </Label>
            </p>
            <p>
              <Label>
                <Textarea
                  name="message"
                  placeholder="Enter your message or basic project details here and I will get back to you shortly"
                />
              </Label>
            </p>
            <p>
              <Button type="submit">Send</Button>
            </p>
          </Form>
        </FormContainer>
      </Container>
    )
  }
}

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-color: #587cb0;
`
const Title = styled('h1')`
  color: #fff;
  text-align: center;
  width: 560px;
  padding-top: 50px;
  @media (max-width: 400px) {
    width: 90vw;
  }
`

const FormContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = styled('label')`
  font-size: 30px;
  @media (max-width: 400px) {
    width: 90vw;
  }
`

const Input = styled('input')`
  width: 320px;
  height: 32px;
  padding: 15px;
  font-size: 28px;
  border-radius: 5px;
  padding-left: 5px;
  @media (max-width: 400px) {
    width: 90vw;
    font-size: 22px;
  }
`

const Button = styled('button')`
  height: 38px;
  width: 130px;
  border-radius: 5px;
  border: 1.5px solid #5bf770;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  padding: 0px;
`

const Form = styled('form')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Textarea = styled('textarea')`
  width: 560px;
  height: 200px;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px;
  @media (max-width: 400px) {
    width: 90vw;
    font-size: 16px;
  }
`

const Desc = styled('p')`
  color: #fff;
`
