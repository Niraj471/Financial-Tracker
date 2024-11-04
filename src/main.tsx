import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Toaster position='top-center' richColors/>
    </BrowserRouter>
  </StrictMode>,
)
