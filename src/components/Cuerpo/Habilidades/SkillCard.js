import React from 'react';
import styled from 'styled-components';

import { fonts, colors, breackpoints } from '../../../assets/styles';

const Card = styled.div`
   display: flex;
   align-items: center;
   border-radius: .5em;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border: 1px solid white;
   background: ${colors.bgGris4};
   margin: .4em;
   font-family: ${fonts.txtFamily1};
   @media ${breackpoints.mobileS}{
      flex: 1 1 25%;
   };
   @media ${breackpoints.laptop}{
      flex: 0 0 25%;
   };

   i{
      font-size: 2.5em;
      text-align: center;
      flex: 0 0 25%;
      padding: .2em;
      color: ${colors.bgGris1};
      border-radius: .2em 0 0 .2em;
      background: ${colors.detalle1};
   }
`

const Content = styled.div`
   flex: 1 0 auto;
   background: ${colors.bgGris1};
   color: ${colors.detalle1};
   padding: .3em;
   border-radius: 0 .5em .5em 0;
`

export default function SkillCard(props) {
   const skill = props.skill
   const currentTime = new Date()
   const experience = function(level){
      if(level === 0) return "Principiante"
      else if(level === 1) return "Avanzado"
      else return "Experimentado"
   }

	return (
		<Card>
         <i className={skill.icon}></i>
         <Content>
            <div> {skill.name} </div>
            <div> {experience(skill.level)} </div>
            <div> {currentTime.getFullYear() - skill.years + 1} años de uso</div>
         </Content>
		</Card>
	);
}