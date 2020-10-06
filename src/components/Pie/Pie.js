import React from 'react';
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../../assets/styles';

import social from '../../data/socialmed.json';

const StyledPie = styled.footer`
   color: ${colors.txtBgOscuro};
   background: ${colors.bgOscuro};
   margin-top: .5em;
   box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
   @media ${breackpoints.mobileS}{padding: 3em 0em};
	@media ${breackpoints.laptop}{padding: 4.5em 0em};
   @media ${breackpoints.desktop}{padding: 7em 0em};
   
   p{
      margin: .5em 0em;
   }
   a{
      color: ${colors.txtBgOscuro};
      transition: font-size .5s, color .5s;
      :hover{
         color: ${colors.detalle1Claro};
      }
      i{padding: .5em .5em;}
   }
`
const Contenedor = styled(Container)`
   text-align: center;
   font-family: ${fonts.txtFamily1};
   font-weight: 500;
   font-style: italic;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   @media ${breackpoints.mobileS}{
      font-size: 1em;
      justify-content: center;
   };
	@media ${breackpoints.laptop}{
      font-size: 1.2em;
      justify-content: space-between;
   };
   @media ${breackpoints.desktop}{
      font-size: 1.4em;
      justify-content: space-between;
   };
   span{
      font-family: ${fonts.txtFamily2};
      font-weight: 400;
      color: ${colors.detalle1};
   }
`

/*TO DO-----------------
-Iconos de Redes
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
            <p>Desarrollado por <span>IGNA GARCIA RAVLIC</span></p>
            <div>{redes.map(x => x)}</div>
         </Contenedor>
      </StyledPie>
   );
}