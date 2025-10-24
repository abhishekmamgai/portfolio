import React from 'react'
import ReactDOM from 'react-dom/client'
import ViteConfig from './vite_config.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ViteConfig />  {/* this will handle API check + App rendering */}
  </React.StrictMode>,
)
