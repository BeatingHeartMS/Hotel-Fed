import React from "react";

// imports components
import Title from "../Title/Title";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App/App.css"; // Asegúrate de importar tu archivo CSS

const DepartamentosComp = () => {
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
        <h3>Contaras con bla bla</h3>
  
          <div className="comodidades-grid">
            {/* Utiliza un diseño de cuadrícula para las características */}
            <div className="comodidad-item">
              <h5> - Dpto. de 50mts cuadrados con capacidad para 4/5 personas</h5>      
              </div>    
              <div className="comodidad-item">
              <h5> - Sala de estar</h5>
              </div>
              <div className="comodidad-item">
              <h5> - Tv smart en ambas habitaciones</h5>
              </div>
              <div className="comodidad-item">
              <h5> - Wifi</h5>
              </div>
              <div className="comodidad-item">
              <h5> - Ropa de cama</h5>
              </div>
              <div className="comodidad-item">
              <h5> - Toallas</h5>
              </div>
              <div className="comodidad-item">
              <h5> - Cocina</h5>
              </div>
              <div className="comodidad-item">
              <h5> - Heladera</h5>
              </div>      
              <div className="comodidad-item">
              <h5> - Microondas</h5>
              </div>
              <div className="comodidad-item">
              <h5> - Vajilla completa</h5>
              </div>
            <div className="comodidad-item">
            <h5> - A.A Frio/Calor</h5>
            </div>

            {/* Agrega más elementos de características según sea necesario */}
          </div>

        <div className="comodidades-gallery">
            {/* Utiliza un diseño de cuadrícula para la galería */}
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703592429/room-12_tsafom.jpg"/>
            </div>
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703592429/details-2_brc3az.jpg" />
            </div>
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703592429/details-3_flcrv8.jpg"/>
            </div>
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703592430/details-4_zr54tg.jpg"/>
            </div>  
          </div>
          <div className="btn-primary">
          <Link to="/Contacto">Contactanos!</Link>
        </div>
      </section>
  );
};
    
export default DepartamentosComp;