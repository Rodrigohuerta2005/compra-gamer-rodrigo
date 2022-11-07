import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import ProductoInfo from '../components/ProductoInfo'
import Carrito from '../pages/Carrito'
import Header from '../pages/Header'
const AppRoute = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/productos/:id' element={<ProductoInfo />} />
      </Routes>
    </Router>
  )
}

export default AppRoute