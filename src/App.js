import logo from './logo.svg';
import './App.css';
import IntroPage from './Components/IntroPage';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import CompaniesWorkedSoFar from './Components/CompaniesWorkedSoFar';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroPage />
      <Experience />
      {/* <CompaniesWorkedSoFar /> */}
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
