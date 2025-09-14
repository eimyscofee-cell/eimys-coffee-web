import React from "react";

function Tienda() {
  // Datos de ejemplo para los productos
  const products = [
    { id: 1, name: "Café de Origen: La Mesa de los Santos", price: "35.000" },
    { id: 2, name: "Café de Origen: Piedecuesta", price: "32.000" },
    { id: 3, name: "Café de Origen: Oiba", price: "30.000" },
  ];

  return (
    <div className="page-container">
      <h2>Nuestra Selección de Cafés</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* Idealmente, aquí tendrías una imagen del producto */}
            {/* <img src={product.imageUrl} alt={product.name} /> */}
            <h3>{product.name}</h3>
            <p>${product.price} COP</p>
            <button className="btn">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tienda;
