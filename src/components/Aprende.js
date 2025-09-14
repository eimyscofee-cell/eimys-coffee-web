import React from "react";
import { Link } from "react-router-dom";

function Aprende() {
  // Datos de ejemplo para los artículos
  const articles = [
    {
      id: 1,
      title: "Guía para principiantes: Métodos de extracción",
      slug: "guia-principiantes-metodos",
    },
    {
      id: 2,
      title: "El café de Piedecuesta, Colombia",
      slug: "cafe-de-piedecuesta-colombia",
    },
    {
      id: 3,
      title: "Cómo catar café como un profesional",
      slug: "catar-cafe-profesional",
    },
  ];

  return (
    <div className="page-container">
      <h2>Aprende con Nosotros</h2>
      <div className="article-list">
        {articles.map((article) => (
          <div key={article.id} className="article-preview">
            <h3>{article.title}</h3>
            <Link to={`/aprende/${article.slug}`} className="btn">
              Leer más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aprende;
