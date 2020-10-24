import React, { useState }  from 'react';
import styled from 'styled-components';

import { Container, colors, fonts } from '../../assets/styles';

import Navbar from "./Navbar";
import MenuButton from "./MenuButton";

const Nav = styled.div`
   position: relative;
   z-index: 3;
   background: ${colors.bgOscuro};
   font-family: ${fonts.txtFamily1};
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Contenedor = styled(Container)``

export default function Navegacion() {
   const [open, setOpen] = useState(false);

   const handleClick = () => {
     setOpen(!open);
   };

/*TO DO-----------------
-focus con transicion lenta
-click con ripple
-responsive para touchscreen
*/

	return (
      <Nav>
         <Contenedor>
            <MenuButton open={open} handleClick={handleClick}></MenuButton>
            <Navbar open={open}></Navbar>
         </Contenedor>
      </Nav>
	)
}