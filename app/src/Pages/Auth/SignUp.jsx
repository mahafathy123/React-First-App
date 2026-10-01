import React from 'react'
import './Auth.css'
import Header from '../../Components/AuthComponents/Header'
import SignUpForm from '../../Components/AuthComponents/SignUpForm'
import Container from '../../Components/Container'
export default function SignUp() {
  return (
    <Container className='Auth'>
      <Header name={'Register'}/>
      <SignUpForm/>
    </Container>
  )
}
