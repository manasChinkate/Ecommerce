import React from 'react'
import CartList from '../CartList/CartList'
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='checkmain'>
            <div className="checkleft">
                <div className="form">
                    <h2>Proceeding</h2>
                    <input type="text" placeholder='Enter your Name' />
                    <input type="text" placeholder='Enter your Number' />
                    <input type="email" placeholder='Enter your Email' />
                    <input type="text" placeholder='Address' />

                </div>

            </div>
            <div className="checkright">

                <div className='caratItem'>
                    <div className="Iatem">

                        <div className="Carimg"><img src="" width={80} height={90} alt="" /></div>
                        <div className="cartTitle" > Title </div>
                        <div className='wrap'>
                            <div className="btns">
                               
                                
                               
                            </div>
                            <div className="Cart">Rs.
                                {/* {Math.floor(data.price * data.quantity)} */}
                            </div>




                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout