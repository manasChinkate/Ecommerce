import './App.css'
import Header from './Components/Header/Header';
import Display from './Components/Display/Display.jsx';
import React from 'react'
import{Routes,Route} from 'react-router-dom'
import EachProduct from './Components/EachProduct/EachProduct.jsx';
import CartList from './Components/CartList/CartList.jsx';




const App = () => {
  
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/Products/:id' element={<><EachProduct /> </>}  />
        
      </Routes>
      
      
    </>
  )
}

export default App
