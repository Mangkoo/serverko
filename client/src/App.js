import React from 'react';

// Import FontAwesome gloabally
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// Import Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Import Components 
import Navbar from './components/navigation/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Checkout from './components/pages/Checkout';
import SignUp from './components/pages/SignUp';
import Shop from './components/pages/Shop';
import Footer from './components/navigation/Footer';

// Import Global CSS
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home/>} />
            {/*was donate, now shop*/}
            <Route path='/shop' element={<Shop/>} /> 
            {/*was staff, now about*/}
            <Route path='/about' element={<About/>} />
            {/*keep page in case needed*/}
            <Route path='/checkout' element={<Checkout/>} />
            {/*can remove this*/}
            <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

// Add FontAwesome icons to Global Library
library.add(fab, fas, far)
