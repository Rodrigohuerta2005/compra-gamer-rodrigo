import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addCart, getProductById } from '../features/productosSlice'
import './ProductoInfo.css'

const ProductoInfo = ({ data }) => {
  const { id } = useParams()
  const productDetail = useSelector((state) => state.productos.productDetail)
  // console.log(productDetail);
  const dispatch = useDispatch()
  useEffect(() => {
    const getProduct = () => {
      dispatch(getProductById(id))
    }
    getProduct()
  }, [dispatch, id])
  return (
    <div className='product-detail-view'>
      {productDetail &&
        <div className='product-detail-body' key={productDetail.id}>
          <div className="bg-image">
            <img className='product-detail-image' src={productDetail.image} alt={productDetail.nombre} />
          </div>
          <div className='product-detail-info'>
            <h1>{productDetail.nombre}</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>{productDetail.descripcion}</p>
              <p style={{ fontWeight: 'bold' }}>${productDetail.precio}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                className="btn-add-cart"
                onClick={() => {
                  dispatch(addCart(productDetail))
                }}>
                Añadir a Carrito
              </button>
              <button
                className="btn-comprar">
                Comprar
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ProductoInfo