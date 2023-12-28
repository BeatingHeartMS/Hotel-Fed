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
        
  
          <div className="comodidades-grid">
            {/* Utiliza un diseño de cuadrícula para las características */}
            <div className="comodidad-item">
              <h5> Dpto. de 50mts cuadrados con capacidad para 4/5 personas</h5>      
              </div>    
              <div className="comodidad-item">
              <h5> Sala de estar</h5>
              </div>
              <div className="comodidad-item">
              <h5> Tv smart en ambas habitaciones</h5>
              </div>
              <div className="comodidad-item">
              <h5> Wifi</h5>
              </div>
              <div className="comodidad-item">
              <h5> Ropa de cama</h5>
              </div>
              <div className="comodidad-item">
              <h5> Toallas</h5>
              </div>
              <div className="comodidad-item">
              <h5> Cocina</h5>
              </div>
              <div className="comodidad-item">
              <h5> Heladera con frezeer</h5>
              </div>      
              <div className="comodidad-item">
              <h5> Microondas</h5>
              </div>
              <div className="comodidad-item">
              <h5> Vajilla completa</h5>
              </div>
            <div className="comodidad-item">
            <h5> A.A Frio/Calor</h5>
            </div>

            {/* Agrega más elementos de características según sea necesario */}
          </div>

        <div className="comodidades-gallery">
        <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723467/Departamentos/w0wmr8jpxmpgvxxgsmkk.jpg"/>
              </div>
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723500/Departamentos/mdpkuaaymmgnblgffwrq.jpg"/>
              </div>
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723447/Departamentos/lcjyljzprdwyq1cdvygu.jpg"/>
              </div>
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723415/Departamentos/smwsdccg56owexh6ifgd.jpg"/>
              </div>
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723375/Departamentos/tvs7ojdx5mucfpiipglb.jpg"/>
              </div>
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723388/Departamentos/mq8qpftk0xqlieufu2go.jpg"/>
              </div>
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723274/Departamentos/uotsly8dogczx1sm7zut.jpg"/>
              </div>
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723227/Departamentos/zlsseyufcy0kej6tfgwu.jpg"/>
              </div>
          </div>
          <div className="btn-primary">
          <Link to="/Contacto">Contactanos!</Link>
        </div>
      </section>
  );
};
    
export default DepartamentosComp;