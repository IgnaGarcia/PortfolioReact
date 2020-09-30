import React from 'react';
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../../assets/styles';

import social from '../../data/socialmed.json';

const StyledPie = styled.footer`
   color: ${colors.txtBgOscuro};
   background: ${colors.bgOscuro};
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