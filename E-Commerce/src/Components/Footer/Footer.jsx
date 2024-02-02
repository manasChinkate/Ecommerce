import React from 'react'
import './Footer.css'
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {

  const back=()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

  }
  return (
    <>
   
    <div className='backtotop' onClick={back}>Back To Top</div>
      <div className='fotmain'>
        <div className='l1'>
          <h2>Get to Know Us</h2>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
         
        </div>
        <div className='l2'>
          <h2>Connect With Us</h2>
          <p>Gmail</p>
          <p>Instagram</p>
          <p>Github</p>
        </div>
        <div className='l3'>
          <h2>Make Money With Us</h2>
          <p>Advertise Your product</p>
          <p>Sell on ShopCity</p>
          
        </div>
        
      </div>
    <div style={{backgroundColor:"#1a1a1a",height:"60px", textAlign:"center"}}>
      <Link  style={{ listStyle: "none", textDecorationLine: "none" }} to={'/'}>
      <h1 style={{color:"white"}}>Shop<span>City</span> </h1>
      </Link>

    </div>
    
      <div style={{textAlign:"center",backgroundColor:"#1a1a1a",color:"#fcdede",paddingBottom:"20px"}}><h1 style={{fontSize:"15px"}}>© 2023 All Rights Reserved Manas Chinkate.</h1></div>
      
    </>

  )
}

export default Footer