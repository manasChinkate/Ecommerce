import React, { useContext } from 'react'
import './Display.css'
import getProducts  from '../backend.js'

import { useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { useState } from 'react'
import { Link } from 'react-router-dom';
import CartList from '../CartList/CartList.jsx';




import CartContext from '../../Context/CartContext.jsx';
import Login from '../Practice/Login.jsx';




const Display = () => {
  const [product, setProduct] = useState([])
  const [eproduct, seteProduct] = useState([])
  const [cart, setCart] = useState([])//Main cart


  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('');
  const [filterList, setFilterList] = useState([]);
  // const [showCart, setshowCart] = useState(false)

  const { setmainCart,mainCart,showCart } = useContext(CartContext)

  const handleList = (event) => {
    setRegion(event.target.value);
    console.log(region)
  }

useEffect(()=>{
  getProducts().then(result=>{
    const products = result
    setProduct(products.data)
    setFilterList(product)
    console.log(product)
  })
},[])





  const addtoCart = (a) => {
    // console.log(a)
    setCart([...cart, { ...a, quantity: 1 }])
    setmainCart(cart)
    
  }

  useEffect(() => {
    if (region === '') {
      setFilterList(product)
    }
    else {
      let updatedproduct = product;
      // console.log(updatedproduct.title)

      if (region.length) {
        updatedproduct = updatedproduct.filter(productName => {
          // console.log(productName.category)
          if (productName?.category === region)
            return true;
          return false;
        });
      }
      setFilterList(updatedproduct);
      console.log(filterList)

    }
  }, [region, product])


  return (
    <>
      {/* <Header count={cart.length} setshowCart={setshowCart} /> */}
    

      <div className="bottom" >
        <div className='btndiv' value={region}
          onClick={handleList}
          style={{height:"80px"}}
        >

          <button value={""} >All</button>
          <button value={"men's clothing"} >Mens Clothing</button>
          <button value={"jewelery"} >Jwellery</button>
          <button value={"electronics"} >Electronics</button>
          <button value={"women's clothing"} >Women's Clothing</button>

        </div>
        
      </div>
      


      {


        showCart ? <CartList cart={mainCart} /> :
          <>


            <div><Login/></div>
            <div className='popular' ><h1>MOST POPULAR PRODUCTS</h1></div>
            <div className="searchbar">
              <input type="search" placeholder='Search item' onChange={(e) => setSearch(e.target.value)} />
              <button>Search</button>
            </div>

            <div className='dv' >
              <>

                {filterList.filter((data) => {
                  if (data === '') {
                    return data
                  } else if (data.title.toLowerCase().includes(search.toLowerCase())) {
                    return data
                  }
                })

                  .map((data => {
                    return (
                      <Link style={{ textDecoration: "none", color: "black" }} to={`/Products/${data?.id}`}>
                        <div className='product-1'>
                          <img className='imgg' style={{

                          }} src={data?.image} alt="" />
                          <span style={{
                            color: "grey",
                            fontSize: "12px",
                            textTransform: "uppercase"
                          }}>{data?.category}</span>
                          <p>Name : {data?.title}</p>
                          <p className='price'>${data.price} </p>
                          <p>Rating : {data.rating?.rate} <FaStar /></p>
                          <Link ><button onClick={() => addtoCart(data)} className='btn3' type="button">Add to Cart</button></Link>
                        </div>

                      </Link>



                    )
                  }))
                }

              </>
            </div>
          

       
            
            </>
            

      }



    </>

  )
}

export default Display