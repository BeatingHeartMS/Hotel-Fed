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
          subtitle=""
        >

        </BannerComodidades>
      </Hero>
      <ComodidadesComp />
    </>
  );
}        
export default Comodities;
