import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Infrastructure from './pages/Infrastructure';
// import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="/Infrastructure" element={<Infrastructure />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
