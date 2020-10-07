import React from 'react';
import styled from 'styled-components';

import { Container, fonts, colors, breackpoints } from '../../../assets/styles';
import social from '../../../data/socialmed.json';
import Formulario from './Formulario';

const Background = styled.div`
   background: ${colors.bgClaro};
   padding: 1em 0em;
`

const FlexDiv = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`

const Hijo = styled.div`
   padding: 1em;
   display: flex;
   font-family: ${fonts.txtFamily1};
   justify-content: space-around;
   text-align: center;
   a{
      padding: .5em;
      color: ${colors.txtBgClaro};
      i{color: ${colors.detalle1Oscuro}}
   }
   @media ${breackpoints.mobileS}{
      font-size: 1em;
      flex-flow: row wrap;
      justify-content: space-around;
      a{flex: 1 0 30%;}
   };
	@media ${breackpoints.laptop}{
      font-size: 1.2em;
      flex-direction: column;
      a{flex: 0 ;}
   };
   @media ${breackpoints.desktop}{
      font-size: 1.3em;
      i{
         font-size: 1.5em;
      }
   };
`

export default function Contacto() {
   let redes = []
   for(let i=0; i<6; i++){
      redes[i]= <a href={social[i].url}><i className={social[i].icon}></i>{social[i].name}</a>
   }

	return (
      <Background>
         <Container>   
            <FlexDiv>
               <Hijo>
                  {redes.map(x => x)}
               </Hijo>
               <Formulario></Formulario>
            </FlexDiv>
         </Container>
      </Background>
	);
}