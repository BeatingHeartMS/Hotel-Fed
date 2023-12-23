import React from "react";
//BsWhatsapp
import { ImWhatsapp } from "react-icons/im";

import IconButton from '@mui/material/IconButton';
//import Button from '@mui/material/Button';
// import react-router-dom
import { Link } from "react-router-dom";

// imports components
import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";

function Comodities() {
  return (

    <Hero>
      <Banner title="Comodities" subtitle="Comodities! 
      ">

      <IconButton>
        <ImWhatsapp size={70} color='white' onClick={() => window.open('https://wa.me/5491137603315',)} />
      </IconButton>
      
      </Banner>
    </Hero>

  );
}        
export default Comodities;
