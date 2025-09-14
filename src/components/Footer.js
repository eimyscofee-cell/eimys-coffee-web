import React from "react";
import cafeBg from "../cafe.jpg"; // Importamos la imagen desde la carpeta 'src'

function Footer() {
  // Reemplaza '#' con las URLs reales de tus redes sociales
  const socialLinks = {
    instagram: "https://www.instagram.com/eimyscoffee/",
  };

  return (
    <footer
      className="main-footer"
      style={{ backgroundImage: `url(${cafeBg})` }}
    >
      <div className="footer-item">
        <span>Contacto: </span>
        <a href="mailto:eimyscofee@gmail.com">eimyscofee@gmail.com</a>
      </div>
      <div className="footer-item footer-copyright">
        &copy; {new Date().getFullYear()} Eimy's Coffee | Todos los derechos
        reservados
      </div>
      <div className="footer-item">
        <span>Síguenos: </span>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            className="instagram-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
