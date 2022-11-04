import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removedToCart } from "../features/productosSlice";
import "./TarjetaProducto.css";

const TarjetaProducto = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <div className="container-tarjeta">
      <img src={data.image} alt={data.nombre} />
      <div className="contenido-tarjeta">
        <h1>{data.nombre}</h1>
        <p>{data.descripcion}</p>
        <p >Precio: <strong>${data.precio}</strong></p>
        <button
          className="boton-añadir-carrito"
          onClick={() => {
            dispatch(addCart(data))
          }}>
          Añadir a Carrito
        </button>
      </div>
    </div>
  );
};

export default TarjetaProducto;
