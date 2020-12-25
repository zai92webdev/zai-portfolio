import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import MyWorks from './components/MyWorks'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <MyWorks />
      <Contact />
    </div>
  );
}

export default App;
