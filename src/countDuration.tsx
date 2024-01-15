import React from 'react'
import ReactDOM from 'react-dom/client'
import CountDuration from './count-duration/CountDuration.tsx'
import HeaderComp from './component/header-component.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderComp />
    <CountDuration />
  </React.StrictMode>,
)