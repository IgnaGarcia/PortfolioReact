import React, { useState }  from 'react';
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../../assets/styles';

import Navbar from "./Navbar";
import MenuButton from "./MenuButton";


const Contenedor = styled(Container)``

export default function Navegacion() {
   const [open, setOpen] = useState(false);

   const handleClick = () => {
     setOpen(!open);
   };

   const Navegacion = styled.div`
      background: ${colors.bgOscuro};
      font-family: ${fonts.txtFamily1};
      margin: 0em 0em 1em 0em;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   `

/*TO DO-----------------
-focus con transicion lenta
-click con ripple
-responsive para touchscreen
*/

	return (
      <Navegacion>
         <Contenedor>
            <MenuButton open={open} handleClick={handleClick}></MenuButton>
            <Navbar open={open}></Navbar>
            </Contenedor>
      </Navegacion>
	)
}