import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComp from './component/header-component.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CountDuration from './main-content/CountDuration.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderComp />
    <CountDuration />
  </React.StrictMode>,
)