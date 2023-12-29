import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { useEffect } from 'react'

const Profile = () => {
    const {mainCart} = useContext(CartContext)
    
  return (
    <div>
        <h1>Hello{mainCart.Username}</h1>
    </div>
  )
}

export default Profile