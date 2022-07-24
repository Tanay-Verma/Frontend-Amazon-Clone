import React from 'react'
import '../styles/Signup.css'

export default function Signup({setEmail, setPassword, setCnfPassword, password, cnfPassword, handleSignUpClick}) {
  return (
    <div className='signup'>
        <h2 className='signup--head'>New User Sign Up</h2>
        <p className='signup--username box--lable'>Username</p>
        <input className='signup--user--inp box--input' type='email' onChange={(e)=>setEmail(e.target.value)}/>
        <p className='signup--pass box--lable'>Password</p>
        <input className='signup--pass--inp box--input' type='password' onChange={(e)=>setPassword(e.target.value)}/>
        <p className='signup--confirm--pass box--lable'>Confirm Password</p>
        <input className='signup--confirm--pass--inp box--input' type='password' onChange={(e)=>setCnfPassword(e.target.value)}/>
        <button className='signup--btn' disabled={password===cnfPassword?false:true} onClick={handleSignUpClick}>Create Account</button>
    </div>
  )
}
