import React from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import "../../App/App.css";

const FederacionComp = () => {
  return (
    <section className="comodidades">
      <h4>   Queremos dejar a las imagenes hablar por si solas para convencerte del atractivo de este hermoso lugar.</h4>
      <h4> Para mas informacion visita https://www.federacion.tur.ar </h4>
      <div className="comodidades-gallery">
      <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803849/Federacion/q1tsdz3esfyk4mhom0q6.webp"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803848/Federacion/uwost6srhplaixf8dprm.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803648/Federacion/n9t4yeofxmorf1wlr4qn.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803648/Federacion/kwuubbewfszoilkmhbeu.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803648/Federacion/zzlesqklvqrke8x00ajr.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803647/Federacion/fwa2odmjqsgty0litwd8.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803647/Federacion/tb6vd6sgfda1z50xnjsy.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803647/Federacion/ir36pnzweacmmudgqzrw.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803647/Federacion/i5aemzc76w9l8jnmlx0f.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803646/Federacion/sdeopmuuurmr5vkjitn2.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803646/Federacion/jjxt0exp5gpoptpdc64q.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803646/Federacion/axcislug9kocxmoymh3g.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803646/Federacion/opvnoan4jejhysenzklk.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803645/Federacion/jpazzefcn34ikgktopk8.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803645/Federacion/ob3xniji21ssrjl8mdgd.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803645/Federacion/igspovuiznyo2gj99gs3.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803644/Federacion/qxjnlsdumk8nqufuepex.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803644/Federacion/bmfdrtd1hbfavyjkculf.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703803644/Federacion/odqygigchohhyu0h7yks.jpg"/>
            </div>
          <div className="gallery-item">
            <img src="https://res.cloudinary.com/duwgskhvh/image/upload/v1703767605/beynryrssacpkbtmehkv.jpg"/>
            </div>
        </div>

        <div className="btn-primary">
        <Link to="/Contacto">Contactanos!</Link>
      </div>
    </section>
  );
};

export default FederacionComp;
