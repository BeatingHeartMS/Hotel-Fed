import React from "react";
//BsWhatsapp
import { ImWhatsapp } from "react-icons/im";

import IconButton from '@mui/material/IconButton';
//import Button from '@mui/material/Button';
// import react-router-dom
import { Link } from "react-router-dom";

// imports components
import Hero from "../Components/Hero/Hero";
import BannerFed from "../Components/Banner/BannerFed";
import FederacionComp from "../Components/Federacion/FederacionComp"

function Federacion() {
  return (
    <>
      <Hero>
        <BannerFed
          title="Federación"
          subtitle="Conoce Federación, un paraíso terrenal que ofrece una experiencia rejuvenecedora. Sumérgete en nuestras relajantes termas y disfruta del parque acuático, un escape perfecto para renovar cuerpo y mente. Navega por las tranquilas aguas del río, explora reservas naturales que te conectan con la serenidad y deleita tus sentidos con la pesca. Descubre distintos paisajes, desde bosques hasta panorámicas vistas. En cada rincón, encontrarás la armonía perfecta entre la naturaleza y la diversión. ¡Vive momentos inolvidables en Federación, donde la belleza y la aventura se entrelazan!"
        >

        </BannerFed>
      </Hero>
      <FederacionComp />


    </>
  );
}     
   
export default Federacion;
