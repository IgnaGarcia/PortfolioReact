import React from 'react';
import styled from 'styled-components';

import {MiniDiv} from '../../assets/styles';


const Algo = styled(MiniDiv)``
const OtroAlgo = styled(MiniDiv)``

const StyledCabecera = styled.header`
   background: black;
`

export default function Cabecera() {
   return (
      <StyledCabecera>
         <Algo>
            <OtroAlgo>   
               <h1>IGNA GARCIA RAVLIC</h1>
               <h2>DESARROLLADOR</h2>
            </OtroAlgo>
         </Algo>
      </StyledCabecera>
   )
}