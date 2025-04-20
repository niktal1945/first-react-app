import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let root = document.getElementById('nikhil')
createRoot(root)
.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
