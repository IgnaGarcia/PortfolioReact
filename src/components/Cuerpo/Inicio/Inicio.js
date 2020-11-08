import React from 'react';
import styled from 'styled-components';

import { Container, breackpoints, colors, fonts } from '../../../assets/styles';
import imagenPrueba2 from '../../../assets/attachments/SpeechToText.png';

import personal from '../../../data/personal.json';

const Titulo = styled.h2`
   font-family: ${fonts.txtFamily2};
   font-size: 3em;
   font-weight: bold;
   color: ${colors.bgGris2};
   margin-bottom: 20px;
`

const Content = styled.div`
   padding: .2em .5em .5em .5em;
   text-align: center;
   p{
      text-align: justify;
      color: ${colors.bgGris2};
   }
   @media ${breackpoints.mobileS}{
      flex: 1 0 70%;
   }
   @media ${breackpoints.tablet}{
      flex: 0 1 45%;
   }
`

const Imagen = styled.div`
   border-radius: 100%;
   border: 4px solid ${colors.bgGris3};
   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.45);
   .imagen{
      border-radius: 100%;
      width: 100%;
      height: auto;
      object-fit: cover;
   }
   @media ${breackpoints.mobileS}{
      flex: 0 1 60%;
      order: -1;
   }
   @media ${breackpoints.tablet}{
      flex: 0 1 30%;
      order: 0;
   }
   @media ${breackpoints.laptop}{
      flex: 0 1 20%;
   }
`

const Background = styled.div`
   padding: 1.5em 0em;
   ${Container}{
      font-family: ${fonts.txtFamily1};
      display:flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      align-content: center;
   }
`

export default function Inicio() {
   return (
      <Background>
         <Container>
            <Content>
               <Titulo>Bienveni@!</Titulo>
               <p>Soy estudiante de la Universidad Nacional del Oeste de la carrera de Informatica,
                  con casi un 50% de materias aprobadas. <br/>
                  Tengo 21 años y soy un apasionado de la informatica y de la ciencia en general,
                  pasion que se transforma en voluntad para crecer en este campo y hacerlo de la
                  mejor manera posible
               </p>
            </Content>
            <Imagen>
               <img className="imagen" src={imagenPrueba2} ></img>
            </Imagen>
         </Container>
      </Background>
   );
}