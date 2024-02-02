import './App.css'
import Header from './Components/Header/Header';
import Display from './Components/Display/Display.jsx';
import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import EachProduct from './Components/EachProduct/EachProduct.jsx';
import Checkout from './Components/Checkout/Checkout.jsx';

import Profile from './Components/Practice/Profile.jsx';
import { useEffect } from 'react';
import CartContext from './Context/CartContext.jsx';
import Footer from './Components/Footer/Footer.jsx';



const App = () => {

  const { setmainCart,setshowCart,showCart } = useContext(CartContext)
  const{mainCart} = useContext(CartContext)

  return (
    <>
      <Header count={mainCart.length} setshowCart={setshowCart} />
        <Routes>
          <Route path='/' element={<Display />} />
          <Route path='/Products/:id' element={<><EachProduct /> </>} />
          <Route path='/Checkout' element={<Checkout />} />
        </Routes>

      <Footer />
        
   
    </>
  )
}

export default App
