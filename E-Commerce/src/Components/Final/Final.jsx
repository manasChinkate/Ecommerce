import React, { useContext, useState } from 'react'
import "./Final.css"
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'



const Final = () => {
  const { details, mainCart } = useContext(CartContext)

  var today = new Date();

  var dd = today.getDate();

  var mm = today.getMonth() + 1;

  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  today = dd + '/' + mm + '/' + yyyy;

  function generateOrderID(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
    }
    return result;
  }

  // Example: Generate a random order ID with a length of 8 digits
  const randomOrderID = generateOrderID(8);



  console.log("mainCart : ", mainCart)
  console.log("details : ", details)



  return (
    <div className="order-success-container">
      <h2 className="title">Order Successful!</h2>
      <p className='final-h2'>Thank you for your order. Your order details are as follows:</p>

      <ul className="order-details-list">
        <li><strong>Order ID : </strong>{randomOrderID}</li>

        <li><strong>Order Date : </strong> {today}</li>

        <li><strong>Items : {mainCart.length}</strong></li>
        <ul className="items-list">
          <>
            {
              mainCart.map((item => {
                return (
                  <p className='one'>{item.title}</p>
                )
              }))
            }
          </>
        </ul>
        <li><strong>Total Amount : </strong>{Math.floor
          (mainCart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0))}.Rs</li>
        
        <li><strong>Shipping Address : </strong> {details.address} </li>
      </ul>
      <p className='last-p'>We will send you a confirmation email shortly.</p>
      <Link to='/' className='linked'><button  className='btnss'  >Order More </button></Link>
    </div>
  )
}

export default Final