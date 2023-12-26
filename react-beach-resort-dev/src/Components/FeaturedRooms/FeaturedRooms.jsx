import React from "react";

// imports components
import Title from "../Title/Title";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App/App.css"; // Asegúrate de importar tu archivo CSS

const FeaturedRooms = () => {
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
      <Title title="Departamentos" />
      <div className="comodidades-container">
        <div className="comodidades-list">
          {/* <h2>Lista de Comodidades</h2> */}
          <ul>
              <h5> - Dpto. de 50mts cuadrados con capacidad para 4/5 personas</h5>          
              <h5> - A.A Frio/Calor</h5>
              <h5> - Sala de estar</h5>
              <h5> - Tv smart en ambas habitaciones</h5>
              <h5> - Wifi</h5>
              <h5> - Ropa de cama</h5>
              <h5> - Toallas</h5>
              <h5> - Cocina</h5>
              <h5> - Heladera</h5>
              <h5> - Microondas</h5>
              <h5> - Vajilla completa</h5>
            {/* Agrega más elementos según sea necesario */}
          </ul>
        </div>
        <div className="comodidades-slider">
          {/* <h2></h2> */}
          <Slider {...sliderSettings}>
            <div>
              <img src="https://st5.depositphotos.com/10806848/64646/i/1600/depositphotos_646463892-stock-photo-modern-style-white-living-room.jpg" />
            </div>
            {/* <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pileta_1.jpg" />
            </div> */}
            {/* Agrega más imágenes según sea necesario */}
          </Slider>
        </div>
      </div>
      <div className="btn-primary">
      <Link to="/rooms/Departamento">Ver más</Link>
      </div>
    </section>
    
  );
};

export default FeaturedRooms;

