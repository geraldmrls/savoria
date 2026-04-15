import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { SwipeProvider } from './components/SwipeContext/SwipeContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SwipeProvider>
        <App />
      </SwipeProvider>
    </BrowserRouter>
  </StrictMode>,
)