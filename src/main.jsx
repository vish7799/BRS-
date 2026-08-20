import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// HashRouter keeps every route reachable on static hosting without
// server-side rewrite rules. To use clean URLs on Vercel/Netlify, swap to
// BrowserRouter and add an SPA fallback rewrite (/* -> /index.html).
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
