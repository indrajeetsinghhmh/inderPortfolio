import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import WhyMe from './components/WhyMe';

function App() {

  return (
    <div className="bg-black text-gray-300 min-h-screen font-sans">
      <header className="sticky top-0 bg-black bg-opacity-90 backdrop-blur-md z-50 shadow-md">
        <Navbar />
      </header>
      <main className="container mx-auto px-6">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="whyme">
          <WhyMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="text-center text-gray-500 py-6 mt-12 border-t border-gray-800">
        &copy; {new Date().getFullYear()} InderPortfolio. All rights reserved.
      </footer>
    </div>
  );
}

export default App
