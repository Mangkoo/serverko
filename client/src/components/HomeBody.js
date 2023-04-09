import React from 'react';
import './HomeBody.css';


function HomeBody() {
  return (
    <>
      {/*Corousel.*/}
      <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">

        {/*Corousel buttons.*/}
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
        </div>

        {/*Corousel content.*/}
        <div class="carousel-inner h-100">

          {/*Item 1.*/}
          <div class="carousel-item active carousel-item-start h-100">
            <svg class="bd-placeholder-img h-100 w-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
            <div class="container">

              <div class="carousel-caption">
                <h1>Headline #1.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>

          {/*Item 2.*/}
          <div class="carousel-item carousel-item-next carousel-item-start h-100">
            <svg class="bd-placeholder-img h-100 w-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#ababab"></rect></svg>
            <div class="container">

              <div class="carousel-caption">
                <h1>Headline #2.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>

        </div>

      {/*Navigation Buttons.*/}
      <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      
      <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>

      {/*Body content.*/}
      <div class="card">
        <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  );
}

export default HomeBody;
