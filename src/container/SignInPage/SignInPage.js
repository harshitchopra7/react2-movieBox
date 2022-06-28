import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SignInPageForm from '../../components/SignInPageForm/SignInPageForm'

function SignInPage() {
  return (
    <div>
        <Navbar showSignInButton={false} />
        <SignInPageForm />
    </div>
  )
}

export default SignInPage