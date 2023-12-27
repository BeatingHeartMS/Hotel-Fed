import React from "react";
//BsWhatsapp
import { ImWhatsapp } from "react-icons/im";

import IconButton from '@mui/material/IconButton';
//import Button from '@mui/material/Button';
// import react-router-dom
import { Link } from "react-router-dom";

// imports components
import Hero from "../Components/Hero/Hero";
import BannerDepartamentos from "../Components/Banner/BannerDepartamentos";
import DepartamentosComp from "../Components/FeaturedRooms/DepartamentosComp";

function Departamentos() {
  return (
    <>
    <Hero>
      <BannerDepartamentos title="Departamentos" subtitle="Descubre la serenidad en nuestros acogedores departamentos, diseñados para brindar bienestar y comodidad. Sumérgete en el silencio reparador de nuestras habitaciones, lejos del bullicio cotidiano. Bienvenido a un hogar donde el silencio es un lujo, y tu bienestar es la prioridad. Experimenta la máxima tranquilidad en un espacio simple y apacible.">


      
      </BannerDepartamentos>
    </Hero>
    <DepartamentosComp />
    </>
  );
}       
 
export default Departamentos;
