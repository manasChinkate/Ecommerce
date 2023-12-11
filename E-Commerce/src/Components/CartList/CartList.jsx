import React, { useEffect } from 'react'
import './CartList.css'
import { useState } from 'react'
const CartList = ({ cart }) => {
    const [count, setcount] = useState(0)
    const [Caart, setCaart] = useState([])

    useEffect(() => {
        setCaart(cart)
    }, [cart])


   
    
    

    const add = () => {
        setcount(count + 1)
    }
    const minus = () => {
        setcount(count - 1)
        count ? count < 0 : setcount(0)
    }
    return (
        <>
            <div className='cartMain'>
                {Caart.map((data, itemIndex) => {
                    return (
                        <div className='cartItem'>
                            <div className="Item">
                                <div className="Carimg"><img src={data.image} width={80} height={90} alt="" /></div>
                                <div className="cartTitle" >{data.title}  </div>
                                <div className="btns">
                                    <button 
                                    onClick={()=>{
                                        const _cart = cart.map((item, index)=>{
                                            return itemIndex === index ? {...item, quantity : item.quantity + 1} :item
                                        })
                                        setCaart(_cart)
                                        
                                    }} >
                                        
                                        +</button>
                                    <input type="text" value={data.quantity} />
                                    <button onClick={minus} >-</button>
                                </div>
                                <div className="Cart">Rs. {data.price * data.quantity}</div>

                            </div>
                        </div>
                    )
                })}

                {
                    cart.map(item => item.price*item.quantity).reduce((total, value) => total + value, 0)
                }
            </div>
        </>
    )
}

export default CartList