import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SubBar from './components/navbar/SubBar';
import Showcase from './components/showcase/Showcase';
import ToluExperience from './components/experience/ToluExperience';
import JosiahExperience from './components/experience/JosiahExperience';
import GridOne from './components/grid/GridOne';
import GridTwo from './components/grid/GridTwo';
import './App.css';
import Subfooter from './components/footer/Subfooter';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <SubBar />

      <div className='App'>
        <Showcase />
        <ToluExperience />
        <GridOne />
        <JosiahExperience />
        <GridTwo />
        <Subfooter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
