import React from 'react'
import { Routes, Route } from "react-router-dom"
import Menu from '../Pages/Menu'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Deal from '../Pages/Deal'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/menu' element={<Menu/>} ></Route>
        <Route path='/deals' element={<Deal/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
    </Routes>
  )
}

export default AllRoutes