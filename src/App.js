import logo from './logo.svg';
import './App.css';
import IntroPage from './Components/IntroPage';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import CompaniesWorkedSoFar from './Components/CompaniesWorkedSoFar';
import Contact from './Components/Contact';
import Certifications from './Components/Certifications';

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
    </div>
  );
}

export default App;
