import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloMessage from './components/Hello';

ReactDOM.render(
    <HelloMessage />,
  document.getElementById('root')
);

module.hot.accept();

