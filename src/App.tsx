import React from 'react';
import RepositoryList from './components/RepositoryList';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RepositoryList />
      </div>
    </Provider>
  );
}

export default App;
