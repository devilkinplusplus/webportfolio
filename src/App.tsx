import React from 'react';
import './App.css'
import Header from './components/layout/header';
import Home from './components/home';
import Projects from './components/projects';
import Skills from './components/skills';
import About from './components/about';
import Footer from './components/layout/footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </>
  );
}

export default App;
