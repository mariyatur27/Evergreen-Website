import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';
import Features from './components/features';
import Text from './components/text_section';
import 'bootstrap/dist/css/bootstrap.min.css';
import Invest from './components/invest_section';
import Strategy from './components/strategy';
import Footer from './components/footer';
import FAQ from './components/faq';
import Team from './components/team';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Strategy />
    <Text />
    <Features />
    <Team />
    <Invest />
    <FAQ />
    <Contact />
    <Footer />
    </>
  );
}

export default App;