import React from "react";
import styled from "styled-components";

import { fonts, colors, breackpoints } from "../../../assets/styles";

const Card = styled.div`
  display: flex;
  border-radius: 0.5em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid white;
  background: ${colors.bgGris4};
  margin: 0.4em;
  font-family: ${fonts.txtFamily1};
  @media ${breackpoints.mobileS} {
    flex-direction: column;
    flex: 1 0 30%;
    align-items: stretch;
    .icono {
      flex: 0 0 auto;
      border-radius: 0.2em 0.2em 0 0;
    }
  }
  @media ${breackpoints.tablet} {
    flex: 1 0 20%;
    max-width: 295px;
  }
  @media ${breackpoints.laptop} {
    flex-direction: row;
    align-items: center;
    flex: 1 0 30%;
    max-width: 260px;
    .icono {
      flex: 0 0 25%;
      border-radius: 0.2em 0 0 0.2em;
    }
  }

  .icono {
    font-size: 2.5em;
    text-align: center;
    padding: 8px 5px 5px 5px;
    align-self: stretch;
    color: ${colors.bgGris1};
    background: ${colors.detalle1};
  }
`;

const Content = styled.div`
  background: ${colors.bgGris1};
  color: ${colors.detalle1};
  padding: 5px;
  @media ${breackpoints.mobileS} {
    border-radius: 0 0 0.5em 0.5em;
    text-align: center;
    flex: 0 0 auto;
  }
  @media ${breackpoints.laptop} {
    border-radius: 0 0.5em 0.5em 0;
    text-align: left;
    flex: 1 0 auto;
  }
  .titulo {
    font-weight: bold;
    opacity: 0.95;
  }
  .nivel {
    opacity: 0.85;
  }
  .exp {
    opacity: 0.75;
    font-size: 0.9em;
  }
`;

export default function SkillCard(props) {
  const skill = props.skill;
  const currentTime = new Date();
  const experience = function (level) {
    if (level === 0) return "Principiante";
    else if (level === 1) return "Avanzado";
    else return "Experimentado";
  };

  return (
    <Card>
      <div className="icono">
        <i className={skill.icon}></i>
      </div>
      <Content>
        <div className="titulo"> {skill.name} </div>
        <div className="nivel"> {experience(skill.level)} </div>
        <div className="exp">
          {" "}
          {currentTime.getFullYear() - skill.years + 1} años de uso
        </div>
      </Content>
    </Card>
  );
}
