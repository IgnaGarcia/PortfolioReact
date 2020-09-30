import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../../assets/styles';

const Contenedor = styled(Container)`
`

export default function Navegacion() {
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

	return (
      <Navegacion>
         <Contenedor>
            <NavLink exact strict to="/">Inicio</NavLink>
            <NavLink exact strict to="/Trayectoria">Trayectoria</NavLink>
            <NavLink exact strict to="/Habilidades">Habilidades</NavLink>
            <NavLink exact strict to="/Proyectos">Proyectos</NavLink>
            <NavLink exact strict to="/Contacto">Contacto</NavLink>
         </Contenedor>
      </Navegacion>
	)
}