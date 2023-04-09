import React from 'react';
import Navbar from './components/navigation/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Merch from './components/pages/Merch';
import SignUp from './components/pages/SignUp';
import Purchase from './components/pages/Purchase';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home/>} />
            {/*was donate, now purchase*/}
            <Route path='/purc' element={<Purchase/>} /> 
            {/*was staff, now about*/}
            <Route path='/about' element={<About/>} />
            {/*keep page in case needed*/}
            <Route path='/merch' element={<Merch/>} />
            {/*can remove this*/}
            <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
