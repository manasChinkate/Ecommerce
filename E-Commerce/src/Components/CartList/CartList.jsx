import React, { useContext, useEffect } from 'react'
import './CartList.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import CartContext from '../../Context/CartContext'




const CartList = () => {

    // const [Caart, setCaart] = useState([])
    const{setmainCart,mainCart} = useContext(CartContext)


  

   
    console.log(mainCart);
    return (

        
        <>
            <div className='cartMain'>
                
                
                {
                    mainCart?.length == 0 ?<><div className='imggg'> <img src="https://gibbonnutrition.com/img/empty-cart-yellow.png" alt="" /></div> </> : <>{mainCart?.map((data, itemIndex) => {
                        return (
                            <div className='cartItem'>
                                <div className="Item">
                                    
                                    <div className="Carimg"><img src={data.image} width={80} height={90} alt="" /></div>
                                    <div className="cartTitle" >{data.title}  </div>
                                    <div className='wrap'>
                                        <div className="btns">
                                            <button
                                                onClick={() => {
                                                    const _Cart = mainCart.map((item, index) => {
                                                        return itemIndex === index ? { ...item, quantity: item.quantity + 1  } : item
    
                                                    })
                                                    setmainCart(_Cart)
                                                }} >
    
                                                +</button>
                                            <input type="text" value={data.quantity} />
                                            <button onClick={() => {
                                                const _Cart = mainCart.map((item, index) => {
                                                    return itemIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
    
                                                })
                                                setmainCart(_Cart)
                                            }} >-</button>
                                        </div>
                                        <div className="Cart">Rs. {Math.floor(data.price * data.quantity)} </div>

                                        
                                    
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })}</>
                }
                
                
                <div className='total'> Total Price : Rs. {

                    mainCart.map (item =>  item.price * item.quantity).reduce((total, value) => total + value , 0 )
                }</div>
                <div className="buy">
                    <Link to={'/Checkout'}><button>Buy Now</button></Link>
                </div>

            </div>
        </>
    )
}

export default CartList