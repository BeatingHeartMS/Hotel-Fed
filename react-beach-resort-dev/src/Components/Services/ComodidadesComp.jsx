import React from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import "../../App/App.css";

const ComodidadesComp = () => {
  return (
    <section className="comodidades">
      

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
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767325/ComodidadesCompress/puyh38wfnj4axdvejpup.jpg"/>
                        </div>
          <div className="gallery-item">
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767325/ComodidadesCompress/uwjpcdfsk9bxxu3scehc.jpg"/>
                        </div>
                        <div className="gallery-item">
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1704891524/ComodidadesCompress/IMG_7903_paem5s.jpg"/>
                        </div>
                        
          <div className="gallery-item">
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767325/ComodidadesCompress/ktlneivlyo2bzacllowl.jpg"/>
                        </div>
          <div className="gallery-item">
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767323/ComodidadesCompress/gwkjppqnjvb35zleqit9.jpg"/>
                        </div>
          <div className="gallery-item">
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767322/ComodidadesCompress/xgwzeuoij4jknrofnqfs.jpg"/>
                        </div>
          <div className="gallery-item">
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767321/ComodidadesCompress/u1oajdgvnkwtuldciwxr.jpg"/>
                        </div>
          <div className="gallery-item">
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767317/ComodidadesCompress/r5l975bykabyvarpklzq.jpg"/>
                        </div>
          <div className="gallery-item">
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767316/ComodidadesCompress/gzn9vo3okveww2gf0kkp.jpg"/>
                        </div>
          <div className="gallery-item">
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767316/ComodidadesCompress/xp6vias5c1xg3afhwhzo.jpg"/>
                        </div>
          <div className="gallery-item">
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767316/ComodidadesCompress/paajvjzev8mdpchgng4n.jpg"/>
                        </div>
          <div className="gallery-item">
                        <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767315/ComodidadesCompress/zcygw0qunbu9imwb1aqs.jpg"/>
                        </div>

          </div>
        <div className="btn-primary">
        <Link to="/Contacto">Contactanos!</Link>
      </div>
    </section>
  );
};

export default ComodidadesComp;
