import './App.css';
import Features from './public/features';
import About from './public/about';
import Navbar from './public/navbar';
import Hero from './public/hero';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Features />
    {/* <Router>
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
     </Router> */}
    </>
  );
}

export default App;
