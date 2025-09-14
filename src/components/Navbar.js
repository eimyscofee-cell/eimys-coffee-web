import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpeg";
import "../App.css";
import cafeBg from "../cafe.jpg"; // Importamos la imagen de fondo

function Navbar() {
  return (
    <nav className="main-nav" style={{ backgroundImage: `url(${cafeBg})` }}>
      <img
        src={logo}
        className="App-logo"
        alt="Logo de Eimy's Coffee"
        width="120"
        height="120"
      />
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/aprende">Aprende</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/tienda">Tienda</Link>
        </li>
        <li>
          <Link to="/carrito">🛒</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
