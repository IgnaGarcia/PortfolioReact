import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom'

import { Container, colors, fonts, breackpoints } from '../../assets/styles';


const Nav = styled.nav`
   justify-content: space-around;

   @media ${breackpoints.mobileS}{
      display: ${props => (props.open ? "flex" : "none")};
      flex-direction: column;
   };
   @media ${breackpoints.laptop}{
      width: 100%;
      display: flex;
      flex-direction: row;
   };

   a{
      flex-grow: 1;
      outline: none;
      text-align: center;
      padding: .4em 0em;
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
   i{
      padding: 0em .7em;
   }
`

function Navbar({ open }) {
  return (
   <Nav open={open}>
      <NavLink exact strict activeClassName='is-active' to="/"><i className="fas fa-address-book"></i>Inicio</NavLink>
      <NavLink exact strict activeClassName='is-active' to="/Trayectoria"><i className="fas fa-project-diagram"></i>Trayectoria</NavLink>
      <NavLink exact strict activeClassName='is-active' to="/Habilidades"><i className="fas fa-brain"></i>Habilidades</NavLink>
      <NavLink exact strict activeClassName='is-active' to="/Proyectos"><i className="fas fa-folder-open"></i>Proyectos</NavLink>
      <NavLink exact strict activeClassName='is-active' to="/Contacto"><i className="fas fa-comments"></i>Contacto</NavLink>
   </Nav>
  );
}

export default Navbar;
