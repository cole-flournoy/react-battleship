import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension' 
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import thunk from 'redux-thunk'

const initState = {
  myShips: [], 
  compShips: [],
  compCanGuess: Array.from(Array(100), (x, i) => i + 1),
  compHasGuessed: [],
  myHits: [],
  compHits: [] 
}
const store = createStore(reducer, initState, compose(applyMiddleware(thunk), composeWithDevTools()))


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
