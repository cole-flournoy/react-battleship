import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import reducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension' 

const initState = {}
const store = createStore(reducer, initState, composeWithDevTools())


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
