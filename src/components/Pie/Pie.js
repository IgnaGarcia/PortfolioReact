import React from 'react';
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../../assets/styles';

import social from '../../data/socialmed.json';

const StyledPie = styled.footer`
   color: ${colors.txtBgOscuro};
   background: ${colors.bgOscuro};
   margin-top: 1em;
   box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
   @media ${breackpoints.mobileS}{padding: 3em 0em};
	@media ${breackpoints.laptop}{padding: 4.5em 0em};
	@media ${breackpoints.desktop}{padding: 7em 0em};
`
const Contenedor = styled(Container)`
   text-align: center;
   font-family: ${fonts.txtFamily1};
   font-weight: 500;
   font-style: italic;
   @media ${breackpoints.mobileS}{font-size: 1em};
	@media ${breackpoints.laptop}{font-size: 1.2em};
   @media ${breackpoints.desktop}{font-size: 1.4em};
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
   return (
      <StyledPie>
         <Contenedor>
            Redes aqui Github Linkedin
            <p>Desarrollado por <span>IGNA GARCIA RAVLIC</span></p>
         </Contenedor>
      </StyledPie>
   );
}