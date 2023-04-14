import React, { Component } from "react";

import { Link } from "react-router-dom";

// import assets
import defaultBcg from "../assets/img/jpeg/room-1.jpeg";

// import components
import Banner from "../Components/Banner/Banner";
import { RoomContext } from "../Context/Context";
import StyledHero from "../Components/StyledHero/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;
  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found!</h3>
          <Link to="/Contacto" className="btn-primary">
            Reservar!
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacidad,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/Contacto" className="btn-primary">
              Reservar!
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>details:</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>information:</h3>
              <h6>price : ${price}</h6>

              <h6>
                capacidad :{" "}
                {capacidad > 1 ? `${capacidad} personas` : `${capacidad} person`}
              </h6>

            </article>
          </div>
        </section>

        <section className="room-extras">
          <h6>extras:</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> - {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
