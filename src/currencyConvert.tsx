import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComp from './component/header-component.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyConvert from './main-content/CurrencyConvert.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderComp />
    <CurrencyConvert />
  </React.StrictMode>,
)