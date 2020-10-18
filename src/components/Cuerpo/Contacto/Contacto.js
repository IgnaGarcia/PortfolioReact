import React from 'react';
import styled from 'styled-components';

import { Container, fonts, colors, breackpoints } from '../../../assets/styles';
import social from '../../../data/socialmed.json';
import Formulario from './Formulario';

const Background = styled.div`
   background: ${colors.bgClaro};
   padding: 1.5em 0em;
`

const FlexDiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-content: center;
   text-align: center;
   flex-wrap: wrap;
`

const Hijo = styled.div`
   display: flex;
   font-family: ${fonts.txtFamily1};
   a{
      padding: .5em;
      color: ${colors.txtBgClaro};
      i{
         color: ${colors.detalle1Oscuro};
         padding-left: .5em;
      }
   }
   @media ${breackpoints.mobileS}{
      font-size: 1em;
      flex-flow: row wrap;
      a{flex: 1 0 30%;}
      border-top: .15em solid ${colors.bgGris2};
      padding: 2em 1em 1.5em 1em;
      border-left: none;
   };
	@media ${breackpoints.laptop}{
      font-size: 1.2em;
      flex-direction: column;
      justify-content: space-around;
      a{
         flex: 0 ;
         display: flex;
         
         i{flex: 1 0 30%;}
         span{
            text-align:left;
            flex: 2 0 70%;
         }
      }
      border-left: .15em solid ${colors.bgGris2};
      padding: 1em 2em;
      border-top: none;
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
      redes[i]= <a href={social[i].url}><i className={social[i].icon}></i><span>{social[i].name}</span></a>
   }

	return (
      <Background>
         <Container>   
            <FlexDiv>
               <Formulario></Formulario>
               <Hijo>
                  {redes.map(x => x)}
               </Hijo>
            </FlexDiv>
         </Container>
      </Background>
	);
}