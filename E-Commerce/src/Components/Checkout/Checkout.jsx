import React, { useContext, useState } from 'react'
import CartList from '../CartList/CartList'
import './Checkout.css'
import CartContext from '../../Context/CartContext'
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { CountryCodes } from '../backend'
import { PiShoppingCartFill } from "react-icons/pi";





const Checkout = () => {
    // const [checkoutCart, setcheckoutCart] = useState({})
    const [codes, setCodes] = useState([])
    const { mainCart, setmainCart } = useContext(CartContext)

    console.log(mainCart);

    useEffect(() => {
        CountryCodes()
        setCodes(CountryCodes)
    })

    return (


        <div className='checkmain'>
           
            <div className="checkright">
                {/* <h1 style={{marginLeft:"50px",marginBottom:"20px"}} className='headerr' >Cart Items</h1> */}
                {mainCart.length ? <div className='caratItem'>
                    <>
                        {mainCart.map((item => {
                            return (
                                <>
                                    <div className="Iatem" key="">

                                        <div className="Carimg"><img src={item.image} width={80} height={90} alt="" /></div>
                                        <div className="cartTitle"  >{item.title} </div>
                                        <div className='wrap'>
                                            <div className="btns">
                                            </div>
                                            <div className="Cartp">Rs.{item.price}
                                                {/* {Math.floor(data.price * data.quantity)} */}
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )

                        }))}

                    </>
                </div> : <><div className='imggg'> <img src="https://gibbonnutrition.com/img/empty-cart-yellow.png" alt="" /></div></>}


            </div>
            <div className='checklast'>
                <h1 style={{ marginTop: "5px" }} className='headerr' >Order Summary</h1>
                <div className='bk'>

                    <div style={{ height: "200px", marginBottom: "40px" }}>
                        {mainCart.map((data) => {
                            return (
                                <>
                                    <div className='r' style={{ display: "flex", gap: "30px" }} >
                                        <p style={{ width: "250px", fontSize:"15px" }}>{data.title} </p>:
                                        <p>{Math.floor(data.price)} Rs</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                </div>
                <p style={{marginTop:"25px",marginBottom:"10px", fontSize:"20px"}}>Total : {
                    Math.floor(mainCart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0))
                   
                }  Rs </p>
                <div className="acc">
                    <div className='a'>
                        <img style={{ marginTop: "10px" }} src="https://cdn-icons-png.flaticon.com/128/5351/5351625.png" alt="" height={50} />
                        <p>
                            7 Days Replacement
                        </p>
                    </div>
                    <div className='a'>
                        <img style={{ marginTop: "10px" }} src="https://img.icons8.com/?size=48&id=Xwi6ZxfUTUTZ&format=png" height={50} alt="" />
                        <p>
                            Free Shipping
                        </p>
                    </div>
                    <div className='a'>
                        <img style={{ marginTop: "10px" }} src="https://cdn-icons-png.flaticon.com/128/9413/9413653.png" height={50} alt="" />
                        <p>
                            1 Year Warranty
                        </p>
                    </div>
                    <div className='a'>
                        <img style={{ marginTop: "10px" }} src="https://cdn-icons-png.flaticon.com/128/5163/5163783.png" height={50} alt="" /> <p>
                            Pay On Delivery
                        </p>
                    </div>
                </div>
            </div>
            <div className="checkleft">
                {/* <h1 style={{marginBottom:"30px"}} className='headerr' >Customer Details</h1> */}
                <div className="form">
                    <h2 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Enter your Details</h2>
                    <input type="text" placeholder='Enter your Name' />

                    <div style={{ display: "flex", gap: "33px" }}>
                        {/* <input style={{width:"30px"}} type='number' /><option  ></option> */}

                        <div><Form.Select



                            style={{
                                backgroundColor: 'white',

                                height: "44px",
                                color: 'black',
                                width: "65px",
                                borderRadius: '7px',
                                marginTop: "10px",
                                marginLeft: "20px",
                                border: "1px solid"

                            }}
                        >

                            <option > </option>
                            {codes.map((data => {
                                return (
                                    <option value={"Africa"} >{data.dial_code} {data.name}</option>
                                )
                            }))}



                        </Form.Select></div>

                        <input style={{ width: "272px", marginLeft: "-20px" }} type="number" placeholder='Enter your Number' /></div>
                    <input type="email" placeholder='Enter your Email' />
                    <input type="text" placeholder='Address' />
                    <input type="number" placeholder='Pincode' />

                    

                </div>
                <button className='btnss' type='submit'>Place Order </button>
            </div>
        </div>


    )
}

export default Checkout