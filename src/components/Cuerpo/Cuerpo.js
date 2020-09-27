import React from 'react';

import Inicio from './Inicio/Inicio';
import Habilidades from './Habilidades/Habilidades';
import Proyectos from './Proyectos/Proyectos';
import Trayectoria from './Trayectoria/Trayectoria';
import Contacto from './Contacto/Contacto';

function Cuerpo() {
  return (
    <div>
      router outlet aca
      <Inicio />
      <Habilidades />
      <Proyectos />
      <Trayectoria />
      <Contacto />
    </div>
  );
}

export default Cuerpo;