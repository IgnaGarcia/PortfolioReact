import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../assets/styles';

import PageNotFound from './PageNotFound/PageNotFound';

import Cabecera from './Cabecera/Cabecera';

import Inicio from './Cuerpo/Inicio/Inicio';
import Trayectoria from './Cuerpo/Trayectoria/Trayectoria';
import Habilidades from './Cuerpo/Habilidades/Habilidades';
import Proyectos from './Cuerpo/Proyectos/Proyectos';
import Contacto from './Cuerpo/Contacto/Contacto';

import Pie from './Pie/Pie';

export default function App() {
   const Navegacion = styled.div`
      color: ${colors.txtBgOscuro};
      background: ${colors.bgOscuro};
      a{
         :visited{
            text-decoration: none;
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
                  <Link to="/">Inicio</Link>
                  <Link to="/Trayectoria">Trayectoria</Link>
                  <Link to="/Habilidades">Habilidades</Link>
                  <Link to="/Proyectos">Proyectos</Link>
                  <Link to="/Contacto">Contacto</Link>
               </Contenedor>
            </Navegacion>
            <Contenedor>
               <Route exact path="/" render={() => <Inicio />} />
               <Route exact path="/Trayectoria" render={() => <Trayectoria />} />
               <Route exact path="/Habilidades" render={() => <Habilidades />} />
               <Route exact path="/Proyectos" render={() => <Proyectos />} />
               <Route exact path="/Contacto" render={() => <Contacto />} />
               <Route render={() => <PageNotFound />} />
            </Contenedor>
         </Router>
			<Pie />
		</div>
	);
}