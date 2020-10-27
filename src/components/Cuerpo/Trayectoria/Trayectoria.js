import React from 'react';

import { Container, breackpoints, colors, forts } from '../../../assets/styles';

import studies from '../../../data/studies.json';
import activities from '../../../data/otherActivities.json';
import jobs from '../../../data/jobs.json';


export default function Trayectoria() {

   return (
      <Container>
         Estudios y Proyectos/Trabajos realizados
         <ul> 
            <li>
               <h3>Experiencia Laboral:</h3>
               <ul>
                  {jobs.map(x => <li> {x.name} </li>)}
               </ul>
            </li>

            <li>
               <h3>Historia Academica:</h3>
               <ul>
                  {studies.map(x => <li> {x.name} </li>)}
               </ul>
            </li>

            <li>
               <h3>Otras Actividades:</h3>
               <ul>
                  {activities.map(x => <li> {x.name} </li>)}
               </ul>
            </li>
            
         </ul>
      </Container>
   );
}