import './App.css';
import IntroPage from './Components/IntroPage';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import CompaniesWorkedSoFar from './Components/CompaniesWorkedSoFar';
import Contact from './Components/Contact';
import Certifications from './Components/Certifications';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroPage />
      <Experience />
      {/* <CompaniesWorkedSoFar /> */}
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
