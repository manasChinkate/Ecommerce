import React, { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext'

const login = () => {
    const[Username,setUsername] = useState('')
    const[Userpassword,setUserpassword] = useState('')

    const{setmainCart}=useContext(CartContext)

    const handleclick=(e)=>{
        e.preventDefault()
        setmainCart({Username,Userpassword})
    }

   
  return (
    <div style={{height:"40vh", display:"flex", flexDirection:" column", gap:"20px"}}>
        <input onChange={(e)=>{setUsername(e.target.value)}} type="text "  placeholder='username' />
        <input onChange={(e)=>{setUserpassword(e.targe.value)}} type="password "  placeholder='Password' />
        <button onClick={handleclick} type='submit'> Submit</button>
    </div>
  )
}

export default login