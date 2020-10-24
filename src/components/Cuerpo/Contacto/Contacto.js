import React from 'react';
import styled from 'styled-components';

import { Container, fonts, colors, breackpoints } from '../../../assets/styles';
import social from '../../../data/socialmed.json';
import Formulario from './Formulario';

const Background = styled.div`
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
   background-color: ${(colors.bgOscuro)+"dd"};
   box-shadow: 4px 6px 8px rgba(20, 20, 20, 0.5);
   border-radius: 10px;
   a{
      padding: .5em;
      color: ${colors.txtBgOscuro2};
      transition: color .5s;
      i{
         transition: color .5s;
         color: ${colors.txtBgOscuro2};
         margin-right: 8px;
      }
      :hover{
         color: ${colors.detalle1};
         i{
            color: ${colors.detalle1};
         }
      }
   }
   @media ${breackpoints.mobileS}{
      font-size: 1em;
      flex-flow: row wrap;
      a{
         flex: 1 0 30%;
         i{ font-size: 1.2em;}
         }
      padding: 1.5em 1em 1.5em 1em;
      border-left: none;
   };
	@media ${breackpoints.laptop}{
      font-size: 1.2em;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      text-align: left;
      a{
         flex: 0 ;
         display: flex;
         
         i{flex: 1 0 30%;}
         span{
            text-align:left;
            flex: 2 0 70%;
         }
      }
      padding: 1em 2em;
      border-top: none;
   };
   @media ${breackpoints.desktop}{
      font-size: 1.3em;
   };
`

const Text = styled.div`
   text-align: center;
   margin: .5em;
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

export default function Contacto() {
   let redes = []
   for(let i=0; i<6; i++){
      redes[i]= <a key={i+""+social[i].name} href={social[i].url}><i className={social[i].icon}></i><span>{social[i].name}</span></a>
   }

	return (
      <Background>
         <Container>  
            <Text>
               <span>CHARLEMOS</span>
               <p>Puedes contactarme rellenando el siguiente formulario, o siguiendome en mis redes</p>
            </Text> 
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