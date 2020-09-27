import React from 'react';
import ReactDOM from 'react-dom';
import Cabecera from './components/Cabecera';
import Cuerpo from './components/Cuerpo';
import Pie from './components/Pie';

ReactDOM.render(
  <React.StrictMode>
    <Cabecera />
    <Cuerpo /> 
    <Pie />
  </React.StrictMode>,
  document.getElementById('root')
);