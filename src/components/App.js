import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageNotFound from './PageNotFound/PageNotFound';

import Cabecera from './Cabecera/Cabecera';
import Navegacion from './Navegacion/Navegacion';

import Inicio from './Cuerpo/Inicio/Inicio';
import Trayectoria from './Cuerpo/Trayectoria/Trayectoria';
import Habilidades from './Cuerpo/Habilidades/Habilidades';
import Proyectos from './Cuerpo/Proyectos/Proyectos';
import Contacto from './Cuerpo/Contacto/Contacto';

import Pie from './Pie/Pie';

export default function App() {

	return (
		<div>
         <Cabecera />
			<Router>
            <Navegacion />
            <Switch>
               <Route exact strict path="/" render={() => <Inicio />} />
               <Route exact strict path="/Trayectoria" render={() => <Trayectoria />} />
               <Route exact strict path="/Habilidades" render={() => <Habilidades />} />
               <Route exact strict path="/Proyectos" render={() => <Proyectos />} />
               <Route exact strict path="/Contacto" render={() => <Contacto />} />
               <Route render={() => <PageNotFound />} />
            </Switch>
            <Pie />
         </Router>
		</div>
	);
}