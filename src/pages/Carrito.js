import React from 'react'
import { useSelector } from 'react-redux'
import ItemCarrito from '../components/ItemCarrito'
import { selectCarrito } from '../features/productosSlice'
import './Carrito.css'

const Carrito = () => {
  const carritoItems = useSelector(selectCarrito)
  const preciosArray = []
  carritoItems.map(({ precio }) => preciosArray.push(precio))
  const total = preciosArray.reduce((a, b) => a + b, 0)

  return (
    <div className='container-carrito'>
      <h1 className='titulo-carrito'>Mi Carrito {`(${carritoItems.length}) items`}</h1>
      <h2>Total: {total}</h2>
      <div className="container-productos-carrito">
        {carritoItems.length > 0 ? carritoItems.map(producto => (
          <ItemCarrito producto={producto} />
        )) : <h1 style={{ textAlign: 'center', margin: '160px 0px' }}>Carrito está vacio</h1>
        }
      </div>
    </div>
  )
}

export default Carrito