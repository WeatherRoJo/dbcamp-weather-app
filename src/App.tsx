import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './ui/components/surfaces/Header';
import Footer from './ui/components/surfaces/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
        <h3>Breeze</h3>
      <Footer/>
    </div>
  );
}

export default App;
