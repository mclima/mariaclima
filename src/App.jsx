import Header from './sections/header/Header';
import Navbar from './sections/nav-bar/Navbar';
import Portfolio from './sections/portfolio/Portfolio';
import Skills from './sections/skills/Skills';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';

const App = () => {
  return (
    <main>
      <Header />
      <Navbar />
      <Portfolio />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
}

export default App;
