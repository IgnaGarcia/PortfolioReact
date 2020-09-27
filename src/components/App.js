import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Cabecera from './Cabecera/Cabecera';

import Inicio from './Cuerpo/Inicio/Inicio';
import Trayectoria from './Cuerpo/Trayectoria/Trayectoria';
import Habilidades from './Cuerpo/Habilidades/Habilidades';
import Proyectos from './Cuerpo/Proyectos/Proyectos';
import Contacto from './Cuerpo/Contacto/Contacto';

import Pie from './Pie/Pie';

function App() {
    return (
        <div>
            <Cabecera />
            <Router>
                <Link to="/">Inicio</Link>
                <Link to="/Trayectoria">Trayectoria</Link>
                <Link to="/Habilidades">Habilidades</Link>
                <Link to="/Proyectos">Proyectos</Link>
                <Link to="/Contacto">Contacto</Link>

                <Route exact path="/" render={()=> <Inicio/>}/>
                <Route exact path="/Trayectoria" render={()=> <Trayectoria/>}/>
                <Route exact path="/Habilidades" render={()=> <Habilidades/>}/>
                <Route exact path="/Proyectos" render={()=> <Proyectos/>}/>
                <Route exact path="/Contacto" render={()=> <Contacto/>}/>
            </Router>
            <Pie />
        </div>
    );
}

export default App;