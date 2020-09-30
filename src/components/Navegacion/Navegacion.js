import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../../assets/styles';

export default function Navegacion() {
	return (
      <div>
         <NavLink exact strict to="/">Inicio</NavLink>
         <NavLink exact strict to="/Trayectoria">Trayectoria</NavLink>
         <NavLink exact strict to="/Habilidades">Habilidades</NavLink>
         <NavLink exact strict to="/Proyectos">Proyectos</NavLink>
         <NavLink exact strict to="/Contacto">Contacto</NavLink>
      </div>
	)
}