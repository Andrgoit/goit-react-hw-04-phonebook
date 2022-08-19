import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import './index.css';

const theme = {
  colors: {
    white: '#fff',
    title: 'red',
    text: '#000',
    value: 'red',
    primaryButton: '#07c',
    secondaryButton: '#05a',
    background: '#fff',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    title: 'Roboto',
    button: '',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    l: 32,
    xl: 64,
  },
  fontWights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    title: 1.5,
    button: 1.2,
    text: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: 'none',
    button: '3px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
