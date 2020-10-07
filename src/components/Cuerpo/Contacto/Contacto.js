import React from 'react';
import styled from 'styled-components';

import { Container, fonts, colors, breackpoints } from '../../../assets/styles';
import social from '../../../data/socialmed.json';
import Formulario from './Formulario';

const Background = styled.div`
   background: ${colors.detalle1Claro};
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
   a{
      color: ${colors.txtBgClaro};
      i{color: ${colors.detalle1Oscuro}}
   }
   @media ${breackpoints.mobileS}{
      font-size: 1em;
      flex-flow: row wrap;
      div{flex: 1 0 50%;}
   };
	@media ${breackpoints.laptop}{
      font-size: 1.2em;
      flex-direction: column;
      div{flex: 0 1;}
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