import React from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import "../../App/App.css";

const FederacionComp = () => {
  return (
    <section className="comodidades">
      <h4>   Queremos dejar a las imagenes hablar por si solas para convencerte del atractivo de este hermoso lugar.</h4>

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

export default FederacionComp;
