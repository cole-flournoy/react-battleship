import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import reducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension' 
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

const initState = {
  myShips: [], 
  compShips: [],
  compCanGuess: Array.from(Array(100), (x, i) => i + 1),
  compHasGuessed: [],
  myHits: [],
  compHits: [] 
}
const store = createStore(reducer, initState, composeWithDevTools())


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
