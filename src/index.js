import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import App from './App';
import './index.css';
import reducer from "./reducers/index";

const store = configureStore({reducer})

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider >
);
