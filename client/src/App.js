import React from 'react';
import Navbar from './components/navigation/Navbar';
import Banner from './components/navigation/Banner';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Donate from './components/pages/Donate';
import Staff from './components/pages/Staff';
import Merch from './components/pages/Merch';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Banner/>

        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/donate' element={<Donate/>} />
            <Route path='/staff' element={<Staff/>} />
            <Route path='/merch' element={<Merch/>} />
            <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
