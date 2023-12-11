import './Header.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import { IoCartSharp } from "react-icons/io5";


const Header = (props) => {
    return (
        <>
            <div className='main'>
                <div className="top">
                    <div className="logo" onClick={()=>props.setshowCart(false)}>
                        <h1>Shop<span>City</span> </h1>
                    </div>

                    <div className="cart" onClick={()=>props.setshowCart(true)}>
                    <Link >
                        <div><IoCartSharp style={{ fontSize: "40px" }} />
                        <sup>{props.count}</sup>
                        </div>
                    
                    </Link>
                        
                        
                    </div>
                </div>
                <div className="bottom">
                    <ul>
                        <li>Categories</li>
                        <li>Men's Clothing</li>
                        <li>Jwellery</li>
                        <li>Electronics</li>
                        <li>Women's Clothing </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header