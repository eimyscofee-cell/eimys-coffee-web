import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Aprende from "./components/Aprende";
import Tienda from "./components/Tienda";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/eimys-coffee-web">
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/aprende" element={<Aprende />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/" element={<Inicio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
