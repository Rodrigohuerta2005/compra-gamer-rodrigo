import React from "react";
import { Link } from "react-router-dom";

import "./TarjetaProducto.css";

const TarjetaProducto = ({ data }) => {
  return (
    <Link style={{ color: 'currentcolor' }} to={`/productos/${data.id}`}>
      <div className="card">
        <img src={data.image} alt={data.nombre} className="card-image" />
        <div className="card-body">
          <h2 className="card-title">{data.nombre}</h2>
          <p className="card-description">{data.descripcion}</p>
          <p className="card-price">Precio: $<strong>{data.precio}</strong></p>
        </div>
      </div>
    </Link>
  );
};

export default TarjetaProducto;
