import React from 'react';
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../../assets/styles';

import social from '../../data/socialmed.json';

const StyledContainer = styled(Container)`
   color: ${colors.txtBgOscuro};
   background: ${colors.bgOscuro};
`

export default function Pie() {
   return (
      <Container>
         <div>
            Redes aqui Github Linkedin
            Desarrollado por <span /*cambiocoloryfuente*/>IGNA GARCIA RAVLIC</span>
         </div>
      </Container>
   );
}