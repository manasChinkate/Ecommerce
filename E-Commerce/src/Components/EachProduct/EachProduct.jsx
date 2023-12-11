import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import './EachProduct.css'
import ReactStars from "react-rating-stars-component";


const eachProduct = () => {
  const { id } = useParams();
  const [eachProduct, seteachProduct] = useState([])
  const [count, setcount] = useState(0)
  



  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await response.json()
      console.log(data)
      seteachProduct(data)
    }
    fetchProduct()
  }, [])

  const add = () => {
    setcount(count + 1)
  }
  const minus = () => {
    setcount(count - 1)
    count ? count < 0 : setcount(0)
  }

  console.log(eachProduct.title)

  return (
    <>
      <div className="Eachmain">
        <div className="left">
          <img className='image' src={eachProduct?.image} alt='' srcset="" />
          <h1>{eachProduct?.title}</h1>
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
            <button>Add to Cart</button>
            <button>Buy Now</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default eachProduct