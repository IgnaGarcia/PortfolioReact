import React from 'react';
import styled from 'styled-components';

import { Container, colors, fonts, breackpoints } from '../../assets/styles';
import { PuffIn } from '../../assets/animation'

const MiniDiv = styled.div`
   border-left: .25em solid ${colors.detalle1};
   padding: 0em .4em;
`
const StyledContainer = styled(Container)``

const StyledCabecera = styled.header`
   color: ${colors.txtBgOscuro};
   background: ${colors.bgOscuro};

	@media ${breackpoints.mobileS}{padding: 3em 0em};
   @media ${breackpoints.mobileL}{padding: 2.75em 0em};
   @media ${breackpoints.tablet}{padding: 3em 0em};
	@media ${breackpoints.laptop}{padding: 5em 0em};
	@media ${breackpoints.desktop}{padding: 8em 0em};
`

const H1 = styled.h1`
   color: ${colors.txtBgOscuro2};
	font-family: ${fonts.txtFamily2};
   text-shadow: 3px 4px rgba(245, 124, 0, 0.75);
   font-weight: 500;
	@media ${breackpoints.mobileS}{font-size: 4em};
	@media ${breackpoints.mobileM}{font-size: 3.75em};
	@media ${breackpoints.mobileL}{font-size: 3.5em};
   @media ${breackpoints.tablet}{font-size: 3.5em; display: inline;};
	@media ${breackpoints.laptop}{font-size: 4em; display: inline;};
	@media ${breackpoints.desktop}{font-size: 5em; display: inline;};
`

const H2 = styled.h2`
	color: ${colors.detalle1};
   font-family: ${fonts.txtFamily1};
   padding: .45em .1em;
   font-weight: 300;
   font-style: italic;
	@media ${breackpoints.mobileS}{font-size: 1.4em};
	@media ${breackpoints.mobileM}{font-size: 1.3em};
	@media ${breackpoints.mobileL}{font-size: 1.4em};
   @media ${breackpoints.tablet}{font-size: 1.2em};
	@media ${breackpoints.laptop}{font-size: 1.3em};
	@media ${breackpoints.desktop}{font-size: 1.6em};
`

export default function Cabecera() {
	return (
		<StyledCabecera>
			<StyledContainer>
				<MiniDiv>
					<H1 className='puffin'>IGNA</H1> <H1>GARCIA RAVLIC</H1>
					<H2>DESARROLLADOR</H2>
				</MiniDiv>
			</StyledContainer>
		</StyledCabecera>
	)
}