import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Inicio from './Inicio/Inicio';
import Habilidades from './Habilidades/Habilidades';
import Proyectos from './Proyectos/Proyectos';
import Trayectoria from './Trayectoria/Trayectoria';
import Contacto from './Contacto/Contacto';

function Cuerpo() {
  return (
    <Router>
      <Route exact path="/" component={Inicio}/>
      <Route path="/Habilidades" component={Habilidades}/>
      <Route path="/Proyectos" component={Proyectos}/>
      <Route path="/Trayectoria" component={Trayectoria}/>
      <Route path="/Contacto" component={Contacto}/>

      <Route path="/" render={()=>{}}/>
    </Router>
  );
}

export default Cuerpo;