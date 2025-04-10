import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Products from './sections/Products';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;