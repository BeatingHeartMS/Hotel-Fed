import React, { Component } from "react";

// imports react-icons
import { FaSwimmingPool, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaSwimmingPool />,
        title: "pileta",
        info:
          "Pileta con uso exclusivo sin restricción horaria",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Distintas excursiones y actividades para realizar. https://www.federacion.tur.ar/",
      },
      {
        icon: <FaShuttleVan />,
        title: "Traslado a las termas",
        info:
          "Se puede solicitar el traslado a las termas, con horarios de recogida",
      },
      {
        icon: <FaBeer />,
        title: "Actividades nocturnas en la ciudad",
        info:
          "Distintas actividades nocturnas para realizar en la ciudad",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Servicios" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
