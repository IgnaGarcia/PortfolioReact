import React from 'react';
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../../assets/styles';

export const MiniDiv = styled.div`
   border-left: .1em solid ${colors.detalle1};
   padding: .4em;
`
const StyledContainer = styled(Container)``

const StyledCabecera = styled.header`
   color: ${colors.txtBgOscuro};
   background: ${colors.bgOscuro};
   
   @media screen and (min-width: ${breackpoints.mobile}){
		padding: 2em;
	};
   @media screen and (min-width: ${breackpoints.tablet}){
		padding: 3em;
	};
	@media screen and (min-width: ${breackpoints.laptop}){
		padding: 5em;
	};
	@media screen and (min-width: ${breackpoints.desktop}){
		padding: 8em;
	};
`

const H1 = styled.h1`
   color: ${colors.detalle1};
   font-family: ${fonts.txtFamily2};
`;

const H2 = styled.h2`
   font-family: ${fonts.txtFamily1};
`;

export default function Cabecera() {
	return (
		<StyledCabecera>
			<StyledContainer>
				<MiniDiv>
					<H1>IGNA GARCIA RAVLIC</H1>
					<H2>DESARROLLADOR</H2>
				</MiniDiv>
			</StyledContainer>
		</StyledCabecera>
	)
}