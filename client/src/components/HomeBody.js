import React from 'react';
import './HomeBody.css';


function HomeBody() {
  return (
    <>
      {/*Corousel.*/}
      <div id="homeCarousel" class="carousel slide mb-4" data-bs-ride="carousel">

        {/*Corousel buttons.*/}
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
        </div>

        {/*Corousel content.*/}
        <div class="carousel-inner h-100">

          {/*Item 1.*/}
          <div class="carousel-item active carousel-item-start h-100">
            <svg class="bd-placeholder-img h-100 w-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
            <div class="container">

              <div class="carousel-caption text-start">
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

              <div class="carousel-caption text-start">
                <h1>Headline #2.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>

            {/*Item 3.*/}
            <div class="carousel-item carousel-item-next carousel-item-start h-100">
            <svg class="bd-placeholder-img h-100 w-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#4d4d4d"></rect></svg>
            <div class="container">

              <div class="carousel-caption text-start">
                <h1>Headline #3.</h1>
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
      <div class="container marketing">
      
      {/*Info & Image.*/}
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">Visul makes it easy to learn and discover the world.</h2>
           <span class="text-muted">It'll blow your mind.</span>
          <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
        <div class="col-md-5">
          <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="45%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

        </div>
      </div>

  </div>


    </>
  );
}

export default HomeBody;
