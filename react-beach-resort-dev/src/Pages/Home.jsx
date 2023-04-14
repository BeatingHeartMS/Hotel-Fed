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
          subtitle="federación, entre ríos"
        >
          <Link to="/rooms/Departamento" className="btn-primary">
            Departamentos
          </Link>
          <Link to="/Contacto" className="btn-primary">
            Contacto
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

export default Home;
