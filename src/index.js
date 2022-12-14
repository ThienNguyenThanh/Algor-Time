import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import SortingVisualizer from './components/SortingVisualizer';
import {AlgorDisplay} from './components/AlgorDisplay'
import {Controller} from './components/Controller'
import {Navbar} from './components/Navbar'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Controller />
    <AlgorDisplay />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
