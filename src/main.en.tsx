import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { en } from './data/en'

// 英語版トップ（en/index.html）の入口。日本語版は main.tsx。
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App content={en} />
  </StrictMode>,
)
