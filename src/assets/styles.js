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

export const breackpoints = {
   mobile: '0px',
   tablet: '576px',
   laptop: '768px',
   desktop: '992px'
}

export const Container = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: ${breackpoints.tablet}){
     max-width: '540px';
  };
  @media screen and (min-width: ${breackpoints.laptop}){
     max-width: '720px';
  };
  @media screen and (min-width: ${breackpoints.desktop}){
     max-width: '960px';
  };
`

export default {Container, colors, fonts, breackpoints}