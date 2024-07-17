import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FruitsList from './FruitsList.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <FruitsList/>
  </React.StrictMode>,
)
