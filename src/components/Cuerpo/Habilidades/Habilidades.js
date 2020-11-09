import React from "react";
import styled from "styled-components";

import SkillCard from "./SkillCard";
import { Parrafo, Titulo, Container, colors, breackpoints, fonts } from "../../../assets/styles";

import skills from "../../../data/skills.json";

const Background = styled.div`
  padding: 3em 0em;
  margin: 1em auto;
  background: ${colors.detalle1Oscuro+"44"};
  ${Container} {
    padding: 1em 0em;
    display: flex;
    flex-wrap: wrap;
    @media ${breackpoints.mobileS} {
      justify-content: center;
    }
  }
`;

const Text = styled.div`
  text-align: center;
  margin: 0.5em;
  flex: 2 0 100%;
  max-width: 80%;
`;

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
    <Background>
      <a name="/Habilidades"></a>
      <Container>
        <Text>
          <Titulo>CON QUE TRABAJO?</Titulo>
          <Parrafo>
            Aqui podras ver las tecnologias y lenguajes que manejo, aclarando el
            nivel de experiencia de cada uno y el tiempo que paso desde mi
            primera interaccion con tal
          </Parrafo>
        </Text>
        {skills.map((x) => (
          <SkillCard skill={x} key={x.name}></SkillCard>
        ))}
      </Container>
    </Background>
  );
}
