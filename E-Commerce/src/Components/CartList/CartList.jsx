import React, { useEffect } from 'react'
import './CartList.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'




const CartList = ({ cart }) => {

    const [Caart, setCaart] = useState([])

    useEffect(() => {
        setCaart(cart)
        console.log(Caart)
    }, [cart])

   
    
    return (

        
        <>
            <div className='cartMain'>
                
                
                {
                    Caart?.length == 0 ?<><div className='imggg'> <img src="https://gibbonnutrition.com/img/empty-cart-yellow.png" alt="" /></div> </> : <>{Caart?.map((data, itemIndex) => {
                        return (
                            <div className='cartItem'>
                                <div className="Item">
                                    
                                    <div className="Carimg"><img src={data.image} width={80} height={90} alt="" /></div>
                                    <div className="cartTitle" >{data.title}  </div>
                                    <div className='wrap'>
                                        <div className="btns">
                                            <button
                                                onClick={() => {
                                                    const _Cart = Caart.map((item, index) => {
                                                        return itemIndex === index ? { ...item, quantity: item.quantity + 1  } : item
    
                                                    })
                                                    setCaart(_Cart)
                                                }} >
    
                                                +</button>
                                            <input type="text" value={data.quantity} />
                                            <button onClick={() => {
                                                const _Cart = Caart.map((item, index) => {
                                                    return itemIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
    
                                                })
                                                setCaart(_Cart)
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

                    Caart.map (item =>  item.price * item.quantity).reduce((total, value) => total + value , 0 )
                }</div>
                <div className="buy">
                    <Link to={'/Checkout'}><button>Buy Now</button></Link>
                </div>

            </div>
        </>
    )
}

export default CartList