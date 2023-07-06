import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { MovieProvider } from './MyContext/MyContext.jsx';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <MovieProvider>
     
    <App />
  
  </MovieProvider>
 </BrowserRouter>
 
)
