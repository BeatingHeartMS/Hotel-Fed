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

          <ul>
              <h4> - Dpto. de 50mts cuadrados con capacidad para 4/5 personas</h4>          
              <h4> - Equipados con todo, para que te sientas como en tu casa</h4>
              <h4> Te invitamos al detalle de las mismas dando click "Ver Mas"</h4>

          </ul>
        </div>
        <div className="comodidades-slider">
          {/* <h2></h2> */}
          <Slider {...sliderSettings}>
            <div>
              <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723204/Comodidades/bynedjv0wyggk9odhsoa.jpg" />
            </div>
            {/* <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pileta_1.jpg" />
            </div> */}
            {/* Agrega más imágenes según sea necesario */}
          </Slider>
        </div>
      </div>
      <div className="btn-primary">
      <Link to="/Departamentos">Ver más</Link>
      </div>
    </section>
    
  );
};

export default FeaturedRooms;

