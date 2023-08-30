import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductPage from '../Pages/ProductPage'

const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<ProductPage/>}></Route>
    </Routes> 

    </>
  )
}

export default Allroutes
