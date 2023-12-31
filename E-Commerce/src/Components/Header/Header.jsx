import './Header.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

import { useAuth0 } from "@auth0/auth0-react";


const Header = (props) => {
    const { loginWithRedirect, logout,isAuthenticated } = useAuth0();
    return (
        <>
            <div className='main'>

                <div className="top">
                    <div className='menuu'>
                        <AiOutlineMenu style={{ color: "white", fontSize: "30px", }} /></div>

                    <Link to={'/'} style={{ listStyle: "none", textDecorationLine: "none" }}>
                        <div className="logo" onClick={() => props.setshowCart(false)} >
                            <h1>Shop<span>City</span> </h1>
                        </div>
                    </Link>

                    {isAuthenticated ? <button className='lobtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                    </button> : <button className='lobtn' onClick={() => loginWithRedirect()}>Log In</button>
                     }
                    

                    <div className="cart" onClick={() => props.setshowCart(true)}>
                        <Link   >
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