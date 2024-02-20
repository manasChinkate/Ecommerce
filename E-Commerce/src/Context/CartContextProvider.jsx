import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
    const[mainCart, setmainCart] = useState("")
    const [showCart, setshowCart] = useState(false)
    const [details,setdetails]= useState("")

    return (
        <CartContext.Provider value={{mainCart,setmainCart,showCart,setshowCart,details,setdetails}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider