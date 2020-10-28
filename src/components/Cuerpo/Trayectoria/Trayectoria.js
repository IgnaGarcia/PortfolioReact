import React from 'react';
import styled from 'styled-components';

import { Container, colors, fonts } from '../../../assets/styles';
import Card from './Card';

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

const Ball = styled.div`
   border-radius: 50%;
   padding: .45em;
   display: inline-block;
   background: ${colors.bgGris1};
   border: .3em solid ${colors.bgGris3};
`

const FlexBox = styled.div`
   display: flex;
   align-items: center;
   h2{
      margin-left: 7px;
      font-weight: 700;
      font-size: 1.2em;
      color: ${colors.txtBgClaro2};
   }
`

const Diagonal = styled.div`
   border-left: 35px solid red;
   border-top: 38px solid #4c4c4c;
   border-image: linear-gradient(to bottom left , ${colors.bgGris4+'20'} 40%, ${colors.detalle1+'aa'}, ${colors.bgGris4+'20'} 60%) 100% stretch;
   position: relative;
   z-index: -10;
   left: 0px;
   bottom: 7px;
   margin-bottom: -18px;
`

export default function Trayectoria() {

   return (
      <Container>
         <Lista> 
            <li style={{display: "block",maxWidth: "700px", margin: "auto"}}>
               <FlexBox>
                  <Ball/>
                  <h2>Experiencia Laboral:</h2>
                  
               </FlexBox>
               
               <ul>
                  <Diagonal/>
                  {jobs.map(x => <Card element={x} key={x.title}></Card>)}
               </ul>
            </li>

            <li style={{display: "block",maxWidth: "700px", margin: "auto"}}>
               <FlexBox>
                  <Ball/>
                  <h2>Historia Academica:</h2>
               </FlexBox>

               <ul>
                  <Diagonal/>
                  {studies.map(x => <Card element={x} key={x.title}></Card>)}
               </ul>
            </li>

            <li style={{display: "block",maxWidth: "700px", margin: "auto"}}>
               <FlexBox>
                  <Ball/>
                  <h2>Otras Actividades:</h2>
               </FlexBox>

               <ul>
                  <Diagonal/>
                  {activities.map(x => <Card element={x} key={x.title}></Card>)}
               </ul>
            </li>

            <li style={{display: "block",maxWidth: "700px", margin: "auto"}}>
               <FlexBox>
                  <Ball/>
               </FlexBox>
            </li>
         </Lista>
      </Container>
   );
}