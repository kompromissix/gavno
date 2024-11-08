import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Circle from './Main/Circle/Circle.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Circle/>
      <Header/>
      <HashRouter>
        <App />
      </HashRouter>
  </StrictMode>,
)
