import React from "react"
import styled from "styled-components"

import {
  Text,
  Parrafo,
  Titulo,
  Container,
  fonts,
  colors,
  breackpoints
} from "../../../assets/styles"
import social from "../../../data/socialmed.json"
import Formulario from "./Formulario"

const Background = styled.div`
  padding: 3em 0em;
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
  background-color: ${colors.bgOscuro + "dd"};
  box-shadow: 4px 6px 8px rgba(20, 20, 20, 0.5);
  border-radius: 10px;
  a {
    display: flex;
    padding: 0.5em;
    color: ${colors.txtBgOscuro2};
    transition: color 0.5s;
    width: 70%;
    i {
      flex: 1 0 30%;
      transition: color 0.5s;
      color: ${colors.txtBgOscuro2};
    }
    span {
      text-align: left;
      flex: 2 0 70%;
    }
    :hover {
      color: ${colors.detalle1};
      i {
        color: ${colors.detalle1};
      }
    }
  }
  @media ${breackpoints.mobileS} {
    font-size: 1em;
    flex-flow: row wrap;
    a {
      flex: 1 0 30%;
      i {
        font-size: 1.2em;
      }
    }
    padding: 1.5em 1em 1.5em 1em;
    border-left: none;
  }
  @media ${breackpoints.laptop} {
    font-size: 1.2em;
    flex: 0 1 20%;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    text-align: left;
    a {
      flex: 0;
      display: flex;

      i {
        flex: 1 0 30%;
      }
      span {
        text-align: left;
        flex: 2 0 70%;
      }
    }
    padding: 1em 2em;
    border-top: none;
  }
  @media ${breackpoints.desktop} {
    font-size: 1.3em;
    flex: 0 1 15%;
  } ;
`

export default function Contacto() {
  let redes = []
  for (let i = 0; i < 6; i++) {
    redes[i] = (
      <a key={social[i].id + " " + social[i].name} href={social[i].url}>
        <i className={social[i].icon}></i>
        <span>{social[i].name}</span>
      </a>
    )
  }

  return (
    <Background>
      <a name="/Contacto"></a>
      <Container>
        <Text>
          <Titulo>CHARLEMOS</Titulo>
          <Parrafo>
            Me puedes contactar rellenando el siguiente formulario, o
            siguiéndome en mis redes
          </Parrafo>
        </Text>
        <FlexDiv>
          <Formulario></Formulario>
          <Hijo>{redes.map((x) => x)}</Hijo>
        </FlexDiv>
      </Container>
    </Background>
  )
}
