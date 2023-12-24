
import React from "react";
import { Link } from "react-router-dom";
// import assets
import Logo from "../../assets/img/svg/AlmaErrante60.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
      <div className="footer-container">
    <footer className="footer-left">
      <p>    Misiones 312, Federación, Entre Ríos, Argentina</p>
      <p>Contacto : +54 9 3456 419530</p>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      Instagram
    </a>
    </footer>
    <footer className="footer">
        {/* <h2>Alma Errante</h2> */}
        <Link to="/">
              <img src={Logo} alt="Alma Errante" />
            </Link>
      </footer>
    </div>
  );
}
