import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Cabecera from './components/Cabecera/Cabecera';
import Navegacion from './components/Navegacion/Navegacion';

import Inicio from './Cuerpo/Inicio/Inicio';
import Trayectoria from './Cuerpo/Trayectoria/Trayectoria';
import Habilidades from './Cuerpo/Habilidades/Habilidades';
import Proyectos from './Cuerpo/Proyectos/Proyectos';
import Contacto from './Cuerpo/Contacto/Contacto';

import Pie from './components/Pie/Pie';
import Navegacion from './components/Navegacion/Navegacion';

ReactDOM.render(
  <React.StrictMode>
    <Cabecera />
    <Navegacion />
    <Router>
        <Route exact path="/" render={()=> <Inicio/>}/>
        <Route exact path="/Trayectoria" render={()=> <Trayectoria/>}/>
        <Route exact path="/Habilidades" render={()=> <Habilidades/>}/>
        <Route exact path="/Proyectos" render={()=> <Proyectos/>}/>
        <Route exact path="/Contacto" render={()=> <Contacto/>}/>
      </Router>
    <Pie />
  </React.StrictMode>,
  document.getElementById('root')
);