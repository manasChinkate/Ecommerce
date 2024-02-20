import React, { useContext, useState } from 'react'

import './Checkout.css'
import CartContext from '../../Context/CartContext'
import { useEffect } from 'react'

import { CountryCodes } from '../backend'
import { useNavigate } from 'react-router-dom';








const Checkout = () => {
    // const [checkoutCart, setcheckoutCart] = useState({})
    const [codes, setCodes] = useState([])
    const [formSubmitted, setFormSubmitted] = useState(false);


    const { mainCart, setmainCart, setdetails, details } = useContext(CartContext)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        
        countrycode: '',
        contact: '',
       
        address: '',
        pincode: ''
    });

    // console.log(mainCart);

    useEffect(() => {
        CountryCodes()
        setCodes(CountryCodes)

    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setdetails(formData)
    };

    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if all fields are filled
        if (Object.values(formData).every(value => value !== '')) {
            setFormSubmitted(true); // Set form submission flag to true
        } else {
            alert('Please fill all the fields before submitting.');
        }

        console.log("data : ", [formData]);
        
        setFormData({
            name: '',
            email: '',
            contact: '',
            address: '',
            pincode: ''
        })



        console.log("details: ", details)



    };
let navigate = useNavigate();

    if (formSubmitted) {
        
         navigate('/success'); 
      }

    

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
                                        <div className="cartTitle"  >{item.title}   </div>
                                        <div className='wrapp'>
                                        
                                            <div className="Cartp">Rs.{item.price}
                                                
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
                                        <p style={{ width: "250px", fontSize: "15px" }}>{data.title} </p>:
                                        <p>{Math.floor(data.price)} Rs</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                </div>
                <p style={{ marginTop: "25px", marginBottom: "10px", fontSize: "20px" }}>Total : { 
                 Math.floor
                   (mainCart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0))

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
               
                <div className="form">


                    <h2 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Enter your Details</h2>
                    <form onSubmit={handleSubmit}>
                        <input name="name"
                            value={formData.name}
                            onChange={handleChange} type="text" placeholder='Enter your Name'
                            required />

                        <div style={{ display: "flex", gap: "33px" }}>
                            

                            <input type="tel"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange} placeholder='Enter your Number ' required /></div>


                        <input type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} placeholder='Enter your Email' required />

                        <input type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange} placeholder='Address' required />

                        <input type="tel"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange} placeholder='Pincode' required />

                        <button className='btnss' type="submit" >Place Order </button>

                    </form>
                </div>

            </div>
        </div>


    )
}

export default Checkout