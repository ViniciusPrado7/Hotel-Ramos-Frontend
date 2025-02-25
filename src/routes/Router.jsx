import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Explore from '../pages/Explore'
import Quarto from '../pages/Quarto'
import Amenidades from '../pages/Amenidades'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/quartos' element={<Quarto/>} />
        <Route path='/amenidades' element={<Amenidades/>} />
    </Routes>
  )
}

export default Router