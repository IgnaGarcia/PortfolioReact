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
   txtBgClaro: '#212121'
}

const size = {
   mobileS: '320px',
   mobileM: '375px',
   mobileL: '425px',
   tablet: '768px',
   laptop: '1024px',
   laptopL: '1440px',
   desktop: '2560px'
}

export const breackpoints = {
   mobileS: `(min-width: ${size.mobileS})`,
   mobileM: `(min-width: ${size.mobileM})`,
   mobileL: `(min-width: ${size.mobileL})`,
   tablet: `(min-width: ${size.tablet})`,
   laptop: `(min-width: ${size.laptop})`,
   laptopL: `(min-width: ${size.laptopL})`,
   desktop: `(min-width: ${size.desktop})`,
   desktopL: `(min-width: ${size.desktop})`
};

export const Container = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;

  @media ${breackpoints.tablet}{max-width: '540px'};
  @media ${breackpoints.tablet}{max-width: '720px'};
  @media ${breackpoints.tablet}{max-width: '960px'};
`

export default {Container, colors, fonts, breackpoints}