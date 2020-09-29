import styled from 'styled-components';
import './styles.css';

const txtFamily1 = 'Ubuntu'
const txtFamily2 = 'Oswald'

const bgOscuro  = '#373737'
/*const bgClaro = ''

const detalle1 = ''
const detalleClaro = ''
const detalleOscuro = ''
*/
const txtBgOscuro = 'white'
//const txtBgClaro = ''


export const MiniDiv = styled.div`
   color: ${txtBgOscuro};
   background: ${bgOscuro};
   font-family: ${txtFamily2};
`
export const Container = styled.div`
   
`

export default {MiniDiv, Container}