import React from "react";
import styled from "styled-components";

import { breackpoints, colors } from "../../../assets/styles";

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
      width: 85%;
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

const Dots = styled.div`

`;

const CarouselContainer = styled.div`

`;

export default function Proyecto(prop) {
  let proyect = prop.proyect;

  return (
      <CarouselContainer>
        <Imagen>
          {proyect.image}
          <a rel="noreferrer" href={'/img' + proyect.portada} target="_blank">
            <Slide right>
              <img className="imagen" loading="lazy" alt={proyect.titulo} src={'/img' + proyect.portada}></img>
            </Slide>
          </a>
        </Imagen>

        <Dots>

        </Dots>
      </CarouselContainer>
  );
}