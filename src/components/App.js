import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../assets/styles';

import PageNotFound from './PageNotFound/PageNotFound';

import Cabecera from './Cabecera/Cabecera';
import NavLinks from './Navegacion/Navegacion';

import Inicio from './Cuerpo/Inicio/Inicio';
import Trayectoria from './Cuerpo/Trayectoria/Trayectoria';
import Habilidades from './Cuerpo/Habilidades/Habilidades';
import Proyectos from './Cuerpo/Proyectos/Proyectos';
import Contacto from './Cuerpo/Contacto/Contacto';

import Pie from './Pie/Pie';

export default function App() {
   const Navegacion = styled.div`
      background: ${colors.bgOscuro};
      Link{
         text-decoration: none;
         color: ${colors.txtBgOscuro};
         :active{
            text-decoration: none;
            color: ${colors.txtBgOscuro};
         }
      }
   `
   const Contenedor = styled(Container)`
   `

	return (
		<div>
         <Cabecera />
			<Router>
            <Navegacion>
               <Contenedor>
                  <NavLinks />
               </Contenedor>
            </Navegacion>
            <Contenedor>
               <Switch>
                  <Route exact strict path="/" render={() => <Inicio />} />
                  <Route exact strict path="/Trayectoria" render={() => <Trayectoria />} />
                  <Route exact strict path="/Habilidades" render={() => <Habilidades />} />
                  <Route exact strict path="/Proyectos" render={() => <Proyectos />} />
                  <Route exact strict path="/Contacto" render={() => <Contacto />} />
                  <Route render={() => <PageNotFound />} />
               </Switch>
            </Contenedor>
         </Router>
			<Pie />
		</div>
	);
}