import React, { Component } from "react";

// imports react-icons
import { FaSwimmingPool, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App/App.css"; // Asegúrate de importar tu archivo CSS

const FeaturedRooms = () => {
  // Configuración del carrusel (puedes ajustar según tus necesidades)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
  };

  return (
    
    <div className="comodidades-container">
      
      <div className="comodidades-list">
      <Title title="Departamentos" />
        <h2></h2>
        <ul>
          <li>Piscina</li>
          <li>Gimnasio</li>
          <li>Restaurante</li>
          <li>Wi-Fi gratuito</li>
          {/* Agrega más elementos según sea necesario */}
        </ul>
      </div>
      <div className="comodidades-slider">
        <h2></h2>
        <Slider {...sliderSettings}>
          <div>
            <img src="url_de_la_imagen_1" alt="Imagen 1" />
          </div>
          <div>
            <img src="url_de_la_imagen_2" alt="Imagen 2" />
          </div>
          {/* Agrega más imágenes según sea necesario */}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedRooms;

