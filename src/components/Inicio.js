import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="hero">
      <h1>Momentos que saben a café</h1>
      <Link to="/tienda" className="btn">
        Comprar
      </Link>
    </div>
  );
}

export default Inicio;
