import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './Context/CartContextProvider.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="manass.us.auth0.com"
    clientId="WcOeA31hXilx6vMVOeMYYR1roLITzmYT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   
  
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
        </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
  </Auth0Provider>
  ,
)
