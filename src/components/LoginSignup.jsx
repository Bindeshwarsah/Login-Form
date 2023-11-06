import React, { useState } from 'react'
import person_icon from "../components/Assets/person.png"
import password_icon from "../components/Assets/password.png"
import email_icon from "../components/Assets/email.png"
import './LoginSignup.css'

const LoginSignup = () => {
  const [action, setAction]=useState("Sign Up");
  return (
    <>
    <div className='container'>
      <div className='main-div'>
          <div className='heading'>{action}</div>
          <div className='underline'></div>
          <div className='inputs'>
            {action=="Login"?<div></div>: <div className='input'>
              <img src={person_icon} alt="email" />
              <input type="text" className='texteArea' placeholder='Name'/>
            </div>}
            <div className='input'>
              <img src={email_icon} alt="email" />
              <input type="email" className='texteArea' placeholder='Email-id' />
            </div>
            <div className='input'>
              <img src={password_icon} alt="email" />
              <input type="password" className='texteArea' placeholder='Password'/>
            </div>
            {action=="Sign Up"?<div></div>:<div className='forgotPassword'>Lost Password?<span className='click'>Click Here!</span></div>}
            
          </div>
          <div className='btn'>
            <button className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
            <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</button>

          </div>

        </div>
    </div>
    </>
  )
}

export default LoginSignup;