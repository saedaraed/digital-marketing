import './App.css';
import './index.css'
import { Link } from 'react-scroll'; 
import Herosection from './components/HeroSection'
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactMe from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Certificates from './components/Certificates';
function App() {

  return (
    <div className={`App bg-white dark:bg-custom-radial min-h-screen`} >
  
      {/* <Navbar /> */}
      <Herosection id="herosection"/>
      <About id="about" className="animate-fadeIn"/>
      <Services id="services"/>
      <Projects id="projects"/>
      <Certificates id="certificates"/>
      <ContactMe id="contact"  />
      <Footer id="footer"/>
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 md:block hidden">
        <Link to="herosection" smooth={true} duration={500} className="nav-dot" />
        <Link to="about" smooth={true} duration={500} className="nav-dot" />
        <Link to="services" smooth={true} duration={500} className="nav-dot" />
        <Link to="projects" smooth={true} duration={500} className="nav-dot" />
        <Link to="certificates" smooth={true} duration={500} className="nav-dot" />

        <Link to="contact" smooth={true} duration={500} className="nav-dot" />
      </div>
    </div>
  );
}

export default App;
