import "./App.css";
import React from "react";

// import react-router-dom
import { Route, Switch } from "react-router-dom";
import { Helmet } from 'react-helmet';

// imports pages
import Home from "../Pages/Home";
import Departamentos from "../Pages/Departamentos";
import Contacto from "../Pages/Contacto";
import Federacion from "../Pages/Federacion";
import Error from "../Pages/Error";
import Comodities from "../Pages/Comodities"

// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollReset from "../Components/ScrollReset/scrollReset";

function App() {
  return (
    <>
    <div>
      {/* Contenido de tu aplicación */}

      {/* Agrega el código de Google Analytics al encabezado */}
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=TU_ID_DE_ANALYTICS"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "TU_ID_DE_ANALYTICS");
          `}
        </script>
      </Helmet>
    </div>
    <ScrollReset />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Federacion" component={Federacion}/>
        <Route exact path="/Departamentos" component={Departamentos} />
        <Route exact path="/Contacto" component={Contacto} />
        <Route exact path="/Comodities" component={Comodities} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
