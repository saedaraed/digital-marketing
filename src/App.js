import './App.css';
import './index.css'
import Herosection from './components/HeroSection'
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ContactMe from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App bg-custom-dark">

      {/* <Navbar /> */}
      <Herosection />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
