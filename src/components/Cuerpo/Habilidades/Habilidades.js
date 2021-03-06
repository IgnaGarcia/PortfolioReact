import React from "react";
import styled from "styled-components";
import { Zoom  } from 'react-reveal';

import SkillCard from "./SkillCard";
import { Text, Parrafo, Titulo, Container, colors, breackpoints } from "../../../assets/styles";

import skills from "../../../data/skills.json";

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${breackpoints.mobileS}{
    justify-content: center;
  }
  @media ${breackpoints.laptop}{
    justify-content: space-evenly;
  }
`

const Background = styled.div`
  padding: 3em 0em;
  margin: 1em auto;
  background: ${colors.detalle1Oscuro+"44"};
  ${Container} {
    padding: 1em 0em;
  }
`

export default function Habilidades() {
  function compare(a, b) {
    if (a.type < b.type) return -1;
    else if (a.type > b.type) return 1;
    else if (a.type === b.type) {
      if (a.level > b.level) return -1;
      else if (a.level < b.level) return 1;
      else return 0;
    }
  }
  skills.sort(compare);
  return (
    <Background id="Habilidades">
      <Container>
        <Zoom down duration={1500}>
          <Text>
            <Titulo>CON QUÉ TRABAJO?</Titulo>
            <Parrafo>
              Aqui podras ver las tecnologías y lenguajes que manejo, aclarando el
              nivel de experiencia de cada uno y el tiempo que paso desde mi
              primera interacción con tal
            </Parrafo>
          </Text>
        </Zoom >
        <Zoom down duration={2000}>
          <FlexBox>
            {skills.map((x) => (
              <SkillCard skill={x} key={x.name}></SkillCard>
            ))}
          </FlexBox>
        </Zoom >
      </Container>
    </Background>
  )
}
