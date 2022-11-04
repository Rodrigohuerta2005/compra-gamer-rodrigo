import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import ProductoInfo from '../components/ProductoInfo'
import Carrito from '../pages/Carrito'
const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/productos/:id' element={<ProductoInfo />} />
      </Routes>
    </Router>
  )
}

export default AppRoute