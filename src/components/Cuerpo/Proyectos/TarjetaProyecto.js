import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

import { breackpoints, colors } from '../../../assets/styles';
import imagenPrueba from '../../../assets/attachments/Penguins.jpg';
import imagenPrueba2 from '../../../assets/attachments/SpeechToText.png';

const Imagen = styled.div`
   .imagen{
      border-radius: 10px 10px 0px 0px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.45);
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`

const Background = styled.div`
   background: ${colors.detalle1Oscuro+'cc'};
   border-radius: 10px;
   border: 1px solid ${colors.bgClaro};
   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
   @media ${breackpoints.mobileS}{
      flex: 0 1 70%;
      margin: .8em auto;
      ${Imagen}{
         height: 230px;
         margin-bottom: .3em;
      }
   }
   @media ${breackpoints.tablet}{
      flex: 0 1 35%;
      ${Imagen}{
         height: 200px;
         margin-bottom: .5em;
      }
   }
   @media ${breackpoints.laptop}{
      flex: 0 0 20%;
   }
   a{
      color: ${colors.txtBgClaro2};
   }
   cursor: pointer;
   :hover{
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.45);
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
   ul{
      text-align: center;
      display: block;
      margin: 10px 0px 5px 0px;
      li{
         font-size: .8em;
         display: inline;
         text-align: center;
         background: ${colors.bgGris1};
         color: ${colors.bgGris4};
         box-shadow: 0px 2px 5px rgba(0,0,0,0.25);
         border-radius: 8px;
         padding: 2px 15px;
         margin: 0px 3px;
      }
   }
   
`

export default function TarjetaProyectos(prop) {
   let proyects = prop.proyects
   return (
      <Background>
         <NavLink exact strict to={"/Proyectos/"+proyects.link}>
            <Imagen>{proyects.estado? 
               <img className="imagen" src={imagenPrueba2} ></img>:
               <img className="imagen" src={imagenPrueba} ></img> }
            </Imagen>
            <Content>
               <h3> {proyects.titulo} </h3>
               <ul>
                  {proyects.tecnologias.map( x=> <li key={x}>{x}</li> )}
               </ul>
            </Content>
         </NavLink>
      </Background>
   );
}