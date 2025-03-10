import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import NavBar from './components/navbar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Chamando o BrowserRouter */}
      <GlobalStyles /> {/* Importando os estilos globais */}
      <NavBar /> {/* Importando a barra de navegação */}
      <Router /> {/* Importando todas as rotas/páginas do site */}
      <Footer /> {/* Importando o rodapé */}
    </BrowserRouter> {/* Fechamento do BrowserRouter */}
  </StrictMode>,
)
