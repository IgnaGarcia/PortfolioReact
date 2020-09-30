import styled from 'styled-components';
import './fuente.css';

export const fonts = {
   txtFamily1: 'Ubuntu',
   txtFamily2: 'Oswald'
}

export const colors = {
   bgOscuro : '#373737',
   bgClaro: '#eeeeee',
   detalle1: '#fb8c00',
   /*verde 43a047 
   verde agua 00acc1
   azul 039be5
   naranja fb8c00
   */
   detalle1Claro: '#ff7043',
   detalle1Oscuro: '#d84315',
   txtBgOscuro: '#f5f5f5',
   txtBgOscuro2: '#e0e0e0',
   txtBgClaro: '#212121',
   txtBgClaro2: '#424242',
}

const size = {
   mobileS: '0px',
   mobileM: '321px',
   mobileL: '376px',
   tablet: '426px',
   laptop: '769px',
   desktop: '1025px',
   desktopL: '1441px',
}

export const breackpoints = {
   mobileS: `(min-width: ${size.mobileS})`,
   mobileM: `(min-width: ${size.mobileM})`,
   mobileL: `(min-width: ${size.mobileL})`,
   tablet: `(min-width: ${size.tablet})`,
   laptop: `(min-width: ${size.laptop})`,
   desktop: `(min-width: ${size.desktop})`,
   desktopL: `(min-width: ${size.desktopL})`
};

export const Container = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;

  @media ${breackpoints.mobileM}{max-width: '360px'};
  @media ${breackpoints.mobileL}{max-width: '400px'};
  @media ${breackpoints.tablet}{max-width: '720px'};
  @media ${breackpoints.laptop}{max-width: '960px'};
  @media ${breackpoints.desktop}{max-width: '1280px'};
`

export default {Container, colors, fonts, breackpoints}