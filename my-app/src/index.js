import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import userReducer from '../src/reducers/userReducer';
import { createStore, applyMiddleware, compose } from 'redux'

const middleware = [thunk]

const store = createStore(
  userReducer,
  {},
  compose(
    
    applyMiddleware(thunk)
  )

)

// const store = createStore(
//     userReducer,
//     compose(
//     applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
  
    

ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>,
 document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
