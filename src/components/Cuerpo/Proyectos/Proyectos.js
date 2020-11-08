import React from "react";
import styled from "styled-components";

import TarjetaProyectos from "./TarjetaProyecto";
import proyects from "../../../data/proyects.json";
import { Container, fonts } from "../../../assets/styles";

const Background = styled.div`
  padding: 1.5em 0em;
  font-family: ${fonts.txtFamily1};
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Proyectos() {
  return (
    <Background>
      <Container>
        <Flex>
          {proyects.map((x) => (
            <TarjetaProyectos key={x.id} proyects={x}></TarjetaProyectos>
          ))}
        </Flex>
      </Container>
    </Background>
  );
}
