import {Routes,Route} from 'react-router'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import {Orders} from './pages/Orders'

import './App.css'


function App() {
  const [cart,setCart] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/api/cart-items')
    .then((response)=>{
      setCart(response.data)
    })
  },[])

  

  return (
    <>
    <Routes>
      <Route index element={<HomePage cart={cart}/>}></Route>
      <Route path="checkout" element={<CheckoutPage cart={cart}/>}></Route>
      <Route path="orders" element ={<Orders/>}></Route>
    </Routes>
      
      
    </>
  )
}

export default App
