import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SubBar from './components/navbar/SubBar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <SubBar />

      <div className='App'></div>
    </Router>
  );
}

export default App;
