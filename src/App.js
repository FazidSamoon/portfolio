import './App.css';
import Banner from './components/Banner';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
