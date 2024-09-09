import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styling/index.css';

// Font imports
import './assets/fonts/Gotham-Bold.otf';
import './assets/fonts/Gotham-Book.otf';
import './assets/fonts/Gotham-Light.otf';
import './assets/fonts/Gotham-Medium.otf';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
