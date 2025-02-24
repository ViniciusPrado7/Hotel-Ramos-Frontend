import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import NavBar from './components/navbar/NavBar.jsx'
import Footeer from './components/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GlobalStyles />
    <NavBar />
    <Router />
    <Footeer />
    </BrowserRouter>
  </StrictMode>,
)
