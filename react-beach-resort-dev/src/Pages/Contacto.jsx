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
import Title from "../Components/Title/Title";

function Contacto() {
  return (

    <Hero>
      <Banner title="Contacto"
      
      subtitle="Para coordinar la reserva, comunicarse al +54 9 3456 419530 o contactanos directamente haciendo click en el icono de whastapp">
      
        
      <IconButton>
        <ImWhatsapp size={70} color='white' onClick={() => window.open('https://wa.me/5493456419530',)} />
      </IconButton>
      <div></div>
      <h4>La reserva minima son 3 dias.</h4>
      <h4>No se aceptan mascotas.</h4>
      </Banner>
    </Hero>

  );
}      


export default Contacto;
