import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SignInPageForm from '../../components/SignInPageForm/SignInPageForm'

function SignInPage({ setUser }) {
  return (
    <div>
        <Navbar showSignInButton={false} />
        <SignInPageForm setUser={setUser} />
    </div>
  )
}

export default SignInPage