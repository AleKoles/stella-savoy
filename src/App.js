import React from 'react';
import About from './components/About';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import ChartCards from  './components/ChartCards';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ChartCards />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
