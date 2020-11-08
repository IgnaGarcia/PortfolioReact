import React from "react";
import styled from "styled-components";

import { colors, breackpoints } from "../../assets/styles";

const MenuButtonWrapper = styled.button`
  border: none;
  background: transparent;
  padding-left: 95%;
  font-size: 1.1em;
  color: ${colors.detalle1};
  outline: none;

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
