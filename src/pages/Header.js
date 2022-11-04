import React from "react";
import './Header.css'
import logo from '../images/amd2.png'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
      <div className="header-content">
        <img className="logo" src={logo} alt="Logo" />
        <div className="buscador">
          <input placeholder="Buscar" type="text" />
          <FaSearch className="buscador-icono" fontSize={18} color={'#fff'} />
        </div>
        <ul className="container-registro">
          <li className="iniciar-sesion">
            <a href="*">Iniciar Sesion</a>
          </li>
          <li className="registrarse">
            <a href="*">Registrarse</a>
          </li>
          <Link to='/carrito'>
            <FaShoppingCart fontSize={30} />
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
