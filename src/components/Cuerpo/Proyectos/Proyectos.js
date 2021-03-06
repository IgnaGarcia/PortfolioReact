import React from "react"
import styled from "styled-components"
import { Flip, Bounce } from "react-reveal"

import TarjetaProyectos from "./TarjetaProyecto"
import proyects from "../../../data/proyects.json"
import {Text, Parrafo, Titulo, Container, fonts, colors} from "../../../assets/styles"

const Background = styled.div`
  padding: 1.5em 0em;
  font-family: ${fonts.txtFamily1};
  #githubA{
    color: ${colors.detalle1};
    i{
      font-size: 1.2em;
    }
  }
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export default function Proyectos() {
  return (
    <Background>
      <Container>
        <Text>
          <Flip top duration={2000}>
            <Titulo> REPOSITORIO </Titulo>
            <Parrafo>
              Por aca ire dejando mis trabajos realizados, con una breve
              descripción de mi labor, las tecnologías que use, unas imagenes y si
              en algunos casos una demo.
            </Parrafo>
            <Parrafo> Puedes encontrar mas de mis trabajos en mi 
              <a id="githubA" href="https://github.com/IgnaGarcia" rel="noreferrer" target="_blank"> GitHub <i className="fab fa-github"></i></a>
            </Parrafo>
          </Flip>
        </Text>
        <Bounce duration={2000} delay={500}>
        <Flex>
          {proyects.map((x) => (
            <TarjetaProyectos key={x.id} proyects={x}></TarjetaProyectos>
          ))}
        </Flex>
        </Bounce>
      </Container>
    </Background>
  )
}
