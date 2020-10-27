import React from 'react';
import styled from 'styled-components';

import { Container, breackpoints, colors, forts } from '../../../assets/styles';

import studies from '../../../data/studies.json';
import activities from '../../../data/otherActivities.json';
import jobs from '../../../data/jobs.json';

const Lista = styled.ul`
   li{
      padding: 1em 0em 0em 1.5em;
   }
`

const Ball = styled.div`
   border-radius: 50%;
   padding: .5em;
   display: inline-block;
   background: ${colors.bgGris1};
   border: .3em solid ${colors.bgGris3};

`

export default function Trayectoria() {

   return (
      <Container>
         <Lista> 
            <li>
               <div>
                  <Ball/>
                  <span>Experiencia Laboral:</span>
               </div>

               <Lista>
                  {jobs.map(x => <li> {x.name} </li>)}
               </Lista>
            </li>

            <li>
               <div>
                  <Ball/>
                  <span>Historia Academica:</span>
               </div>

               <Lista>
                  {studies.map(x => <li> {x.name} </li>)}
               </Lista>
            </li>

            <li>
               <div>
                  <Ball/>
                  <span>Otras Actividades:</span>
               </div>

               <Lista>
                  {activities.map(x => <li> {x.name} </li>)}
               </Lista>
            </li>
            
         </Lista>
      </Container>
   );
}