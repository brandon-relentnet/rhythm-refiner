import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Playlists from './components/Playlists';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Playlists />
      </div>
    </Provider>
  );
}

export default App;
