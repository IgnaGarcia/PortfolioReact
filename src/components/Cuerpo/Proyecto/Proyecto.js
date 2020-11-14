import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";

import { Parrafo, Titulo, Container, breackpoints, colors, fonts } from "../../../assets/styles";
import proyects from "../../../data/proyects.json";

const Details = styled.div`
  margin: 15px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  i {
    font-size: 2em;
    color: ${colors.bgGris1};
    :hover {
      color: ${colors.detalle1};
    }
  }
  .finish {
    color: rgb(100, 200, 105);
    font-size: 1.2em;
  }
  .develop {
    color: rgb(200, 100, 105);
    font-size: 1.2em;
  }
`;

const Chip = styled.li`
  font-size: 1em;
  display: inline;
  text-align: center;
  background: ${colors.bgGris1};
  color: ${colors.bgGris4};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 2px 15px;
  margin: 0px 5px;
`;

const Imagen = styled.div`
  border-radius: 10px;
  .imagen {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.45);
    border-radius: 10px;
  }
  @media ${breackpoints.mobileS} {
    order: -1;
    flex: 1 0 100%;
    text-align: center;
    .imagen {
      width: 70%;
      height: auto;
      object-fit: cover;
    }
  }
  @media ${breackpoints.tablet}{
    flex: 1 0 80%;
  }
  @media ${breackpoints.laptop} {
    order: 0;
    flex: 0 1 45%;
    .imagen {
      width: 100%;
    }
  }
  @media ${breackpoints.desktop} {
    flex: 0 1 35%;
  }
`;

const Content = styled.div`
  flex: 0 1 45%;
  padding: 0.2em 0.5em 0.5em 0.5em;
  text-align: center;
  ${Parrafo} {
    text-align: justify;
  }
  ul {
    display: block;
    margin: 15px 0px;
  }
  @media ${breackpoints.mobileS} {
    flex: 1 0 90%;
    ${Titulo} {
      margin: 10px 0px;
    }
  }
  @media ${breackpoints.laptop} {
    flex: 0 1 40%;
  }
  @media ${breackpoints.desktop}{
    flex: 0 1 55%;
  }
`;

const Background = styled.div`
  padding: 1.5em 0em;
  ${Container} {
    font-family: ${fonts.txtFamily1};
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
  }
`;

export default function Proyecto(props) {
  let { name } = useParams();

  let proyect = proyects[proyects.findIndex((x) => x.link === name)];
  return (
    <Background>
      <Container>
        <Content>
          <Titulo> {proyect.titulo} </Titulo>
          <Details>
            <a href={proyect.repositorio}>
              <i className="fab fa-github"></i>
            </a>
            {proyect.estado ? (
              <span className="finish">Finalizado</span>
            ) : (
              <span className="develop">En Desarrollo</span>
            )}
          </Details>
          <Parrafo>
            {proyect.descripcion}
          </Parrafo>
          <ul>
            {" "}
            {proyect.tecnologias.map((x) => (
              <Chip key={x}>{x}</Chip>
            ))}{" "}
          </ul>
        </Content>
        <Imagen>
          <img className="imagen" alt={proyect.titulo} src="img.png"/*{proyect.portada}*/></img>
        </Imagen>
      </Container>
    </Background>
  );
}
