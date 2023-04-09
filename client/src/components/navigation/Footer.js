import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </a>
      <span class="mb-3 mb-md-0 text-muted">© 2022 Coddmpany, Inc cat</span>
      <div>Car</div>
    </div>

    <ul class="nav col-md-4 text-mutedjustify-content-end list-unstyled d-flex">
      <li class=""><i class="fa-brands fa-instagram"></i></li>
      <li class="ms-3"><i class="fa-brands fa-instagram"></i></li>
      <li class="ms-3"><i class="fa-brands fa-instagram"></i></li>
    </ul>
  </footer>
  );
}

export default Footer;
