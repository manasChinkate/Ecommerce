import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
    const[mainCart, setmainCart] = useState("")
    const [showCart, setshowCart] = useState(false)

    return (
        <CartContext.Provider value={{mainCart,setmainCart,showCart,setshowCart}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider