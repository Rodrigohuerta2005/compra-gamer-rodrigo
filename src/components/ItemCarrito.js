import React from 'react'
import './ItemCarrito.css'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removedToCart } from '../features/productosSlice'

const ItemCarrito = ({ producto }) => {
  const dispatch = useDispatch()
  return (
    <div className='item-carrito'>
      <img src={producto.image} alt={producto.nombre} />
      <div>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
      </div>
      <div onClick={() => dispatch(removedToCart(producto))} style={{ height: '20px', minWidth: '30px' }}>
        <FaRegTrashAlt fontSize={20} />
      </div>
    </div>
  )
}

export default ItemCarrito