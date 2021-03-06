import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import PageNotFound from "./PageNotFound/PageNotFound";

import Cabecera from "./Cabecera/Cabecera";
import Navegacion from "./Navegacion/Navegacion";

import Inicio from "./Cuerpo/Inicio/Inicio";
import Trayectoria from "./Cuerpo/Trayectoria/Trayectoria";
import Habilidades from "./Cuerpo/Habilidades/Habilidades";
import Proyectos from "./Cuerpo/Proyectos/Proyectos";
import Proyecto from "./Cuerpo/Proyecto/Proyecto";
import Contacto from "./Cuerpo/Contacto/Contacto";

import Pie from "./Pie/Pie";

const Main = styled.div`
  margin: 0px;
  scroll-behavior: smooth; 
`;

export default function App() {
  return (
    <Main>
      <Cabecera />
      <Router>
        <Navegacion />        
        <Switch style={{ background: "#fafafa" }}>
          <Route exact strict path="/" render={() => <> <Inicio /> <Habilidades /> <Contacto />  </> } />
          <Route exact strict path="/Trayectoria" render={() => <Trayectoria />} />
          <Route exact strict path="/Proyectos" render={() => <Proyectos />} />
          <Route exact strict path="/Proyectos/:name" render={() => <Proyecto />} />
          <Route render={() => <PageNotFound />} />
        </Switch>
        <Pie />
      </Router>
    </Main>
  );
}
