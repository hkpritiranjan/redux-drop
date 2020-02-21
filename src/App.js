import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import PostPage from './PostPage';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostPage></PostPage>
      </div>
    </Provider>
  );
}

export default App;
