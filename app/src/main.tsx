import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/globals.css';
import AppRoutes from './routes.tsx';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <AppRoutes />
  </React.StrictMode>
);
