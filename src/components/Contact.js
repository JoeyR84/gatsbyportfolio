import React, { Component } from 'react'
import styled from 'react-emotion'

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Title>
          Have a project in mind or just want to say hello? Give me a shout!
        </Title>
        <FormContainer>
          <form name="contact" method="POST" netlify>
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
          </form>
        </FormContainer>
      </Container>
    )
  }
}

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(#060fa0, #000784);
`
const Title = styled('h1')`
  color: #fff;
  margin-bottom: 5vh;
  margin-top: 10vh;
  text-align: center;
  width: 560px;
  @media (max-width: 400px) {
    width: 90vw;
  }
`

const FormContainer = styled('div')`
  display: flex;
`

const Label = styled('label')`
  font-size: 30px;
  @media (max-width: 400px) {
    width: 90vw;
  }
`

const Input = styled('input')`
  width: 280px;
  height: 32px;
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
  width: 100px;
  border-radius: 5px;
  font-size: 28px;
`

const Textarea = styled('textarea')`
  width: 560px;
  height: 200px;
  font-size: 18px;
  border-radius: 5px;
  @media (max-width: 400px) {
    width: 90vw;
    font-size: 16px;
  }
`
