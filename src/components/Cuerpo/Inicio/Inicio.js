import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Rotate } from 'react-reveal';

import { Titulo, Container, breackpoints, colors, fonts, Parrafo } from "../../../assets/styles";

const Content = styled.div`
  padding: .2em .5em .5em .5em;
  text-align: center;
  ${Parrafo}{
    text-align: justify;
  }
  @media ${breackpoints.mobileS}{
    flex: 1 0 70%;
    a{
      margin: 1em .3em 0em .3em;
      padding: .5em .7em;
    }
  }
  @media ${breackpoints.laptop}{
    flex: 0 1 50%;
  }
  @media ${breackpoints.desktop}{
    a{
      margin: 1.4em 1.2em 0em 1.2em;
    }
  }
  a{
    color: ${colors.bgGris1};
    font-weight: lighter;
    background: ${colors.detalle1};
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0,0,0,.25);
    display: inline-block;
    :hover{
        background: ${colors.detalle1Oscuro};
        color: ${colors.bgOscuro};
        box-shadow: 0px 2px 6px rgba(0,0,0,.35);
    }
  }
`

const Imagen = styled.div`
  border-radius: 100%;
  .imagen {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.85);
    border-radius: 100%;
    object-fit: cover;
    object-position: center center ;
    width: 100%;
    height: 100%;
  }
  @media ${breackpoints.mobileS} {
    width: 250px;
    height: 250px;
    margin-bottom: 1.4em;
    order: -1;
  }
  @media ${breackpoints.tablet}{
    width: 300px;
    height: 300px;
    display: block;
  }
  @media ${breackpoints.laptop} {
    width: 270px;
    height: 270px;
    order: 0;
  }
`

const Background = styled.div`
  padding: 4em 0em;
  ${Container} {
    font-family: ${fonts.txtFamily1};
    display: flex;
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
          <Rotate bottom left duration={1500} delay={2000}>
            <Titulo>BIENVENID@!</Titulo>
            <Parrafo>
              Soy estudiante de la Universidad Nacional del Oeste de la carrera de
              Informática, con casi un 50% de materias aprobadas. <br />
              Tengo 21 años y soy un apasionado del desarrollo de software y de la ciencia
              en general, pasion que se transforma en voluntad para crecer en este
              campo y hacerlo de la mejor manera posible.
            </Parrafo>
            <Parrafo>
              Puedes ver trayectoria profesional y acadéemica, o mis trabajos realizados
              en los siguientes links.
            </Parrafo>
            <div>
              <NavLink exact strict to={"/Trayectoria"}> Mi Trayectoria </NavLink>
              <NavLink exact strict to={"/Proyectos"}> Mis Proyectos </NavLink>
            </div>
          </Rotate>
        </Content>
        <Imagen>
          <Rotate bottom right duration={1500} delay={1500}>
            <img className="imagen" alt="Igna Garcia" src={'/img/Igna Garcia (1).jpeg'}></img>
          </Rotate>
        </Imagen>
        
      </Container>
    </Background>
  );
}
