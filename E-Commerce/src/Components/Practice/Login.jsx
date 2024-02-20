import React from 'react'
import './Login.css'



const Login = () => {
  return (
    <div className='login-main'>
      <div className='wrap'>
        
        <form style={{display:"flex",flexDirection:"column",padding:"15px",paddingTop:"60px",gap:"20px"}} action="submit">
          <label htmlFor="">Email</label>
          <input style={{width:"370px"}} type="text" />
          <label htmlFor="">Password</label>
          <input style={{width:"370px"}} type="text" />

        </form>
      </div>
      
    </div>
  )
}

export default Login