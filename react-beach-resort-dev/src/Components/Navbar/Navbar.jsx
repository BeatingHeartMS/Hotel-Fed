import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import Logo from "../../assets/img/svg/AlmaErrante60.png";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleLinkClick = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={Logo} alt="Alma Errante" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/" onClick={this.handleLinkClick}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/Federacion" onClick={this.handleLinkClick}>
                Federación
              </Link>
            </li>
            <li>
              <Link to="/comodities" onClick={this.handleLinkClick}>
                Comodidades
              </Link>
            </li>
            <li>
              <Link to="/Departamentos" onClick={this.handleLinkClick}>
                Departamentos
              </Link>
            </li>
            <li>
              <Link to="/Contacto" onClick={this.handleLinkClick}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
