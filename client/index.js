import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './scss/style.css';
//OLD
// import { render } from 'react-dom';
// render(<App />, document.getElementById('root'));

//NEW
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab='home' />);
