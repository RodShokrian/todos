import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';



const store = configureStore;
window.store = store;
window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  ReactDOM.render(<h1> Hello, React!</h1>, root);
});
