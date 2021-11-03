import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Dict} from "./Dict";
import reportWebVitals from './reportWebVitals';
import {Map} from "./Map";

ReactDOM.render(
  <React.StrictMode>
      <Map />
      <Dict />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();