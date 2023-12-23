import React from "react";
// import react-router-dom
import { Link } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import FeaturedRooms from "../Components/FeaturedRooms/FeaturedRooms";
// imports components
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";

function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="alma errante"
          subtitle="Experimenta la tranquilidad de nuestro refugio, donde cada atardecer sobre el río Uruguay se convierte en un cuadro de paz y armonía. Sumérgete en la comodidad de nuestro espacio, rodeado por la belleza del paisaje natural que te ofrece una conexión única con la serenidad y la naturaleza."
        >
          <Link to="/Contacto" className="btn-primary">
            Reserva
          </Link>
        </Banner>
      </Hero>
      {/* <Services /> */}
      <FeaturedRooms />
    </>
  );
}

export default Home;
