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
      <BannerDepartamentos title="Departamentos" subtitle="Que hago?">


      
      </BannerDepartamentos>
    </Hero>
    <DepartamentosComp />
    </>
  );
}        
export default Departamentos;
