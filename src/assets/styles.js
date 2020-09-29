import styled from 'styled-components';
import './fuente.css';

export const fonts = {
   txtFamily1: 'Ubuntu',
   txtFamily2: 'Oswald'
}

export const colors = {
   bgOscuro : '#373737',
   bgClaro: '#eeeeee',
   detalle1: '#e64a19',
   detalle1Claro: '#ff7043',
   detalle1Oscuro: '#d84315',
   txtBgOscuro: '#f5f5f5',
   txtBgClaro: '#212121'
}

export const breackpoints = {
   mobile: '0px',
   tablet: '576px',
   laptop: '768px',
   desktop: '992px',
   full: '1200px'
}

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${breackpoints.tablet}){
     max-width: '540px';
  };
  @media (min-width: ${breackpoints.laptop}){
     max-width: '720px';
  };
  @media (min-width: ${breackpoints.desktop}){
     max-width: '960px';
  };
  @media (min-width: ${breackpoints.full}){
     max-width: '1140px';
  };
`

export default {Container, colors, fonts}