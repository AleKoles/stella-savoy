import React from 'react';
import About from './components/About';
import Companies from './components/Companies';
import FOP from './components/FOP';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ChartCards from  './components/ChartCards';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FOP />
      <ChartCards />
      <Companies /> 
      <Footer />
    </div>
  );
}

export default App;
