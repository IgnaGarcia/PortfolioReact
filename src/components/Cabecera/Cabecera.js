import React from 'react';
import styled from 'styled-components';

import MiniDiv from '../../assets/styles/';

const MiniDiv = styled.div`
   color: green;
`

const StyledCabecera = styled.header`
   background: black;
`

export default function Cabecera() {
   return (
      <StyledCabecera>
         <MiniDiv>
            <h1>IGNA GARCIA RAVLIC</h1>
            <h2>DESARROLLADOR</h2>
         </MiniDiv>
      </StyledCabecera>
   )
}