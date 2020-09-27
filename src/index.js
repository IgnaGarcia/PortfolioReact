import React from 'react';
import ReactDOM from 'react-dom';

import Cabecera from './components/Cabecera/Cabecera';
import Cuerpo from './components/Cuerpo/Cuerpo';
import Pie from './components/Pie/Pie';

ReactDOM.render(
  <React.StrictMode>
    <Cabecera />
    <Cuerpo /> 
    <Pie />
  </React.StrictMode>,
  document.getElementById('root')
);