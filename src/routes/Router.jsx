import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Explore from '../pages/Explore'
import Quartos from '../pages/Quartos'
import Amenidades from '../pages/Amenidades'
import MinhaConta from '../pages/MinhaConta'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} /> {/* Exportando a rota da HomePage */}
        <Route path='/explore' element={<Explore />} /> {/* Exportando a rota da ExplorePage */}
        <Route path='/quartos' element={<Quartos />} /> {/* Exportando a rota da QuartosPage */}
        <Route path='/amenidades' element={<Amenidades />} /> {/* Exportando a rota da AmenidadessPage */}
        <Route path='/login' element={<MinhaConta />} /> 
    </Routes>
  )
}

export default Router