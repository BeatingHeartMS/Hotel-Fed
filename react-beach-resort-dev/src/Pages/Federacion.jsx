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

function Federacion() {
  return (
    <>
      <Hero>
        <BannerFed
          title="Federacion"
          subtitle="ESCRIBIR ALGO"
        >

        </BannerFed>
      </Hero>


    </>
  );
}        
export default Federacion;
