import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HashRouter>
        <Header/>
        <App />
      </HashRouter>
      <Footer/>
  </StrictMode>,
)
