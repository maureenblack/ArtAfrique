import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

declare global {
  interface Window {
    document: Document;
  }
}

const rootElement = window.document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
