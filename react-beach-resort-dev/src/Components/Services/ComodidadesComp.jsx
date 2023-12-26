import React from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import "../../App/App.css";

const ComodidadesComp = () => {
  return (
    <section className="comodidades">
      <h3>Contaras con bla bla</h3>

        <div className="comodidades-grid">
          {/* Utiliza un diseño de cuadrícula para las características */}
          <div className="comodidad-item">
            <h5>Deck con parrilla compartida</h5>
          </div>
          <div className="comodidad-item">
            <h5>Pileta</h5>
          </div>
          <div className="comodidad-item">
            <h5>Espacio compartido con sillas y mesas</h5>
          </div>
          <div className="comodidad-item">
            <h5>Espacio compartido con sillas y mesas</h5>
          </div>
          <div className="comodidad-item">
            <h5>Espacio compartido con sillas y mesas</h5>
          </div>
          <div className="comodidad-item">
            <h5>Espacio compartido con sillas y mesas</h5>
          </div>
          <div className="comodidad-item">
            <h5>Espacio compartido con sillas y mesas</h5>
          </div>
          {/* Agrega más elementos de características según sea necesario */}
        </div>



      <div className="comodidades-gallery">
          {/* Utiliza un diseño de cuadrícula para la galería */}
          <div className="gallery-item">
            <img src="https://www.shutterstock.com/image-photo/group-friends-having-party-outdoors-260nw-2234937131.jpg" alt="Galería 1" />
          </div>
          <div className="gallery-item">
            <img src="https://www.shutterstock.com/image-photo/group-friends-having-party-outdoors-260nw-2234937131.jpg" alt="Galería 1" />
          </div>
          <div className="gallery-item">
            <img src="https://www.shutterstock.com/image-photo/group-friends-having-party-outdoors-260nw-2234937131.jpg" alt="Galería 1" />
          </div>
          <div className="gallery-item">
            <img src="https://www.shutterstock.com/image-photo/group-friends-having-party-outdoors-260nw-2234937131.jpg" alt="Galería 1" />
          </div>
          {/* Agrega más elementos de la galería según sea necesario */}
        </div>
        <div className="btn-primary">
        <Link to="/Contacto">Contactanos!</Link>
      </div>
    </section>
  );
};

export default ComodidadesComp;
