import React from 'react'
import './Productos.css'
import TarjetaProducto from '../components/TarjetaProducto'
import { useSelector } from 'react-redux'
import { selectProductos } from '../features/productosSlice'

const Productos = () => {
  const productosStore = useSelector(selectProductos)
  console.log(productosStore);
  return (
    <div style={{ margin: '40px' }}>
      <h1 className='titulo'>Productos</h1>
      <div className='container-productos'>
        {productosStore?.map((data) => (
          <TarjetaProducto key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Productos