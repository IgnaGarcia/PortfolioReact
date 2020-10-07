import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

import { Container, colors, fonts, breackpoints } from '../../assets/styles';

import social from '../../data/socialmed.json';

const StyledPie = styled.footer`
   color: ${colors.txtBgOscuro2};
   background: ${colors.bgOscuro};
   margin-top: 1em;
   box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
   @media ${breackpoints.mobileS}{padding: 2em 0em 1.3em 0em};
	@media ${breackpoints.laptop}{padding: 3.5em 0em 2.3em 0em};
   @media ${breackpoints.desktop}{padding: 4.5em 0em 3.3em 0em};
   
   a{
      color: ${colors.txtBgOscuro2};
      transition: font-size .5s, color .5s;
      :hover{
         color: ${colors.detalle1Claro};
      }
      padding: .0em .5em;
   }
`
const Contenedor = styled(Container)`
   text-align: center;
   font-family: ${fonts.txtFamily1};
   font-weight: 500;
   font-style: italic;
   display: flex;
   flex-direction: column;
   .padre{
      display: flex;
      justify-content: space-between;
   }
   .hijo1 , .hijo2{
      display: flex;
      flex-direction: column;
      font-style: normal;
   }
   .hijo1{i{ padding: .5em }}
   .hijo2 a{
      font-size: .9em; 
      margin: .35em;
   }
   p{
         margin: .5em .3em;
   }
   @media ${breackpoints.mobileS}{
      font-size: 1em;
   };
	@media ${breackpoints.laptop}{
      font-size: 1.2em;
   };
   @media ${breackpoints.desktop}{
      font-size: 1.4em;
   };
   span{
      font-family: ${fonts.txtFamily2};
      font-weight: 400;
      color: ${colors.detalle1};
   }
`

/*TO DO-----------------
-Efecto zoom en iconos
-Efecto de transicion en el p
-Efecto de fade in del span
*/

export default function Pie() {
   let redes = []
   for (let i=0; i<3; i++) {
      redes[i] = <a href={social[i].url}><i className={social[i].icon.concat(" fa-lg")}></i></a>
   }

   return (
      <StyledPie>
         <Contenedor>
            <div className="padre">
               <div className="hijo1">
                  <span>Redes:</span> {redes.map(x => x)}
               </div>
               <div className="hijo2">
                  <span>Links:</span> 
                  <NavLink exact strict activeClassName='is-active' to="/"><i className="fas fa-address-book"></i>Inicio</NavLink>
                  <NavLink exact strict activeClassName='is-active' to="/Trayectoria"><i className="fas fa-project-diagram"></i>Trayectoria</NavLink>
                  <NavLink exact strict activeClassName='is-active' to="/Habilidades"><i className="fas fa-brain"></i>Habilidades</NavLink>
                  <NavLink exact strict activeClassName='is-active' to="/Proyectos"><i className="fas fa-folder-open"></i>Proyectos</NavLink>
                  <NavLink exact strict activeClassName='is-active' to="/Contacto"><i className="fas fa-comments"></i>Contacto</NavLink>
               </div>
            </div>
            <p>Desarrollado por <span>IGNA GARCIA RAVLIC</span></p>
            
         </Contenedor>
      </StyledPie>
   );
}