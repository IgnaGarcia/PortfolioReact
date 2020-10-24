import React from 'react';
import styled from 'styled-components';

import SkillCard from './SkillCard';
import { Container, colors, breackpoints } from '../../../assets/styles';

import skills from '../../../data/skills.json';


const Background = styled.div`
   background: ${colors.bgClaro};
   padding: 1.5em 0em;
   ${Container}{
      padding: 1em 0em;
      display: flex;
      flex-wrap: wrap;
      @media ${breackpoints.mobileS}{
         justify-content: center;
      };

   }
`

export default function Habilidades() {
   function compare(a, b){
      if(a.type < b.type) return -1
      else if(a.type > b.type) return 1
      else if(a.type === b.type){
         if(a.level > b.level) return -1
         else if(a.level < b.level) return 1
         else return 0
      }
   }
   console.log(skills.sort(compare))
	return (
		<Background>
         <Container>
            {skills.map( x => <SkillCard skill={x} ></SkillCard>)}
         </Container>
		</Background>
	);
}