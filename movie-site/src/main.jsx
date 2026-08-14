import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{BroswerRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BroswerRouter>// give the ability to use the router in the app, it is a wrapper component that wraps the entire application and provides the routing functionality to all the components inside it.

      <App />
    </BroswerRouter>
    
  </StrictMode>,
)
 