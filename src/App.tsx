import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './ui/components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
        <h3>Breeze</h3>
    </div>
  );
}

export default App;
