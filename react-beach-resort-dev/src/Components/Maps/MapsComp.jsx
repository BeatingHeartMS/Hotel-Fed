import React from "react";

// imports components
import Title from "../Title/Title";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import Slider from "react-slick";
import Mapa from "../../assets/img/svg/MapaUbi.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App/App.css"; // Asegúrate de importar tu archivo CSS

const MapsComps = () => {
  // Configuración del carrusel (puedes ajustar según tus necesidades)
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 19,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    
    <section className="comodidades">
      <Title title="Ubicación" />
      <div className="comodidades-container">
        <div className="comodidades-list">

          <ul>
              <h4> Nos encontramos en Misiones 312</h4>   
              <h4> Federación, Entre Ríos</h4>        

          </ul>
        </div>
        <div className="comodidades-slider">
          {/* <h2></h2> */}

            <a href="https://maps.app.goo.gl/K8nKjtYdjR9EM5fq5">
            <img src={Mapa} alt="Maps" />
          </a>
            {/* <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pileta_1.jpg" />
            </div> */}
            {/* Agrega más imágenes según sea necesario */}

        </div>
      </div>
    </section>
    
  );
};

export default MapsComps;

