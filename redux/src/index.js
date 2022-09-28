import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
const intialState = 0

const reducer = (state = intialState, action) =>{
  switch (action.type){
    case "increment":
      return state + 1;
    default:
      return state
  }
}

const state = createStore(reducer);
state.dispatch({type: 'increment'})
console.log(state.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);
