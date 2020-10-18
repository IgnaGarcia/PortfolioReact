import React from 'react';
import styled from 'styled-components';

import { colors, fonts, breackpoints } from '../../../assets/styles';

const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
   
   padding: 1em;
   @media ${breackpoints.mobileS}{
      
   };
	@media ${breackpoints.laptop}{
      
   };  
`

const Input = styled.input`
   margin: .5em;
   width: 40%
`

export default function Formulario() {
	return (
      <Form>
            <Input placeholder="Su nombre"></Input>
            <Input type="email" placeholder="Su correo"></Input>
            <Input placeholder="El asunto"></Input>
            <Input placeholder="Su mensaje"></Input>
      </Form>
	);
}