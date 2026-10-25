import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ja } from './data/ja'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App content={ja} />
  </StrictMode>,
)
