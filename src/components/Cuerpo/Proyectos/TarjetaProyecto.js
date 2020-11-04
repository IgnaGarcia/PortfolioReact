import React from 'react';
import styled from 'styled-components';

import { breackpoints, colors } from '../../../assets/styles';
import imagenPrueba from '../../../assets/attachments/Penguins.jpg';

const Background = styled.div`
   background: ${colors.detalle1Oscuro+'cc'};
   border-radius: 10px;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   @media ${breackpoints.mobileS}{
      flex: 0 1 80%;
      margin: .8em auto;
   }
   @media ${breackpoints.tablet}{
      flex: 0 1 30%;
   }
   @media ${breackpoints.laptop}{
      flex: 0 0 20%;
   }
   a{
      color: ${colors.txtBgClaro2};
      display: block;
   }
`

const Imagen = styled.div`
   .imagen{
      border-radius: 10px 10px 0px 0px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 70%;
      object-fit: cover;
   }
`

const Content = styled.div`
   padding: .2em .5em .5em .5em;
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   h3{
      font-size: 1em;
      font-weight: bold;
   }
   span{
      color: ${colors.bgGris2};
      margin: 5px 0px 0px;
      font-size: .8em;
   }
   ul{
      text-align: center;
      display: block;
      margin: 10px 0px 5px 0px;
      li{
         font-size: .8em;
         display: inline;
         background: ${colors.bgGris1};
         color: ${colors.bgGris4};
         box-shadow: 0px 2px 5px rgba(0,0,0,0.25);
         border-radius: 10px;
         padding: 2px 7px;
         margin: 0px 3px;
      }
   }
   
`

export default function TarjetaProyectos(prop) {
   let proyects = prop.proyects
   return (
      <Background>
         <a href={proyects.link}>
            <Imagen><img className="imagen" src={imagenPrueba}></img></Imagen>
            <Content>
               <h3> {proyects.titulo} </h3>
               {proyects.estado? <span className="finish"> Finalizado </span>: <span className="develop"> En Desarrollo </span>}
               <ul>
                  {proyects.tecnologias.map( x=> <li key={x}> {x} </li> )}
               </ul>
            </Content>
         </a>
      </Background>
   );
}