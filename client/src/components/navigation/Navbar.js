import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Visul</a>

                    {/*Mobile Toggler.*/}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <Link to='/'><span class="navbar-toggler-icon"></span></Link>
                    </button>

                    {/*Nav Items.*/}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                              <Link to='/'class="nav-link">
                                  Home
                              </Link>
                          </li>
                          <li class="nav-item">
                              <Link to='/about'class="nav-link">
                                  About
                              </Link>
                          </li>
                          <li class="nav-item">
                              <Link to='/shop'class="nav-link">
                                  Shop
                              </Link>
                          </li>
                      </ul>

                      {/*Register/Login.*/}
                      <div class="d-flex">
                          <button class="btn btn-primary me-1" type="submit">Sign in or Register</button>
                      </div>
                    </div>
                </div>
            </nav>
        </>
  );
}

export default Navbar;
