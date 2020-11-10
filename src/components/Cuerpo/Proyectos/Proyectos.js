import React from "react"
import styled from "styled-components"

import TarjetaProyectos from "./TarjetaProyecto"
import proyects from "../../../data/proyects.json"
import {Text, Parrafo, Titulo, Container, fonts} from "../../../assets/styles"

const Background = styled.div`
  padding: 1.5em 0em;
  font-family: ${fonts.txtFamily1};
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
          <Titulo> REPOSITORIO </Titulo>
          <Parrafo>
            Por aca ire dejando mis trabajos realizados, con una breve
            descripción de mi labor, las tecnologías que use, unas imagenes y si
            en algunos casos una demo.
          </Parrafo>
        </Text>
        <Flex>
          {proyects.map((x) => (
            <TarjetaProyectos key={x.id} proyects={x}></TarjetaProyectos>
          ))}
        </Flex>
      </Container>
    </Background>
  )
}
