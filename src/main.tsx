import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApplicationsProvider } from './contexts/ApplicationsContext'
import { SidebarProvider } from './contexts/SidebarContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApplicationsProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ApplicationsProvider>
    </BrowserRouter>
  </StrictMode>,
)
