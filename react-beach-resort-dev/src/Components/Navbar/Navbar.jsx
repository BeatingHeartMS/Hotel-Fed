import React, { Component } from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// import assets
import Logo from "../../assets/img/svg/AlmaErrante60.png";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* app logo */}
            <Link to="/">
              <img src={Logo} alt="Alma Errante" />
            </Link>

            {/* navbar toggle button */}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {/* navbar link */}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/comodities">Comodities</Link>
            </li>
            <li>
              <Link to="/rooms/Departamento">Departamentos</Link>
            </li>
            <li>
              <Link to="/Contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
