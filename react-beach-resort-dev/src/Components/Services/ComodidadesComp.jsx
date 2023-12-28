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
            <h5>Playa a unas cuadras</h5>
          </div>

        </div>



      <div className="comodidades-gallery">
      <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723308/Comodidades/jns75kdija7vk8kjuwga.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723357/Comodidades/ng6pym0uizq7btdsnxhk.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723253/Comodidades/ghhlqfnuhansrjlnvs2h.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723340/Comodidades/ihlnkaqxywajxfkky8tr.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723204/Comodidades/bynedjv0wyggk9odhsoa.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723202/Comodidades/t55agtrrtqzkw6j6zvhd.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723145/Comodidades/ejvxzzypnmy3jzsbghso.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723176/Comodidades/ilyg1vryqflvk3zecrni.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723135/Comodidades/hrop3ki2e3zij0z1syni.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703724575/Comodidades/rswxlyogcfnay5lykul9.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723067/Comodidades/kubc9exgapczkng6lzzv.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703723044/Comodidades/vvsaubk3eonetmjjxar8.jpg"/>
            </div>
          </div>
        <div className="btn-primary">
        <Link to="/Contacto">Contactanos!</Link>
      </div>
    </section>
  );
};

export default ComodidadesComp;
