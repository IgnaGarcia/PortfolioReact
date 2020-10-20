import React from 'react';
import styled from 'styled-components';

import SkillCard from './SkillCard';
import { Container, colors } from '../../../assets/styles';

import skills from '../../../data/skills.json';


const Background = styled.div`
   background: ${colors.bgClaro};
   padding: 1.5em 0em;
   ${Container}{
      padding: 1em 0em;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
   }
`

export default function Habilidades() {

	return (
		<Background>
         <Container>
            {skills.map( x => <SkillCard skill={x} ></SkillCard>)}
         </Container>
		</Background>
	);
}