import './App.scss';
import IntroPage from './Components/IntroPage';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import CompaniesWorkedSoFar from './Components/CompaniesWorkedSoFar';
import Contact from './Components/Contact';
import Certifications from './Components/Certifications';
import Footer from './Components/Footer';
import Education from './Components/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroPage />
      <Experience />
      {/* <CompaniesWorkedSoFar /> */}
      <Skills />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
