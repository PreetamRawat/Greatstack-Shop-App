import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sugn Up</h1>
        <div className='logonsignup-fields'>
          <input type='text' placeholder='Your name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing i agree to the terms od use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup