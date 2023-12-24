import React from "react";
import Slider from "react-slick";
import { FaSwimmingPool, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
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
            <li>
              ASD
              Piscina
              Bar
              ASDXC
            </li>
            <li>
              Pileta
            </li>
            {/* Agrega más elementos según sea necesario */}
          </ul>
        </div>
        <div className="comodidades-slider">
          {/* <h2></h2> */}
          <Slider {...sliderSettings}>
            <div>
              <img src="" alt="Imagen 1" />
            </div>
            <div>
              <img src="url_de_la_imagen_2" alt="Imagen 2" />
            </div>
            {/* Agrega más imágenes según sea necesario */}
          </Slider>
        </div>
      </div>
      <div className="redirect-button">
      <Link to="/comodities">Ver más</Link>
      </div>
    </section>
  );
};

export default Comodities;
