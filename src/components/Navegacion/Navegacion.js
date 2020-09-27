import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Navegacion() {
  return (
    <div>
      <Router>
        <Link to="/">Inicio</Link>
        <Link to="/Trayectoria">Trayectoria</Link>
        <Link to="/Habilidades">Habilidades</Link>
        <Link to="/Proyectos">Proyectos</Link>
        <Link to="/Contacto">Contacto</Link>
      </Router>
    </div>
  );
}

export default Navegacion;