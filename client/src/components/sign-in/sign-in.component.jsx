import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions'

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

  const { email, password } = userCredentials;
  const handleSubmit = async e => {
    e.preventDefault()

    emailSignInStart(email, password)
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have and account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name='email' type='email' label='Email' value={email} handleChange={handleChange} />
        <FormInput name='password' type='password' label='Password' value={password} handleChange={handleChange} />
        <ButtonsBarContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign in with Google </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)