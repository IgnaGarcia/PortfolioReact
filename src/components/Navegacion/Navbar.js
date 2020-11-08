import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors, breackpoints } from "../../assets/styles";

const Nav = styled.nav`
  a {
    flex-grow: 1;
    text-align: center;
    padding: 0.4em 0em;
    color: ${colors.detalle1};
    transition: background-color 0.5s, color 0.5s;
    :hover {
      color: ${colors.detalle1Claro};
      background: ${colors.bgGris1};
    }
  }
  .is-active {
    color: ${colors.txtBgClaro2};
    background: ${colors.detalle1};
    :hover {
      color: ${colors.txtBgClaro};
      background: ${colors.detalle1Oscuro};
    }
  }
  i {
    padding: 0em 0.7em;
  }

  @media ${breackpoints.mobileS} {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    a {
      display: flex;

      i {
        flex: 1 0 30%;
      }
      span {
        text-align: left;
        flex: 2 0 70%;
      }
    }
  }
  @media ${breackpoints.laptop} {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  justify-content: space-around;
`;

function Navbar({ open, handleClick }) {
  return (
    <Nav open={open}>
      <NavLink
        exact
        strict
        activeClassName="is-active"
        to="/"
        onClick={handleClick}
      >
        <i className="fas fa-address-book"></i>
        <span>Inicio</span>
      </NavLink>
      <NavLink
        exact
        strict
        activeClassName="is-active"
        to="/Trayectoria"
        onClick={handleClick}
      >
        <i className="fas fa-project-diagram"></i>
        <span>Trayectoria</span>
      </NavLink>
      <NavLink
        exact
        strict
        activeClassName="is-active"
        to="/Habilidades"
        onClick={handleClick}
      >
        <i className="fas fa-brain"></i>
        <span>Habilidades</span>
      </NavLink>
      <NavLink
        exact
        strict
        activeClassName="is-active"
        to="/Proyectos"
        onClick={handleClick}
      >
        <i className="fas fa-folder-open"></i>
        <span>Proyectos</span>
      </NavLink>
      <NavLink
        exact
        strict
        activeClassName="is-active"
        to="/Contacto"
        onClick={handleClick}
      >
        <i className="fas fa-comments"></i>
        <span>Contacto</span>
      </NavLink>
    </Nav>
  );
}

export default Navbar;
