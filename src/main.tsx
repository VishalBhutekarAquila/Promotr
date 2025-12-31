// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { MantineProvider } from '@mantine/core';
import MantineWrapper from './MantineWrapper';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <MantineProvider
      {...({ withGlobalStyles: true, withNormalizeCSS: true } as any)}
    > */}
    <MantineWrapper>
      <App />
    </MantineWrapper>
    {/* </MantineProvider> */}
  </React.StrictMode>
);
