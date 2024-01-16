import React from 'react'
import ReactDOM from 'react-dom/client'
import Path from './Route.tsx'
import HeaderComp from './component/header-component.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderComp />
    <Path />
  </React.StrictMode>,
)
