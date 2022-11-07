import React from 'react'
import { useSelector } from 'react-redux'
import ItemCarrito from '../components/ItemCarrito'
import { selectCarrito } from '../features/productosSlice'
import './Carrito.css'

const Carrito = () => {
  const carrito = useSelector(selectCarrito)
  const preciosArray = []
  carrito.map(({ precio }) => preciosArray.push(precio))
  const total = preciosArray.reduce((a, b) => a + b, 0)

  return (
    <div className='container-carrito'>
      <h1 className='titulo-carrito'>Mi Carrito {`(${carrito.length}) items`}</h1>
      <h2>Total: ${total}</h2>
      <div className="container-productos-carrito">
        {carrito.length > 0 ? carrito.map(producto => (
          <ItemCarrito key={producto.id} producto={producto} />
          // console.log(producto)
        )) : <h1 style={{ textAlign: 'center', margin: '160px 0px' }}>Carrito está vacio</h1>
        }
      </div>
    </div>
  )
}

export default Carrito