import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import {breackpoints, colors} from "../../../assets/styles";

const Imagen = styled.div`
    .imagen {
        border-radius: 10px 10px 0px 0px;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Background = styled.div`
    background: ${colors.detalle1Oscuro + "cc"};
    border-radius: 10px;
    border: 1px solid ${colors.bgClaro};
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.25);
    @media ${breackpoints.mobileS} {
        flex: 0 1 70%;
        margin: 0.8em;
        ${Imagen} {
            height: 230px;
            margin-bottom: 0.3em;
        }
    }
    @media ${breackpoints.tablet} {
        flex: 0 0 35%;
        ${Imagen} {
            height: 200px;
            margin-bottom: 0.5em;
        }
        min-width: 190px;
    }
    @media ${breackpoints.laptop} {
        flex: 0 0 25%;
        min-width: 210px;
    }
    @media ${breackpoints.desktop} {
        flex: 0 0 18%;
    }
    a {
        color: ${colors.txtBgClaro2};
    }
    cursor: pointer;
    :hover {
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.35);
    }
`;

const Content = styled.div`
    padding: 0.2em 0.5em 0.5em 0.5em;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
        font-size: 1em;
        font-weight: bold;
    }
    ul {
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 10px 0px 5px 0px;
        li {
            font-size: 0.8em;
            display: inline;
            text-align: center;
            background: ${colors.bgGris1};
            color: ${colors.bgGris4};
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
            padding: 2.5px 15px;
            margin: 3px;
        }
    }
`;

export default function TarjetaProyectos(prop) {
    let proyects = prop.proyects;

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <Background>
            <NavLink
                exact
                strict
                to={"/Proyectos/" + proyects.link}
                onClick={scrollTop}>
                <Imagen>
                    <img
                        className='imagen'
                        loading='lazy'
                        alt={proyects.titulo}
                        src={"/img" + proyects.portada}></img>
                </Imagen>
                <Content>
                    <h3> {proyects.titulo} </h3>
                    <ul>
                        {proyects.tecnologias.map((x) => (
                            <li key={x}>{x}</li>
                        ))}
                    </ul>
                </Content>
            </NavLink>
        </Background>
    );
}
