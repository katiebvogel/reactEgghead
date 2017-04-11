import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SecondApp from './SecondApp';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

ReactDOM.render(
  <SecondApp/>,
  document.getElementById('second')
);
