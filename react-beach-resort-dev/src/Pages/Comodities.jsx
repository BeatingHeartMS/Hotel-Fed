import React from "react";
//BsWhatsapp
import { ImWhatsapp } from "react-icons/im";

import IconButton from '@mui/material/IconButton';
//import Button from '@mui/material/Button';
// import react-router-dom
import { Link } from "react-router-dom";

// imports components
import Hero from "../Components/Hero/Hero";
import BannerComodidades from "../Components/Banner/BannerComodidades";
import ComodidadesComp from "../Components/Services/ComodidadesComp";


function Comodities() {
  return (

    <>
      <Hero>
        <BannerComodidades 
          title="Comodidades"
          subtitle="
          Descubre la tranquilidad en nuestras instalaciones, donde el espacio compartido es un oasis de relajación. Sumérgete en la frescura de la pileta y disfruta de la parrilla compartida. Con sol y playa a pocos metros, nuestro rincón junto al río ofrece una experiencia única"
        >

        </BannerComodidades>
      </Hero>
      <ComodidadesComp />
    </>
  );
}        
export default Comodities;
