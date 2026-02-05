import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const originalPushState = window.history.pushState;
window.history.pushState = function(...args) {
  originalPushState.apply(window.history, args);
  window.dispatchEvent(new Event('pushstate'));
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

