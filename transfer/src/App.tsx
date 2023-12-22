import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './pages/router'
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
