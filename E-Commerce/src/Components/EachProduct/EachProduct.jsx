import React, { useState, useEffect, useContext } from 'react'

import { Link, useParams } from 'react-router-dom'
import './EachProduct.css'
import ReactStars from "react-rating-stars-component";
import Header from '../Header/Header.jsx';
import CartList from '../CartList/CartList.jsx';
import Display from '../Display/Display.jsx';
import CartContext from '../../Context/CartContext.jsx';



const eachProduct = () => {
  const { id } = useParams();
  const [eachProduct, seteachProduct] = useState('')
  const [count, setcount] = useState(0)

  // const [showCart, setshowCart] = useState(false)

  const {setmainCart, mainCart,setshowCart,showCart} = useContext(CartContext)


  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await response.json()
      // console.log(data)
      seteachProduct(data)
    }

    fetchProduct()
  }, [])
  
  const handleClick =()=>{
    setmainCart([...mainCart, {...eachProduct,quantity:1  } ])
    console.log(mainCart)
    // console.log(eachProduct)
  }

  const add = () => {
    setcount(count + 1)
  }
  const minus = () => {
    setcount(count - 1)
    count ? count < 0 : setcount(0)
  }



  // console.log(eachProduct.title)
 
  return (

    <>
     {showCart ?<CartList cart={mainCart} /> :<div className="Eachmain">
        <div className="left">
          <img className='image' src={eachProduct?.image} alt='' srcset="" />
          <h1 className='h'>{eachProduct?.title}</h1>
        </div>
        <div className="right">
          <div className="h1">
            <h2 >{eachProduct?.title}</h2>
          </div>
          <div className="ratings">
            <ReactStars

              count={5}
              // onChange={ratingChanged}
              size={34}
              activeColor="#ffd700"

            />
          </div>
          <div className="pricing">
            {eachProduct?.price} $
          </div>

          <div className="desc">
            {eachProduct?.description}
          </div>
          <div className="btns">
            <button onClick={add} >+</button>
            <input type="text" value={count} />
            <button onClick={minus} >-</button>
          </div>
          <div className="btn2">
          
            <button>Buy Now</button>
            <button onClick={()=>{handleClick()}} >Add to Cart</button>
          </div>

        </div>
      </div> }
       

     
    </>
   
  )
}

export default eachProduct