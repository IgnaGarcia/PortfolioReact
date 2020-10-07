import React from 'react';
import styled from 'styled-components';

import { colors, fonts, breackpoints } from '../../../assets/styles';

const Form = styled.form`
   padding: 1em;
   @media ${breackpoints.mobileS}{
      
   };
	@media ${breackpoints.laptop}{
      
   };  
`

const Input = styled.input`
   margin: 1em;
`

export default function Formulario() {
	return (
      <Form>
            <Input></Input>
            <Input></Input>
      </Form>
	);
}