import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch(error) {
            console.log(error)
        }

    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render(){
        return(
            <SignInContainer>
                <SignInTitle>I already have and account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' value={this.state.email} handleChange={this.handleChange}  />
                    <FormInput name='password' type='password' label='password' value={this.state.password} handleChange={this.handleChange}  />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;