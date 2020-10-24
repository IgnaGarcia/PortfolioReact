import React from 'react';
import styled from 'styled-components';

import SkillCard from './SkillCard';
import { Container, colors, breackpoints, fonts } from '../../../assets/styles';

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

const Text = styled.div`
   text-align: center;
   margin: .5em;
   flex: 2 0 100%;
   max-width: 80%;
   span{
      
      font-size: 2em;
      font-family: ${fonts.txtFamily2};
      color: ${colors.bgGris2};
   }
   p{
      margin: 1em;
      font-size: 1.15em;
      font-family: ${fonts.txtFamily1};
      color: ${colors.txtBgClaro};
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
            <Text>
               <span>CON QUE TRABAJO?</span>
               <p>Aqui podras ver las tecnologias y lenguajes que manejo, aclarando el nivel de 
                  experiencia de cada uno y el tiempo que paso desde mi primera interaccion con tal</p>
            </Text>
            {skills.map( x => <SkillCard skill={x} ></SkillCard>)}
         </Container>
		</Background>
	);
}