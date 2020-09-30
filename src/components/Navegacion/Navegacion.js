import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../../assets/styles';

const Contenedor = styled(Container)`
`

export default function Navegacion() {
   const Navegacion = styled.div`
      background: ${colors.bgOscuro};
      font-family: ${fonts.txtFamily1};
      padding: .4em 0em;
      box-shadow: ;
      a{
         outline: none;
         padding: .3em .75em .3em .75em;
         color: ${colors.detalle1};
         text-decoration:none;
         :hover{
            color: ${colors.detalle1Claro};
            background: ${colors.bgGrisClaro};
         }
         :visited{text-decoration:none;}
      }
      .is-active{
         color: ${colors.txtBgClaro2};
         background: ${colors.detalle1};
      }
   `

	return (
      <Navegacion>
         <Contenedor>
            <NavLink exact strict activeClassName='is-active' to="/">Inicio</NavLink>
            <NavLink exact strict activeClassName='is-active' to="/Trayectoria">Trayectoria</NavLink>
            <NavLink exact strict activeClassName='is-active' to="/Habilidades">Habilidades</NavLink>
            <NavLink exact strict activeClassName='is-active' to="/Proyectos">Proyectos</NavLink>
            <NavLink exact strict activeClassName='is-active' to="/Contacto">Contacto</NavLink>
         </Contenedor>
      </Navegacion>
	)
}