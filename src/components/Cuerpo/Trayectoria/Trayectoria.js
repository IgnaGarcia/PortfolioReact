import React  from 'react';
import styled from 'styled-components';

import { Container, colors, fonts } from '../../../assets/styles';
import Dropdown from './Dropdown';

import studies from '../../../data/studies.json';
import activities from '../../../data/otherActivities.json';
import jobs from '../../../data/jobs.json';

const Lista = styled.ul`
   padding: 1.5em 0em;
   font-family: ${fonts.txtFamily1};
   li ul{
      margin-left: 8px;
      border-left: 8px solid transparent;
      border-image: linear-gradient(to right, ${colors.bgGris3+'40'} 0%, ${colors.bgGris3} 0.5%, ${colors.bgGris3+'40'} 1%) 1% stretch;
   }
`

export default function Trayectoria() {
   return (
      <Container>
         <Lista>
            <Dropdown lista={jobs} titulo={"Experiencia Laboral"}/>            
            <Dropdown lista={studies} titulo={"Historia Academica"}/> 
            <Dropdown lista={activities} titulo={"Otras Actividades"}/> 
            <Dropdown/>            
         </Lista>
      </Container>
   );
}