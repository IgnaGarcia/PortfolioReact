import React from 'react';
import styled from 'styled-components';

import {Container, colors, fonts} from '../../assets/styles';

export const MiniDiv = styled.div`
   color: ${colors.txtBgOscuro};
   background: ${colors.bgOscuro};
   font-family: ${fonts.txtFamily2};
`
const StyledContainer = styled(Container)``

const StyledCabecera = styled.header`
   background: black;
`

export default function Cabecera() {
   return (
      <StyledCabecera>
         <StyledContainer>
            <MiniDiv>   
               <h1>IGNA GARCIA RAVLIC</h1>
               <h2>DESARROLLADOR</h2>
            </MiniDiv>
         </StyledContainer>
      </StyledCabecera>
   )
}