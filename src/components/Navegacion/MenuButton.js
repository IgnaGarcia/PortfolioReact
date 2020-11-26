import React from "react";
import styled from "styled-components";

import { colors, breackpoints } from "../../assets/styles";

const MenuButtonWrapper = styled.button`
  border: none;
  background: transparent;
  padding-left: 92%;
  font-size: 1.1em;
  outline: none;
  i{
    background: ${colors.detalle1};
    color: ${colors.bgGris1};
    border-radius: 100%;
    font-size: .9em;
    padding: .4em .4em .3em .4em;
  }

  @media ${breackpoints.laptop} {
    display: none;
  }
`;

function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <i className="fas fa-bars"></i>
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <i className="fas fa-times"></i>
    </MenuButtonWrapper>
  );
}

export default MenuButton;
