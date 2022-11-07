import React, { useState } from 'react'
import './Productos.css'
import TarjetaProducto from '../components/TarjetaProducto'
import { useSelector } from 'react-redux'
import { selectProductos } from '../features/productosSlice'
import { FaSearch } from 'react-icons/fa'
import debounce from 'lodash.debounce'

const Productos = () => {
  const productosStore = useSelector(selectProductos)
  const [searchInput, setSearchInput] = useState('')
  const updateSearch = (e) => setSearchInput(e?.target?.value);
  const debouncedSearch = debounce(updateSearch, 1000);

  return (
    <div style={{ margin: '40px' }}>
      <h1 className='titulo'>Productos</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
      }} class="form">
        <button>
          <FaSearch className="buscador-icono" fontSize={18} color={'#000'} />
        </button>
        <input onChange={debouncedSearch} class="input" placeholder="Busca tu producto" required="" type="text"></input>
      </form>
      <div className='container-productos'>
        {productosStore.filter((val) => {
          if (searchInput === '') {
            return val
          } else if (
            val.nombre.toLowerCase().includes(searchInput.toString().toLowerCase())
          ) {
            return val
          }
          return false
        })?.map((data) => (
          <TarjetaProducto key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Productos