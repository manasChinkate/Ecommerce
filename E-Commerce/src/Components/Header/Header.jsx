import './Header.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from '../Menu/Menu';


const Header = (props) => {

    return (
        <>
            <div className='main'>

                <div className="top">
                    <div className='menuu'>
                    <AiOutlineMenu  style={{ color: "white", fontSize: "30px",  }} /></div>

                    <Link to={'/'} style={{ listStyle: "none", textDecorationLine: "none" }}>
                        <div className="logo" onClick={() => props.setShowCart(false)} >
                            <h1>Shop<span>City</span> </h1>
                        </div>
                    </Link>

                    <div className="cart" onClick={() => props.setShowCart(true)}>
                        <Link  >
                            <div><IoCartSharp style={{ color: "white", fontSize: "40px" }} />
                                <sup style={{ color: "white" }}>{props.count}</sup>
                            </div>

                        </Link>


                    </div>
                </div>

            </div>
           
        </>
    )
}

export default Header