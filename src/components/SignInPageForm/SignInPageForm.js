import React from 'react'
import "./SignInPageForm.css"

function SignInPageForm() {
  return (
    <div className='signinpageform_container'>
        <div className='signinpageform_form'>
            <p className='signinpageform_form_title'>Sign In</p>
            <input placeholder='Email Address' />
            <input placeholder='Password' />
            <button>Sign In</button>
            <button>Login as Guest User</button>
            <p className='signinpageform_form_signup_text'>New to MovieApp? <span>Sign Up Now.</span></p>
        </div>
    </div>
  )
}

export default SignInPageForm