import React from 'react';
import styled from 'styled-components';

import { Container, colors, fonts } from '../../../assets/styles';
import Card from './Card';

import studies from '../../../data/studies.json';
import activities from '../../../data/otherActivities.json';
import jobs from '../../../data/jobs.json';

const Lista = styled.ul`
   padding: 1.5em 0em;
   margin: 0 auto;
   font-family: ${fonts.txtFamily1};
   li ul{
      margin-left: 10px;
      padding: 10px 0px;
      border-left: 2px dashed black;
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

export default function Trayectoria() {

   return (
      <Container>
         <Lista> 
            <li>
               <FlexBox>
                  <Ball/>
                  <h2>Experiencia Laboral:</h2>
               </FlexBox>

               <ul>
                  {jobs.map(x => <Card element={x} key={x.title}></Card>)}
               </ul>
            </li>

            <li>
               <FlexBox>
                  <Ball/>
                  <h2>Historia Academica:</h2>
               </FlexBox>

               <ul>
                  {studies.map(x => <Card element={x} key={x.title}></Card>)}
               </ul>
            </li>

            <li>
               <FlexBox>
                  <Ball/>
                  <h2>Otras Actividades:</h2>
               </FlexBox>

               <ul>
                  {activities.map(x => <Card element={x} key={x.title}></Card>)}
               </ul>
            </li>

            <li>
               <FlexBox>
                  <Ball/>
               </FlexBox>
            </li>
         </Lista>
      </Container>
   );
}