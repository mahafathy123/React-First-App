import React from 'react'
import './Auth.css'
import Header from '../../Components/AuthComponents/Header'
import SignInForm from '../../Components/AuthComponents/SignInForm'
import Container from '../../Components/Container'
export default function SignIn() {
  return (
   <Container className='Auth'>
         <Header name={'Login'}/>
         <SignInForm/>
         </Container>
  )
}