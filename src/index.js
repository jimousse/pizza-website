import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PizzaApp from './components/PizzaApp';

ReactDOM.render(
    <PizzaApp />,
  document.getElementById('root')
);

module.hot.accept();

