import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
{/*      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>*/}
          <div className='footer-links'>
        <div className='footer-link-wrapper'>
                  <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Contributors</Link>
            <Link to='/staff'>Staff</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
                  <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>

          </div>
        </div>
        <div className='footer-link-wrapper'>
                  <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Server Promo</Link>
            <Link to='/'>Gameplay</Link>
          </div>
                  <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Discord</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
          <section className='social-media'>
              <div className='social-media-wrap'>
                  <div className='footer-logo'>
            <Link to='/' className='social-logo'>
                          Mangk
              <i className="fab fa-monero"></i>
                      </Link>

          </div>
                  <small className='website-rights'>Mangko © 2021</small>
                  
          <div className='social-icons'>
            <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Yotube'>
                <i className='fab fa-youtube' />
            </Link>    
                      
            <Link className='social-icon-link discord' to='/' target='_blank' aria-label='Discord'>
                <i className='fab fa-discord' />
            </Link>
            <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                <i className='fab fa-twitter' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
