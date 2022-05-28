import './App.css';
import Features from './public/features';
import About from './public/about';
import Navbar from './public/navbar';
import Hero from './public/hero';
import Contact from './public/contact_form';
import Footer from './public/footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2 ? "same" : "different");
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Features />
    <Contact />
    <Footer />
      <Router>
        <Routes>
          <Route path='/team' 
          element={
            <div>
              <About />
            </div>
          } />
          < Route path='/'
            element={
              <div>
                <Features />
              </div>
            }
          />
        </Routes>
     </Router>
    </>
  );
}

export default App;
