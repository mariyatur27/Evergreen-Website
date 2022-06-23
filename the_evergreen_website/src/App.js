import './App.css';
import Features from './public/features';
import About from './public/about';
import Navbar from './public/navbar';
import Hero from './public/hero';
import Contact from './public/contact_form';
import Footer from './public/footer';
import Team from './public/team';
import FAQ from './public/faq';
import Reasons from './public/reasons_sec';
import Invest from './public/invest';
import Slides from './public/slide';
import onceHub from './public/oncehub';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2 ? "same" : "different");
  return (
    <>
    <Navbar />
      <Router>
        <Routes>
          <Route path='/team' 
          element={
            <div>
              <Team />
              <Contact />
            </div>
          } />
          <Route path='/contact' 
          element={
            <div>
              <Contact />
            </div>
          } />
          <Route path='/faq' 
          element={
            <div>
              <FAQ />
              <Contact />
            </div>
          } />
          < Route path='/'
            element={
              <div>
                <Hero />
                <About />
                <Slides />
                <Features />
                <Reasons />
                <Invest />
                <onceHub />
                <Contact />
              </div>
            }
          />
        </Routes>
     </Router>
     <Footer />
    </>
  );
}

export default App;
