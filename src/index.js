import React from 'react';
import ReactDOM from 'react-dom/client';
import './views/pages/css/index.css';
import {BrowserRouter} from 'react-router-dom';
import Tela from './views/Tela';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Tela/>
  </BrowserRouter>
);



