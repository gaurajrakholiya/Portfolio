import './App.css';
import React , {memo} from 'react'
// import { HashRouter as Router,Route,Routes, HashRouter } from 'react-router-dom';
import Sidebar1 from './components/sidebar1';
import Sidebar2 from './components/sidebar2';
import About from './components/about';
import Experience from './components/experience';
import Contact from './components/contact';
import Navbar from './components/navbar';


function App() {
  return (
    <>
        <Navbar />
        <Sidebar1/>
        <Sidebar2/>
        <About/>
        <Experience/>
        <Contact/>

    </>
    
  );
}

export default memo(App);
