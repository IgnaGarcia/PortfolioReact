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
`;

export default function App() {
  return (
    <Main>
      <Cabecera />
      <Router>
        <Navegacion />
        {/*
            <Habilidades />
            <Contacto />
            */}

        {
          /* */
          <Switch style={{ background: "#fafafa" }}>
            <Route exact strict path="/" render={() => <Inicio />} />
            <Route
              exact
              strict
              path="/Trayectoria"
              render={() => <Trayectoria />}
            />
            <Route
              exact
              strict
              path="/Habilidades"
              render={() => <Habilidades />}
            />
            <Route
              exact
              strict
              path="/Proyectos"
              render={() => <Proyectos />}
            />
            <Route
              exact
              strict
              path="/Proyectos/:name"
              render={() => <Proyecto />}
            />
            <Route exact strict path="/Contacto" render={() => <Contacto />} />
            <Route render={() => <PageNotFound />} />
          </Switch>
          /* */
        }
        <Pie />
      </Router>
    </Main>
  );
}
