import React from 'react'
import './CSS/LoginSinup.css'
const LoginSinup = () => {
  return (
    <div className='login'>
      <div className="login-up-contenen">
        <h1>Sign Up</h1>
        <div className="login-up-filds">
          <input type="text" placeholder='Your Name' />
          <input type='email'  placeholder='Email Address'/>
          <input type='password'  placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='logins-text'>Already have an account? <span>Login here</span></p>
        <div className="login-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSinup
