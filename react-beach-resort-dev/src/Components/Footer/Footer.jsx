
import React from "react";
import { Link } from "react-router-dom";
// import assets
import Inst from "../../assets/img/svg/icons8-instagram-48.png";
import MailIcon from "../../assets/img/svg/icons8-gmail-48.png";
import Maps from "../../assets/img/svg/icons8-google-maps-nuevo-48.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
      <div className="footer-container">
    <footer className="footer-left">
      <p>    Misiones 312, Federación, Entre Ríos, Argentina</p>
      <p>Contacto : +54 9 3456 419530</p>

    </footer>
    <footer className="footer">
        <a href="https://www.instagram.com/almaerranteapart/" target="_blank" rel="noopener noreferrer">
          <img src={Inst} alt="Instagram" />
        </a>
        <a href="mailto:correo@gmail.com">
          <img src={MailIcon} alt="Correo Electrónico" />
        </a>
        <a href="https://maps.app.goo.gl/K8nKjtYdjR9EM5fq5">
          <img src={Maps} alt="Maps" />
        </a>
      </footer>
    </div>
  );
}
