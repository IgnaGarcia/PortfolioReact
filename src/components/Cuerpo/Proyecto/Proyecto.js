import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router";

import { Container, breackpoints, colors, fonts } from '../../../assets/styles';
import imagenPrueba from '../../../assets/attachments/Penguins.jpg';
import imagenPrueba2 from '../../../assets/attachments/SpeechToText.png';

import proyects from '../../../data/proyects.json';


const Title = styled.h2`
   font-family: ${fonts.txtFamily2};
   font-size: 3em;
   font-weight: bold;
   color: ${colors.bgGris2};
`

const Details = styled.div`
   margin: 15px 0px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   i{
      font-size: 2em;
      color: ${colors.bgGris1};
      :hover{
         color: ${colors.detalle1};
      }
   }
   .finish{
      color: rgb(100, 200, 105);
      font-size: 1.2em;
   }
   .develop{
      color: rgb(200, 100, 105);
      font-size: 1.2em;
   }
`

const Chip = styled.li`
   font-size: 1em;
   display: inline;
   text-align: center;
   background: ${colors.bgGris1};
   color: ${colors.bgGris4};
   box-shadow: 0px 2px 5px rgba(0,0,0,0.25);
   border-radius: 8px;
   padding: 2px 15px;
   margin: 0px 5px;
`

const Imagen = styled.div`
   border-radius: 10px;
   .imagen{
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.45);
      border-radius: 10px;
   }
   @media ${breackpoints.mobileS}{
      order: -1;
      flex: 1 0 100%;
      text-align: center;
      .imagen{
         width: 70%;
         height: auto;
         object-fit: cover;
      }
   }
   @media ${breackpoints.tablet}{
      order: 0;
      flex: 0 1 40%;
      .imagen{
         width: 100%
      }
   }
   @media ${breackpoints.desktop}{
      flex: 0 1 30%;
   }
`

const Content = styled.div`
   flex: 0 1 45%;
   padding: .2em .5em .5em .5em;
   text-align: center;
   p{
      text-align: justify;
      color: ${colors.bgGris2};
   }
   ul{ 
      display: block; 
      margin: 15px 0px;
   }
   @media ${breackpoints.mobileS}{
      flex: 1 0 90%;
      ${Title}{ margin: 10px 0px; }
   }
   @media ${breackpoints.tablet}{
      flex: 0 1 50%;
   }
`

const Background = styled.div`
   padding: 1.5em 0em;
   ${Container}{
      font-family: ${fonts.txtFamily1};
      display:flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      align-content: center;
   }
`

export default function Proyecto(props) {
   let { name } = useParams();
   
   let proyect = proyects[proyects.findIndex(x => x.link === name)]
   return (
      <Background>
         <Container>
            <Content>
               <Title> {proyect.titulo} </Title>
               <Details>
                  <a href={proyect.repositorio}><i className="fab fa-github"></i></a>
                  {proyect.estado? <span className="finish">Finalizado</span> : <span className="develop">En Desarrollo</span>} 
               </Details>
               <p> Lorem ipsum dolor sit amet consectetur adipiscing 
                  elit rutrum himenaeos ac gravida, facilisis diam 
                  auctor eu blandit eleifend quam vel elementum litora, 
                  quisque sociis venenatis hendrerit curae posuere 
                  proin accumsan integer dictum. Elementum interdum 
                  lacinia feugiat dignissim condimentum tincidunt 
                  inceptos massa nisl, fermentum sociosqu arcu hac 
                  augue nullam suscipit ante et, est imperdiet 
                  sagittis erat varius turpis aliquam quis. Dictum 
                  neque tristique nascetur conubia mauris interdum 
                  viverra lobortis facilisi libero venenatis, morbi 
                  praesent per rhoncus vulputate faucibus augue 
                  urna felis sagittis.
                  {proyect.descripcion} </p>
               <ul> {proyect.tecnologias.map( x=> <Chip key={x}>{x}</Chip> )} </ul>
            </Content>
            <Imagen>
               <img className="imagen" src={imagenPrueba} ></img>
            </Imagen>
         </Container>  
      </Background>
   );
}