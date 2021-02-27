import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import { breackpoints, colors } from "../../../assets/styles";

const Imagen = styled.div`
  border-radius: 10px;
  transition: opacity 0.5s linear; 
  .imagen {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.45);
    border-radius: 10px;
  }
`;

const ImageContainer = styled.div`
  flex: 1 0 90%;
  border-radius: 10px;
`;

const Dots = styled.div`
  flex: 1 0 10%;
  display: block;
`;

const Dot = styled.div`
  border-radius: 50%;
  padding: 5.6px;
  margin: 12px 6px;
  display: inline-block;
  border: 3.2px solid ${colors.bgGris3};
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  @media ${breackpoints.mobileS} {
    order: -1;
    flex: 1 0 100%;
    .imagen {
      width: 85%;
      object-fit: cover;
    }
  }
  @media ${breackpoints.tablet}{
    flex: 1 0 80%;
  }
  @media ${breackpoints.laptop} {
    order: 0;
    flex: 0 1 40%;
    .imagen {
      width: 100%;
    }
  }
  @media ${breackpoints.desktop} {
    flex: 0 1 35%;
  }
`;

export default function Carousel(prop) {
  let proyect = prop.proyect;
  let [ indx, setIndx ] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() { if(timeoutRef.current) clearTimeout(timeoutRef.current) }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setIndx((prevIndex) =>
        prevIndex === proyect.images.length - 1 ? 0 : prevIndex + 1
      ), 3000);

    return () => resetTimeout();
  }, [indx]);

  return (
      <CarouselContainer>
        <ImageContainer>
          {proyect.images.map((image, index) => 
              <Imagen key={index} style={ index === indx ? {opacity: "1"} : {opacity: "0"} }>
                <a rel="noreferrer" href={'/img' + image} target="_blank">
                    <img className="imagen" loading="lazy" alt={proyect.titulo} src={'/img' + image} style={ index === indx ? {height: "auto"} : {height: "0"} }></img>
                </a>
              </Imagen>
          )}
        </ImageContainer>        

        <Dots>
          {proyect.images.map((__image, index) => 
            <Dot key={index} style={{ background: index === indx ? colors.detalle1Claro : colors.bgGris1 }} onClick={() => setIndx(index)}/>
          )}
        </Dots>
      </CarouselContainer>
  );
}