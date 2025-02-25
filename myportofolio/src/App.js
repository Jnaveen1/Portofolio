import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About' 
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Certificates from './components/Certificates';
import TechStack from './components/TechStack';

function App() {
  return (
      <Router>
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<ContactMe/>} />
          <Route path = "/certificates" element={<Certificates/>} />
        </Routes>
      </Router>
  );
}

export default App;


{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}