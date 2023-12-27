import React from "react";
import Slider from "react-slick";
import Title from "../Title/Title";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "../../App/App.css";

const Comodities = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="comodidades">
      <Title title="Comodidades" />
      <div className="comodidades-container">
        <div className="comodidades-list">
          {/* <h2>Lista de Comodidades</h2> */}
          <ul>
            <h4> - Deck con parrilla compartida </h4>
            <h4> - Pileta</h4>
            <h4> - Espacio compartido con sillas y mesas</h4>
            <h4> Te invitamos a ver nuestra galeria y obtener mas información dando click en "Ver Más"</h4>
            {/* Agrega más elementos según sea necesario */}
          </ul>
        </div>
        <div className="comodidades-slider">
          {/* <h2></h2> */}
          <Slider {...sliderSettings}>
            <div>
              <img src="https://www.shutterstock.com/image-photo/group-friends-having-party-outdoors-260nw-2234937131.jpg" />
            </div>
            {/* <div>
              <img src="https://www.puntal.com.ar/css-custom/270/lazy.svg" />
            </div> */}
            {/* Agrega más imágenes según sea necesario */}
          </Slider>
        </div>
      </div>
      <div className="btn-primary">
      <Link to="/comodities">Ver más</Link>
      </div>
    </section>
  );
};

export default Comodities;
