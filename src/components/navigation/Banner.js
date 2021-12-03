import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='banner'>
                <div className='banner-container'>
                    <Link to='/' className='banner-logo' onClick={closeMobileMenu}>Mangk <i className="fab fa-monero"></i></Link>
                    <h3 className='banner-sub'>A community is starting..</h3>
                </div>
            </nav>
    </>
  );
}

export default Banner;
