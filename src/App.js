import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer'
import './index.css';
import store from './store';

function App() {
  return (
    <div className="App">
     <Provider store={ store }>
        <Main ></Main>
    </Provider>
    </div>
  );
}

export default App;



 