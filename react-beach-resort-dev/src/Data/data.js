// import room1 from "../assets/img/jpeg/details-1.jpeg";
import room2 from "../assets/img/jpeg/details-2.jpeg";
import room3 from "../assets/img/jpeg/details-3.jpeg";
import room4 from "../assets/img/jpeg/details-4.jpeg";
// import img1 from "../assets/img/jpeg/room-1.jpeg";
// import img2 from "../assets/img/jpeg/room-2.jpeg";
// import img3 from "../assets/img/jpeg/room-3.jpeg";
// import img4 from "../assets/img/jpeg/room-4.jpeg";
// import img5 from "../assets/img/jpeg/room-5.jpeg";
// import img6 from "../assets/img/jpeg/room-6.jpeg";
// import img7 from "../assets/img/jpeg/room-7.jpeg";
// import img8 from "../assets/img/jpeg/room-8.jpeg";
// import img9 from "../assets/img/jpeg/room-9.jpeg";
// import img10 from "../assets/img/jpeg/room-10.jpeg";
// import img11 from "../assets/img/jpeg/room-11.jpeg";
import img12 from "../assets/img/jpeg/room-12.jpeg";

const data = [
  {
    sys: {
      id: "12",
    },
    fields: {
      name: "Departamento",
      slug: "Departamento",
      type: "familiar",
      price: 15000,
      capacidad: 5,
      pets: true,
      featured: true,
      description:
        "Amplia departamento con capacidad para 5 personas, con una habitacion matrimonial, cuentan con television, internet Wifi, Cocina, Heladera y mesa comedor.",
      extras: [
        "Toallas limpias",
        "Pileta 24hs",
        "Deck compartido",
        "Aire acondicionado y ventilador",
        "Heladera con frezeer",
        "Cocina electrica",
        "Microondas",
        "Internet por Wifi",
        "Comodas camas",
      ],
      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
];

export default data;
